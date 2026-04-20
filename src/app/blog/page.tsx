import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — AI Tool Reviews & Guides",
  description: "In-depth reviews, tutorials, and guides for the best AI and SaaS tools in 2026.",
};

const POSTS = [
  {
    slug: "best-ai-writing-tools-2026",
    title: "10 Best AI Writing Tools in 2026 (Tested & Ranked)",
    excerpt: "We tested every major AI writing tool head-to-head. Here are the ones actually worth paying for.",
    category: "AI Writing",
    date: "2026-04-20",
    readTime: "12 min",
  },
  {
    slug: "jasper-ai-review",
    title: "Jasper AI Review 2026: Is It Still Worth It?",
    excerpt: "A deep dive into Jasper's features, pricing, and performance after their latest AI model upgrade.",
    category: "Reviews",
    date: "2026-04-18",
    readTime: "8 min",
  },
  {
    slug: "semrush-vs-ahrefs-2026",
    title: "Semrush vs Ahrefs 2026: Which SEO Tool Wins?",
    excerpt: "The definitive comparison of the two biggest SEO platforms — features, pricing, and real results.",
    category: "Comparisons",
    date: "2026-04-15",
    readTime: "15 min",
  },
  {
    slug: "how-to-choose-email-marketing-platform",
    title: "How to Choose the Right Email Marketing Platform",
    excerpt: "A framework for picking the email tool that fits your business size, budget, and goals.",
    category: "Guides",
    date: "2026-04-12",
    readTime: "10 min",
  },
];

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <h1 className="mb-4 text-4xl font-extrabold text-gray-900">Blog</h1>
      <p className="mb-12 text-lg text-gray-500">Expert reviews, comparisons, and guides updated weekly.</p>

      <div className="space-y-8">
        {POSTS.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-brand-300 hover:shadow-md"
          >
            <div className="mb-2 flex items-center gap-3 text-sm text-gray-400">
              <span className="rounded-full bg-brand-50 px-2.5 py-0.5 text-xs font-medium text-brand-700">{post.category}</span>
              <span>{post.date}</span>
              <span>·</span>
              <span>{post.readTime} read</span>
            </div>
            <h2 className="mb-2 text-xl font-bold text-gray-900 group-hover:text-brand-600">{post.title}</h2>
            <p className="text-gray-500">{post.excerpt}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
