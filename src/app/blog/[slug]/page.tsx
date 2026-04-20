import type { Metadata } from "next";
import Link from "next/link";
import { NewsletterForm } from "@/components/email/NewsletterForm";

// This will be replaced with MDX content loading
const ARTICLES: Record<string, { title: string; date: string; category: string; readTime: string; content: string }> = {
  "best-ai-writing-tools-2026": {
    title: "10 Best AI Writing Tools in 2026 (Tested & Ranked)",
    date: "2026-04-20",
    category: "AI Writing",
    readTime: "12 min",
    content: `
## Why AI Writing Tools Matter in 2026

AI writing tools have evolved from novelty to necessity. The best ones don't just generate text — they understand your brand voice, optimize for SEO, and integrate into your existing workflow.

We spent 40+ hours testing every major AI writing platform. Here are the ones that actually deliver.

## Our Top Picks

### 1. Jasper AI — Best Overall
**Rating: 4.7/5 | Starting at $49/mo**

Jasper remains the gold standard for marketing teams. Their latest model update dramatically improved long-form content quality, and the brand voice feature is genuinely useful (not just a gimmick).

**Pros:**
- Best-in-class brand voice training
- 50+ content templates
- Team collaboration built-in
- Excellent long-form output

**Cons:**
- Premium pricing
- Learning curve for advanced features

### 2. Copy.ai — Best for Quick Copy
**Rating: 4.5/5 | Free tier available**

If you need quick social posts, ad copy, or email subject lines, Copy.ai is unbeatable. The free tier is generous enough to test properly.

### 3. Surfer SEO + AI — Best for SEO Content
**Rating: 4.6/5 | Starting at $89/mo**

Surfer's AI writer is unique because it bakes SEO optimization directly into the generation process. Every piece of content is born optimized.

## How We Tested

Every tool was evaluated on:
- **Output quality** (clarity, accuracy, creativity)
- **SEO capability** (keyword optimization, structure)
- **Speed** (time from prompt to publishable draft)
- **Value** (features per dollar)
- **Integration** (workflow compatibility)

## The Bottom Line

For most businesses, **Jasper AI** is the safest bet. For budget-conscious creators, **Copy.ai's free tier** is an excellent starting point. For SEO-focused content, **Surfer SEO** is unmatched.
    `,
  },
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = ARTICLES[slug];
  if (!article) return { title: "Article Not Found" };
  return {
    title: article.title,
    description: article.content.slice(0, 160).replace(/[#*\n]/g, "").trim(),
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = ARTICLES[slug];

  if (!article) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-20 text-center">
        <h1 className="mb-4 text-3xl font-bold">Article Coming Soon</h1>
        <p className="mb-8 text-gray-500">This article is being written. Check back shortly.</p>
        <Link href="/blog" className="cta-button">← Back to Blog</Link>
      </div>
    );
  }

  return (
    <article className="mx-auto max-w-3xl px-4 py-16">
      {/* Header */}
      <div className="mb-8">
        <div className="mb-4 flex items-center gap-3 text-sm text-gray-400">
          <span className="rounded-full bg-brand-50 px-2.5 py-0.5 text-xs font-medium text-brand-700">{article.category}</span>
          <span>{article.date}</span>
          <span>·</span>
          <span>{article.readTime} read</span>
        </div>
        <h1 className="text-4xl font-extrabold leading-tight text-gray-900">{article.title}</h1>
      </div>

      {/* Content */}
      <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-a:text-brand-600">
        {article.content.split("\n").map((line, i) => {
          if (line.startsWith("## ")) return <h2 key={i} className="mt-10 mb-4 text-2xl font-bold">{line.replace("## ", "")}</h2>;
          if (line.startsWith("### ")) return <h3 key={i} className="mt-8 mb-3 text-xl font-bold">{line.replace("### ", "")}</h3>;
          if (line.startsWith("**") && line.endsWith("**")) return <p key={i} className="font-semibold">{line.replace(/\*\*/g, "")}</p>;
          if (line.startsWith("- ")) return <li key={i} className="ml-4">{line.replace("- ", "")}</li>;
          if (line.trim() === "") return null;
          return <p key={i} className="mb-4 text-gray-700 leading-relaxed">{line}</p>;
        })}
      </div>

      {/* Newsletter CTA */}
      <div className="mt-16 rounded-xl border border-brand-200 bg-brand-50 p-8">
        <h3 className="mb-2 text-xl font-bold text-gray-900">Get More Reviews Like This</h3>
        <p className="mb-4 text-gray-600">Weekly deep-dives on the best AI tools, delivered free.</p>
        <NewsletterForm variant="inline" />
      </div>

      {/* Back */}
      <div className="mt-8">
        <Link href="/blog" className="text-sm font-medium text-brand-600 hover:underline">← Back to all articles</Link>
      </div>
    </article>
  );
}
