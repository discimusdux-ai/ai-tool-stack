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
      <section className="border-b border-gray-100 bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h1 className="mb-4 text-4xl font-extrabold text-gray-900 md:text-5xl">
            Browse by Category
          </h1>
          <p className="max-w-2xl text-lg text-gray-600">
            We organize tools into clear categories so you can find exactly
            what you need, fast. Each category includes reviews, comparisons,
            and buying guides.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CATEGORIES.map((cat) => (
              <CategoryCard key={cat.slug} category={cat} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-t border-gray-100 bg-gray-50 py-12">
        <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-12 px-4 text-center">
          <div>
            <div className="text-3xl font-extrabold text-brand-600">
              {CATEGORIES.length}
            </div>
            <div className="text-sm text-gray-500">Categories</div>
          </div>
          <div>
            <div className="text-3xl font-extrabold text-brand-600">
              {CATEGORIES.reduce((acc, c) => acc + c.toolCount, 0)}+
            </div>
            <div className="text-sm text-gray-500">Tools Reviewed</div>
          </div>
          <div>
            <div className="text-3xl font-extrabold text-brand-600">
              Weekly
            </div>
            <div className="text-sm text-gray-500">New Reviews Added</div>
          </div>
        </div>
      </section>
    </>
  );
}
