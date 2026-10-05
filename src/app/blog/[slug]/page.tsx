import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { CTAButton } from "@/components/affiliate/CTAButton";
import { ComparisonTable } from "@/components/affiliate/ComparisonTable";
import { NewsletterForm } from "@/components/email/NewsletterForm";
import { StructuredData } from "@/components/seo/StructuredData";
import { ReadingProgress } from "@/components/article/ReadingProgress";
import { TableOfContents } from "@/components/article/TableOfContents";
import { ShareBar } from "@/components/article/ShareBar";
import { BackToTop } from "@/components/article/BackToTop";
import { CATEGORIES } from "@/lib/constants";
import { extractToc, slugify, textOf } from "@/lib/toc";
import fs from "fs";
import path from "path";

const SITE = "https://youraitoolstack.com";

function heroImageFor(category: string): string {
  const slug = category.toLowerCase().replace(/[\s&]+/g, "-");
  const file = path.join(process.cwd(), "public/images/categories", `${slug}.webp`);
  return fs.existsSync(file) ? `/images/categories/${slug}.webp` : "/images/categories/ai-writing.webp";
}

function categoryLabel(category: string): string {
  const slug = category.toLowerCase().replace(/[\s&]+/g, "-");
  return CATEGORIES.find((c) => c.slug === slug)?.name ?? category;
}

type HProps = React.HTMLAttributes<HTMLHeadingElement>;

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: post.title,
    description: post.description,
    authors: [{ name: post.author }],
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.updated,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

