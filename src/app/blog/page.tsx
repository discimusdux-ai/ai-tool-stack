import Link from "next/link";
import type { Metadata } from "next";
import { getAllPosts, getFeaturedPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — AI Tool Reviews, Guides & Comparisons",
  description:
    "In-depth AI and SaaS tool reviews, buying guides, and expert comparisons. Updated weekly with the latest industry analysis.",
};

export default function BlogPage() {
  const posts = getAllPosts();
  const featured = getFeaturedPosts();

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/8 bg-gray-950 py-20">
        <div className="pointer-events-none absolute -top-20 left-1/4 w-[400px] h-[300px] rounded-full bg-brand-600/10 blur-[80px]" />
        <div className="relative mx-auto max-w-6xl px-4">
          <span className="mb-4 inline-block rounded-full bg-brand-500/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-brand-400">
            Reviews & Guides
          </span>
          <h1 className="mb-4 text-4xl font-extrabold text-white md:text-5xl">
            AI Tool Stack Blog
          </h1>
          <p className="max-w-2xl text-gray-400">
            Expert reviews, comparison guides, and actionable insights to help
            you pick the right AI and SaaS tools for your business.
          </p>
        </div>
      </section>

      {/* Featured Posts */}
      {featured.length > 0 && (
        <section className="py-14">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="mb-8 text-xs font-bold uppercase tracking-widest text-brand-400">
              Featured Articles
            </h2>
            <div className="grid gap-6 lg:grid-cols-2">
              {featured.slice(0, 2).map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all hover:border-brand-400/30 hover:bg-white/8 hover:shadow-lg hover:shadow-brand-900/30"
                >
                  <div className="mb-3 flex items-center gap-3">
                    <span className="rounded-full bg-brand-500/10 px-3 py-1 text-xs font-medium text-brand-300">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-500">{post.readingTime}</span>
                  </div>
                  <h3 className="mb-2 text-2xl font-bold text-white group-hover:text-brand-300">
                    {post.title}
                  </h3>
                  <p className="mb-4 text-gray-400">{post.description}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{post.author}</span>
                    <span>
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="pb-24 pt-4">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-8 text-xs font-bold uppercase tracking-widest text-gray-500">
            All Articles
          </h2>
          {posts.length === 0 ? (
            <p className="text-gray-500">No articles yet. Check back soon!</p>
          ) : (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:border-brand-400/30 hover:bg-white/8 hover:shadow-md hover:shadow-brand-900/30"
                >
                  <div className="mb-3 flex items-center gap-2">
                    <span className="rounded-full bg-white/5 px-2.5 py-0.5 text-xs font-medium text-gray-400 ring-1 ring-white/10">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-600">{post.readingTime}</span>
                  </div>
                  <h3 className="mb-2 text-base font-bold text-white group-hover:text-brand-300">
                    {post.title}
                  </h3>
                  <p className="mb-4 flex-1 text-sm text-gray-500">{post.description}</p>
                  <span className="text-xs text-gray-600">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
