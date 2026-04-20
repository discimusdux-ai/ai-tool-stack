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
      <section className="border-b border-gray-100 bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h1 className="mb-4 text-4xl font-extrabold text-gray-900 md:text-5xl">
            AI Tool Stack Blog
          </h1>
          <p className="max-w-2xl text-lg text-gray-600">
            Expert reviews, comparison guides, and actionable insights to help
            you pick the right AI and SaaS tools for your business.
          </p>
        </div>
      </section>

      {/* Featured Posts */}
      {featured.length > 0 && (
        <section className="py-12">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="mb-8 text-sm font-bold uppercase tracking-wider text-brand-600">
              Featured Articles
            </h2>
            <div className="grid gap-8 lg:grid-cols-2">
              {featured.slice(0, 2).map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group rounded-xl border border-gray-200 bg-white p-8 transition-all hover:border-brand-300 hover:shadow-lg"
                >
                  <div className="mb-3 flex items-center gap-3">
                    <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-400">
                      {post.readingTime}
                    </span>
                  </div>
                  <h3 className="mb-2 text-2xl font-bold text-gray-900 group-hover:text-brand-600">
                    {post.title}
                  </h3>
                  <p className="mb-4 text-gray-600">{post.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-400">
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
      <section className="py-12">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-8 text-sm font-bold uppercase tracking-wider text-gray-500">
            All Articles
          </h2>
          {posts.length === 0 ? (
            <p className="text-gray-500">
              No articles yet. Check back soon!
            </p>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-brand-300 hover:shadow-md"
                >
                  <div className="mb-3 flex items-center gap-2">
                    <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-600">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-400">
                      {post.readingTime}
                    </span>
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-gray-900 group-hover:text-brand-600">
                    {post.title}
                  </h3>
                  <p className="mb-4 flex-1 text-sm text-gray-500">
                    {post.description}
                  </p>
                  <span className="text-xs text-gray-400">
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
