import Link from "next/link";
import type { Category } from "@/lib/constants";

export function CategoryCard({ category }: { category: Category }) {
  return (
    <Link
      href={`/categories/${category.slug}`}
      className="group rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-brand-300 hover:shadow-lg"
    >
      <div className="mb-3 text-3xl">{category.icon}</div>
      <h3 className="mb-2 text-lg font-bold text-gray-900 group-hover:text-brand-600">
        {category.name}
      </h3>
      <p className="mb-4 text-sm text-gray-500">{category.description}</p>
      <span className="text-xs font-medium text-brand-600">
        {category.toolCount} tools reviewed →
      </span>
    </Link>
  );
}
