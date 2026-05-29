import Link from "next/link";
import type { Category } from "@/lib/constants";

export function CategoryCard({ category }: { category: Category }) {
  return (
    <Link
      href={`/categories/${category.slug}`}
      className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:border-brand-400/30 hover:bg-white/8 hover:shadow-lg hover:shadow-brand-900/30"
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/10 text-2xl ring-1 ring-brand-500/20">
        {category.icon}
      </div>
      <h3 className="mb-2 text-base font-bold text-white group-hover:text-brand-300">
        {category.name}
      </h3>
      <p className="mb-4 text-sm text-gray-500">{category.description}</p>
      <span className="inline-flex items-center gap-1 text-xs font-semibold text-brand-400 group-hover:gap-2 transition-all">
        {category.toolCount} tools reviewed →
      </span>
    </Link>
  );
}
