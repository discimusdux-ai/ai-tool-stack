import type { Metadata } from "next";
import Link from "next/link";
import { getAllToolReviews, getFeaturedTools } from "@/lib/tools";
import { CATEGORIES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "AI & SaaS Tool Reviews — In-Depth Reviews & Ratings | AI Tool Stack",
  description:
    "Honest, in-depth reviews of the best AI and SaaS tools for 2026. We test and rate tools across writing, SEO, design, automation, CRM, and more.",
};

const RATING_COLORS: Record<string, string> = {
  "5": "text-green-600",
  "4.5": "text-green-600",
  "4.0": "text-blue-600",
  "3.5": "text-yellow-600",
};

function getRatingColor(rating: number): string {
  if (rating >= 4.5) return "text-green-600";
  if (rating >= 4.0) return "text-blue-600";
  return "text-yellow-600";
}

export default function ToolsPage() {
  const tools = getAllToolReviews();
  const featured = getFeaturedTools(3);
  const categories = CATEGORIES;

  return (
    <>
      {/* Hero */}
      <section className="border-b border-gray-100 bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h1 className="mb-4 text-4xl font-extrabold text-gray-900 md:text-5xl">
            AI & SaaS Tool Reviews
          </h1>
          <p className="max-w-2xl text-lg text-gray-600">
            We test and review the best AI and SaaS tools on the market — so
            you can make informed decisions without wasting money on the wrong
            software.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 text-sm text-gray-500">
            <span className="flex items-center gap-1">
              <span className="font-bold text-brand-600">{tools.length}+</span>
              tools reviewed
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <span className="font-bold text-brand-600">{categories.length}</span>
              categories covered
            </span>
            <span>•</span>
            <span>Updated weekly</span>
          </div>
        </div>
      </section>

      {/* Featured Reviews */}
      <section className="py-12">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-8 text-sm font-bold uppercase tracking-wider text-brand-600">
            Top Rated Tools
          </h2>
          <div className="grid gap-6 lg:grid-cols-3">
            {featured.map((tool) => (
              <Link
                key={tool.slug}
                href={`/tools/${tool.slug}`}
                className="group rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-brand-300 hover:shadow-lg"
              >
                <div className="mb-3 flex items-center justify-between">
                  <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                    {tool.category}
                  </span>
                  <span className={`font-bold ${getRatingColor(tool.rating)}`}>
                    ★ {tool.rating}
                  </span>
                </div>
                <h3 className="mb-1 text-xl font-bold text-gray-900 group-hover:text-brand-600">
                  {tool.name}
                </h3>
                <p className="mb-3 text-sm text-gray-500">{tool.tagline}</p>
                <p className="text-sm text-gray-600 line-clamp-2">
                  {tool.description}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">
                    {tool.price}
                  </span>
                  <span className="text-sm font-medium text-brand-600 group-hover:underline">
                    Read review →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Reviews Grid */}
      <section className="border-t border-gray-100 py-12">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-8 text-2xl font-bold text-gray-900">
            All Tool Reviews
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {tools.map((tool) => (
              <Link
                key={tool.slug}
                href={`/tools/${tool.slug}`}
                className="group flex flex-col rounded-lg border border-gray-200 bg-white p-5 transition-all hover:border-brand-300 hover:shadow-md"
              >
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-xs font-medium uppercase tracking-wide text-gray-400">
                    {tool.category}
                  </span>
                  <span className={`text-sm font-bold ${getRatingColor(tool.rating)}`}>
                    ★ {tool.rating}
                  </span>
                </div>
                <h3 className="mb-1 text-lg font-bold text-gray-900 group-hover:text-brand-600">
                  {tool.name}
                </h3>
                <p className="flex-1 text-sm text-gray-500 line-clamp-2">
                  {tool.description}
                </p>
                <div className="mt-3 flex items-center justify-between border-t border-gray-100 pt-3">
                  <span className="text-sm text-gray-600">{tool.price}</span>
                  <span className="text-xs font-medium text-brand-600">
                    Read review →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Browse by Category CTA */}
      <section className="border-t border-gray-100 bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-8 text-2xl font-bold text-gray-900">
            Browse by Category
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {categories.slice(0, 8).map((cat) => (
              <Link
                key={cat.slug}
                href={`/categories/${cat.slug}`}
                className="group flex items-center gap-3 rounded-lg border border-gray-200 bg-white p-4 transition-all hover:border-brand-300 hover:shadow-md"
              >
                <span className="text-2xl">{cat.icon}</span>
                <div>
                  <div className="font-semibold text-gray-900 group-hover:text-brand-600">
                    {cat.name}
                  </div>
                  <div className="text-xs text-gray-400">{cat.toolCount}+ tools</div>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link
              href="/categories"
              className="inline-flex items-center rounded-lg border border-brand-200 bg-white px-6 py-3 font-medium text-brand-600 transition hover:bg-brand-50"
            >
              View all {categories.length} categories →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
