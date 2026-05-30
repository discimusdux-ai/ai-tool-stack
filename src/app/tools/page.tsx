import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getAllToolReviews, getFeaturedTools } from "@/lib/tools";
import { CATEGORIES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "AI & SaaS Tool Reviews — In-Depth Reviews & Ratings | AI Tool Stack",
  description:
    "Honest, in-depth reviews of the best AI and SaaS tools for 2026. We test and rate tools across writing, SEO, design, automation, CRM, and more.",
};

function getRatingColor(rating: number): string {
  if (rating >= 4.5) return "text-green-400";
  if (rating >= 4.0) return "text-blue-400";
  return "text-yellow-400";
}

function RatingBadge({ rating }: { rating: number }) {
  const color = getRatingColor(rating);
  return (
    <span className={`inline-flex items-center gap-1 text-sm font-bold ${color}`}>
      ★ {rating}
    </span>
  );
}

export default function ToolsPage() {
  const tools = getAllToolReviews();
  const featured = getFeaturedTools(3);
  const categories = CATEGORIES;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/5 bg-[#060a10] py-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/4 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-brand-600/10 blur-3xl" />
          <div className="absolute right-1/4 top-8 h-64 w-64 rounded-full bg-brand-400/5 blur-2xl" />
        </div>
        <div className="relative mx-auto max-w-6xl px-4">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-brand-500/10 px-4 py-1.5 text-xs font-semibold text-brand-400 ring-1 ring-brand-500/20">
            🔬 {tools.length}+ tools tested & rated
          </div>
          <h1 className="mb-4 text-4xl font-extrabold text-white md:text-5xl">
            AI & SaaS Tool Reviews
          </h1>
          <p className="max-w-2xl text-lg text-gray-400">
            We test and review the best AI and SaaS tools on the market — so
            you can make informed decisions without wasting money on the wrong
            software.
          </p>
          <div className="mt-6 flex flex-wrap gap-6 text-sm text-gray-500">
            <span className="flex items-center gap-1">
              <span className="font-bold text-brand-400">{tools.length}+</span>
              tools reviewed
            </span>
            <span className="text-gray-600">•</span>
            <span className="flex items-center gap-1">
              <span className="font-bold text-brand-400">{categories.length}</span>
              categories covered
            </span>
            <span className="text-gray-600">•</span>
            <span className="text-gray-400">Updated weekly</span>
          </div>
        </div>
      </section>

      {/* Top Rated Tools */}
      <section className="bg-[#060a10] py-14">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-8 flex items-center gap-3">
            <span className="h-px flex-1 bg-white/5" />
            <h2 className="text-xs font-bold uppercase tracking-widest text-brand-400">
              ⭐ Top Rated
            </h2>
            <span className="h-px flex-1 bg-white/5" />
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {featured.map((tool) => (
              <Link
                key={tool.slug}
                href={`/tools/${tool.slug}`}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0d1117] transition-all hover:border-brand-500/40 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)]"
              >
                {/* Image */}
                <div className="relative h-44 w-full overflow-hidden">
                  {tool.imageUrl ? (
                    <Image
                      src={tool.imageUrl}
                      alt={tool.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-brand-900/50 to-[#060a10]">
                      <span className="text-5xl opacity-20">🛠️</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117] via-[#0d1117]/30 to-transparent" />
                  {/* Rating badge overlay */}
                  <div className="absolute right-3 top-3 rounded-full bg-black/60 px-2.5 py-1 backdrop-blur-sm">
                    <RatingBadge rating={tool.rating} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <span className="mb-2 inline-block rounded-full bg-brand-500/10 px-2.5 py-0.5 text-xs font-medium text-brand-400 ring-1 ring-brand-500/20">
                    {tool.category}
                  </span>
                  <h3 className="mb-1 text-xl font-bold text-white group-hover:text-brand-400 transition-colors">
                    {tool.name}
                  </h3>
                  <p className="mb-3 text-sm text-gray-500 line-clamp-1">{tool.tagline}</p>
                  <p className="mb-4 text-sm text-gray-400 line-clamp-2">
                    {tool.description}
                  </p>
                  <div className="flex items-center justify-between border-t border-white/5 pt-3">
                    <span className="text-sm font-semibold text-gray-300">
                      {tool.price}
                    </span>
                    <span className="text-sm font-medium text-brand-400 group-hover:underline">
                      Read review →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Reviews Grid */}
      <section className="border-t border-white/5 bg-[#080c14] py-14">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-8 text-2xl font-bold text-white">All Tool Reviews</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {tools.map((tool) => (
              <Link
                key={tool.slug}
                href={`/tools/${tool.slug}`}
                className="group flex overflow-hidden rounded-xl border border-white/10 bg-[#0d1117] transition-all hover:border-brand-500/40 hover:shadow-[0_0_20px_rgba(99,102,241,0.1)]"
              >
                {/* Thumbnail */}
                <div className="relative h-auto w-24 flex-shrink-0 overflow-hidden">
                  {tool.imageUrl ? (
                    <Image
                      src={tool.imageUrl}
                      alt={tool.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="96px"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-brand-900/40 to-[#0d1117]">
                      <span className="text-2xl opacity-30">🛠️</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0d1117]/50" />
                </div>

                {/* Info */}
                <div className="flex flex-1 flex-col p-4">
                  <div className="mb-1 flex items-center justify-between">
                    <span className="text-xs font-medium uppercase tracking-wide text-brand-400/70">
                      {tool.category}
                    </span>
                    <RatingBadge rating={tool.rating} />
                  </div>
                  <h3 className="mb-1 font-bold text-white group-hover:text-brand-400 transition-colors">
                    {tool.name}
                  </h3>
                  <p className="flex-1 text-xs text-gray-500 line-clamp-2">
                    {tool.description}
                  </p>
                  <div className="mt-2 flex items-center justify-between border-t border-white/5 pt-2">
                    <span className="text-xs text-gray-400">{tool.price}</span>
                    <span className="text-xs font-medium text-brand-400">
                      Review →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Browse by Category */}
      <section className="border-t border-white/5 bg-[#060a10] py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-8 text-2xl font-bold text-white">Browse by Category</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {categories.slice(0, 8).map((cat) => (
              <Link
                key={cat.slug}
                href={`/categories/${cat.slug}`}
                className="group relative overflow-hidden rounded-xl border border-white/10 bg-[#0d1117] p-4 transition-all hover:border-brand-500/40 hover:shadow-[0_0_20px_rgba(99,102,241,0.1)]"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-brand-600/20 text-2xl ring-1 ring-brand-500/20">
                    {cat.icon}
                  </div>
                  <div>
                    <div className="font-semibold text-white group-hover:text-brand-400 transition-colors">
                      {cat.name}
                    </div>
                    <div className="text-xs text-gray-500">{cat.toolCount}+ tools</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link
              href="/categories"
              className="inline-flex items-center rounded-lg border border-brand-500/30 bg-brand-600/10 px-6 py-3 font-medium text-brand-400 transition hover:bg-brand-600/20"
            >
              View all {categories.length} categories →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
