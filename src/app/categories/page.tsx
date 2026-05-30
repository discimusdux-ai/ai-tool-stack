import type { Metadata } from "next";
import { CategoryCard } from "@/components/ui/CategoryCard";
import { CATEGORIES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Categories — Browse AI & SaaS Tools by Type",
  description:
    "Explore our curated categories of AI and SaaS tools. From AI writing and SEO to project management and CRM — find the perfect tool for every need.",
};

export default function CategoriesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/5 bg-[#060a10] py-20">
        {/* Background glow */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/4 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-brand-600/10 blur-3xl" />
          <div className="absolute right-1/4 top-8 h-56 w-56 rounded-full bg-brand-400/5 blur-2xl" />
        </div>
        <div className="relative mx-auto max-w-6xl px-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-500/10 px-4 py-1.5 text-xs font-semibold text-brand-400 ring-1 ring-brand-500/20 mb-5">
            🗂 {CATEGORIES.length} categories · {CATEGORIES.reduce((acc, c) => acc + c.toolCount, 0)}+ tools reviewed
          </div>
          <h1 className="mb-4 text-4xl font-extrabold text-white md:text-5xl">
            Browse by Category
          </h1>
          <p className="max-w-2xl text-lg text-gray-400">
            We organize AI and SaaS tools into clear categories so you can find
            exactly what you need, fast. Each category includes reviews,
            comparisons, and buying guides.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="bg-[#060a10] py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CATEGORIES.map((cat) => (
              <CategoryCard key={cat.slug} category={cat} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-t border-white/5 bg-[#080c14] py-12">
        <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-12 px-4 text-center">
          <div>
            <div className="text-3xl font-extrabold text-brand-400">
              {CATEGORIES.length}
            </div>
            <div className="text-sm text-gray-500">Categories</div>
          </div>
          <div>
            <div className="text-3xl font-extrabold text-brand-400">
              {CATEGORIES.reduce((acc, c) => acc + c.toolCount, 0)}+
            </div>
            <div className="text-sm text-gray-500">Tools Reviewed</div>
          </div>
          <div>
            <div className="text-3xl font-extrabold text-brand-400">
              Weekly
            </div>
            <div className="text-sm text-gray-500">New Reviews Added</div>
          </div>
        </div>
      </section>
    </>
  );
}
