import Link from "next/link";
import Image from "next/image";
import type { Category } from "@/lib/constants";

export function CategoryCard({ category }: { category: Category }) {
  return (
    <Link
      href={`/categories/${category.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0d1117] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/40 hover:shadow-brand-900/40 hover:shadow-xl"
    >
      {/* Banner image */}
      <div className="relative h-40 w-full overflow-hidden">
        <Image
          src={`/images/categories/${category.slug}.webp`}
          alt={category.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117] via-[#0d1117]/40 to-transparent" />
        {/* Icon badge */}
        <div className="absolute bottom-3 left-4 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-600/90 text-xl shadow-lg backdrop-blur-sm ring-1 ring-brand-400/30">
          {category.icon}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5 pt-4">
        <h3 className="mb-1.5 text-base font-bold text-white group-hover:text-brand-300 transition-colors">
          {category.name}
        </h3>
        <p className="mb-4 flex-1 text-sm leading-relaxed text-gray-400">
          {category.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-500/10 px-3 py-1 text-xs font-semibold text-brand-400 ring-1 ring-brand-500/20">
            {category.toolCount} tools
          </span>
          <span className="text-xs font-medium text-gray-500 transition-all group-hover:text-brand-400 group-hover:translate-x-0.5">
            Explore →
          </span>
        </div>
      </div>
    </Link>
  );
}
