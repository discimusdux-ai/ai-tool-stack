import type { Metadata } from "next";
import { CategoryCard } from "@/components/ui/CategoryCard";
import { CATEGORIES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Categories — Browse AI & SaaS Tools by Type",
  description: "Browse our complete collection of AI and SaaS tool reviews organized by category.",
};

export default function CategoriesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="mb-4 text-4xl font-extrabold text-gray-900">All Categories</h1>
      <p className="mb-12 text-lg text-gray-500">Find the perfect tools for any part of your business.</p>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {CATEGORIES.map((cat) => (
          <CategoryCard key={cat.slug} category={cat} />
        ))}
      </div>
    </div>
  );
}