const mdxComponents = {
  CTAButton,
  ComparisonTable,
  NewsletterForm,
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
    const isExternal = props.href?.startsWith("http");
    if (!isExternal) return <a {...props} />;

    return (
      <a
        {...props}
        target="_blank"
        rel="noopener noreferrer"
      />
    );
  },
  h1: () => null, // title already rendered in the hero
  h2: ({ children, ...rest }: HProps) => {
    const id = slugify(textOf(children));
    return (
      <h2 id={id} className="group scroll-mt-24" {...rest}>
        <a href={`#${id}`} className="!text-white !no-underline">
          {children}
          <span className="ml-2 text-brand-400 opacity-0 transition group-hover:opacity-100">#</span>
        </a>
      </h2>
    );
  },
  h3: ({ children, ...rest }: HProps) => (
    <h3 id={slugify(textOf(children))} className="scroll-mt-24" {...rest}>{children}</h3>
  ),
  table: (props: React.TableHTMLAttributes<HTMLTableElement>) => (
    <div className="not-prose my-8 overflow-x-auto rounded-2xl border border-white/10 bg-gray-900/60 shadow-xl shadow-black/20">
      <table className="article-table w-full text-left text-sm" {...props} />
    </div>
  ),
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className="not-italic my-8 rounded-2xl border border-brand-400/30 border-l-4 border-l-brand-400 bg-gradient-to-br from-brand-500/10 to-transparent px-6 py-4 [&>p]:my-2"
      {...props}
    />
  ),
  hr: () => <hr className="my-12 border-0 h-px bg-gradient-to-r from-transparent via-brand-400/40 to-transparent" />,
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  // Related posts: score by category match (case/format-insensitive) + shared tags,
  // so every post gets 3 related links even when its category has few siblings.
  const normalize = (s: string) => s.toLowerCase().replace(/[\s&]+/g, "-");
  const postCategory = normalize(post.category);
  const postTags = new Set((post.tags || []).map((t) => t.toLowerCase()));

  const relatedPosts = getAllPosts()
    .filter((p) => p.slug !== post.slug)
    .map((p) => {
      const sharedTags = (p.tags || []).filter((t) => postTags.has(t.toLowerCase())).length;
      const score = (normalize(p.category) === postCategory ? 3 : 0) + sharedTags * 2;
      return { post: p, score };
    })
    .filter((p) => p.score > 0)
    .sort((a, b) => b.score - a.score || (a.post.date < b.post.date ? 1 : -1))
    .slice(0, 3)
    .map((p) => p.post);

  const toc = extractToc(post.content);
  const heroImage = heroImageFor(post.category);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    author: { "@type": "Organization", name: post.author },
    datePublished: post.date,
    dateModified: post.updated || post.date,
    publisher: {
      "@type": "Organization",
      name: "AI Tool Stack",
      url: SITE,
    },
  };

  return (
    <>
      <StructuredData data={articleSchema} />

      <ReadingProgress />
      <BackToTop />

      {/* Article Hero */}
      <header className="relative overflow-hidden border-b border-white/10 bg-gray-950 py-20 md:py-28">
        <div
          className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-gray-950/40 via-gray-950/80 to-gray-950" />
        <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-brand-600/20 blur-[120px]" />
        <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-accent-600/15 blur-[110px]" />
        <div className="relative mx-auto max-w-4xl px-4">
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <Link href="/blog" className="text-sm text-gray-400 transition hover:text-white">← All articles</Link>
            <span className="rounded-full border border-brand-400/30 bg-brand-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-300">
              {categoryLabel(post.category)}
            </span>
          </div>
          <h1 className="mb-5 bg-gradient-to-br from-white via-white to-brand-200 bg-clip-text text-4xl font-extrabold leading-tight text-transparent md:text-6xl">
            {post.title}
          </h1>
          <p className="mb-8 max-w-3xl text-lg text-gray-300 md:text-xl">{post.description}</p>
          <div className="mb-8 flex flex-wrap items-center gap-3 text-sm text-gray-400">
            <span className="flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 ring-1 ring-white/10">✍️ {post.author}</span>
            <span className="flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 ring-1 ring-white/10">
              📅 <time dateTime={post.updated || post.date}>
                {post.updated ? "Updated " : ""}
                {new Date(post.updated || post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
              </time>
            </span>
            <span className="flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 ring-1 ring-white/10">⏱ {post.readingTime}</span>
          </div>
          <ShareBar url={`${SITE}/blog/${post.slug}`} title={post.title} />
        </div>
      </header>

      {/* Article Content + TOC */}
      <div className="bg-gray-950 py-12">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-[minmax(0,1fr)_260px]">
          <article
            id="article-body"
            className="prose prose-invert prose-lg max-w-none prose-headings:font-bold prose-headings:text-white prose-h2:mt-16 prose-h2:border-b prose-h2:border-white/10 prose-h2:pb-3 prose-h3:text-brand-200 prose-p:text-gray-300 prose-li:text-gray-300 prose-li:marker:text-brand-400 prose-strong:text-white prose-a:text-brand-400 prose-a:no-underline hover:prose-a:underline prose-code:rounded prose-code:bg-white/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:before:content-none prose-code:after:content-none"
          >
            {toc.length >= 2 && (
              <details className="not-prose mb-10 rounded-2xl border border-white/10 bg-gray-900/60 p-5 lg:hidden">
                <summary className="cursor-pointer text-sm font-bold uppercase tracking-widest text-gray-400">On this page</summary>
                <ul className="mt-3 space-y-2">
                  {toc.map((i) => (
                    <li key={i.id}><a href={`#${i.id}`} className="text-sm text-gray-300 hover:text-white">{i.text}</a></li>
                  ))}
                </ul>
              </details>
            )}
            <MDXRemote source={post.content} components={mdxComponents} />
          </article>
          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-6">
              <TableOfContents items={toc} />
              <div className="rounded-2xl border border-brand-400/20 bg-gradient-to-br from-brand-500/15 to-accent-500/5 p-5">
                <p className="mb-1 font-bold text-white">Get the weekly picks</p>
                <p className="mb-4 text-sm text-gray-400">New reviews, price changes, and deal alerts. Free.</p>
                <Link href="/newsletter" className="block rounded-xl bg-brand-500 px-4 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-brand-400">Subscribe →</Link>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Author Box + Newsletter */}
      <section className="border-t border-white/10 bg-gray-900 py-12">
        <div className="mx-auto max-w-3xl px-4">
          <div className="rounded-xl border border-white/10 bg-gray-800 p-8 text-center">
            <h3 className="mb-2 text-xl font-bold text-white">
              Enjoyed this article?
            </h3>
            <p className="mb-6 text-gray-300">
              Get our weekly newsletter with the latest AI tool reviews and
              deal alerts.
            </p>
            <NewsletterForm variant="inline" />
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="bg-gray-950 py-12">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="mb-8 text-2xl font-bold text-white">Related Articles</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((rp) => (
                <Link
                  key={rp.slug}
                  href={`/blog/${rp.slug}`}
                  className="group rounded-2xl border border-white/10 bg-gray-900 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-400/40 hover:shadow-xl hover:shadow-brand-900/30"
                >
                  <span className="mb-2 inline-block rounded-full bg-gray-800 px-2.5 py-0.5 text-xs font-medium text-gray-300">
                    {categoryLabel(rp.category)}
                  </span>
                  <h3 className="mb-2 font-bold text-white group-hover:text-brand-400">
                    {rp.title}
                  </h3>
                  <p className="text-sm text-gray-400">{rp.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
