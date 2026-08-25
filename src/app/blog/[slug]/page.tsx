import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { CTAButton } from "@/components/affiliate/CTAButton";
import { ComparisonTable } from "@/components/affiliate/ComparisonTable";
import { NewsletterForm } from "@/components/email/NewsletterForm";
import { StructuredData } from "@/components/seo/StructuredData";

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
      url: "https://aitoolstack.com",
    },
  };

  return (
    <>
      <StructuredData data={articleSchema} />

      {/* Article Header */}
      <header className="border-b border-white/10 bg-gray-900 py-16">
        <div className="mx-auto max-w-3xl px-4">
          <div className="mb-4 flex items-center gap-3">
            <Link
              href="/blog"
              className="text-sm text-brand-400 hover:underline"
            >
              ← Blog
            </Link>
            <span className="text-gray-600">|</span>
            <span className="rounded-full bg-brand-900/60 px-3 py-1 text-xs font-medium text-brand-300">
              {post.category}
            </span>
          </div>
          <h1 className="mb-4 text-4xl font-extrabold leading-tight text-white md:text-5xl">
            {post.title}
          </h1>
          <p className="mb-6 text-lg text-gray-300">{post.description}</p>
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <span>By {post.author}</span>
            <span>•</span>
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </time>
            <span>•</span>
            <span>{post.readingTime}</span>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <article className="bg-gray-950 py-12">
        <div className="prose prose-invert prose-lg mx-auto max-w-3xl px-4 prose-headings:font-bold prose-headings:text-white prose-p:text-gray-300 prose-li:text-gray-300 prose-strong:text-white prose-a:text-brand-400 prose-a:no-underline hover:prose-a:underline">
          <MDXRemote source={post.content} components={mdxComponents} />
        </div>
      </article>

      {/* Author Box + Newsletter */}
      <section className="border-t border-white/10 bg-gray-900 py-12">
        <div className="mx-auto max-w-3xl px-4">
          <div className="rounded-xl border border-white/10 bg-gray-800 p-8 text-center">
            <h3 className="mb-2 text-xl font-bold text-white">
              Enjoyed this article?
            </h3>
            <p className="mb-6 text-gray-300">
              Get our weekly newsletter with the latest AI tool reviews and
              exclusive deals.
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
                  className="group rounded-xl border border-white/10 bg-gray-900 p-6 transition-all hover:border-brand-400/40 hover:shadow-md"
                >
                  <span className="mb-2 inline-block rounded-full bg-gray-800 px-2.5 py-0.5 text-xs font-medium text-gray-300">
                    {rp.category}
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
