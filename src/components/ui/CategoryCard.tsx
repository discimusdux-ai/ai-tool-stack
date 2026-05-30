import Link from "next/link";
import type { Category } from "@/lib/constants";

// Color mapping for each category type
const CATEGORY_COLORS: Record<string, { gradient: string; ring: string; badge: string }> = {
  "ai-writing":          { gradient: "from-violet-600/15 to-violet-900/5",  ring: "ring-violet-500/20",  badge: "bg-violet-500/10 text-violet-300" },
  "seo-marketing":       { gradient: "from-emerald-600/15 to-emerald-900/5", ring: "ring-emerald-500/20", badge: "bg-emerald-500/10 text-emerald-300" },
  "project-management":  { gradient: "from-orange-600/15 to-orange-900/5",  ring: "ring-orange-500/20",  badge: "bg-orange-500/10 text-orange-300" },
  "email-marketing":     { gradient: "from-pink-600/15 to-pink-900/5",      ring: "ring-pink-500/20",    badge: "bg-pink-500/10 text-pink-300" },
  "crm-sales":           { gradient: "from-sky-600/15 to-sky-900/5",        ring: "ring-sky-500/20",     badge: "bg-sky-500/10 text-sky-300" },
  "design-creative":     { gradient: "from-fuchsia-600/15 to-fuchsia-900/5",ring: "ring-fuchsia-500/20", badge: "bg-fuchsia-500/10 text-fuchsia-300" },
  "ai-coding":           { gradient: "from-brand-600/15 to-brand-900/5",    ring: "ring-brand-500/20",   badge: "bg-brand-500/10 text-brand-300" },
  "business-automation": { gradient: "from-yellow-600/15 to-yellow-900/5",  ring: "ring-yellow-500/20",  badge: "bg-yellow-500/10 text-yellow-300" },
  "web-hosting":         { gradient: "from-teal-600/15 to-teal-900/5",      ring: "ring-teal-500/20",    badge: "bg-teal-500/10 text-teal-300" },
  "ai-video":            { gradient: "from-red-600/15 to-red-900/5",        ring: "ring-red-500/20",     badge: "bg-red-500/10 text-red-300" },
  "customer-support":    { gradient: "from-cyan-600/15 to-cyan-900/5",      ring: "ring-cyan-500/20",    badge: "bg-cyan-500/10 text-cyan-300" },
  "ai-image":            { gradient: "from-rose-600/15 to-rose-900/5",      ring: "ring-rose-500/20",    badge: "bg-rose-500/10 text-rose-300" },
};

const DEFAULT_COLORS = { gradient: "from-brand-600/15 to-brand-900/5", ring: "ring-brand-500/20", badge: "bg-brand-500/10 text-brand-300" };

export function CategoryCard({ category }: { category: Category }) {
  const colors = CATEGORY_COLORS[category.slug] ?? DEFAULT_COLORS;

  return (
    <Link
      href={`/categories/${category.slug}`}
      className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${colors.gradient} p-6 backdrop-blur-sm transition-all duration-300 hover:border-brand-400/30 hover:shadow-lg hover:shadow-brand-900/20 hover:-translate-y-0.5`}
    >
      {/* Subtle top-right corner glow */}
      <div className="pointer-events-none absolute -right-4 -top-4 h-20 w-20 rounded-full bg-current opacity-5 blur-2xl" />

      {/* Icon */}
      <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 text-2xl ring-1 ${colors.ring} transition-transform duration-300 group-hover:scale-110`}>
        {category.icon}
      </div>

      {/* Content */}
      <h3 className="mb-2 text-base font-bold text-white transition-colors group-hover:text-brand-300">
        {category.name}
      </h3>
      <p className="mb-5 text-sm leading-relaxed text-gray-500">{category.description}</p>

      {/* Footer */}
      <div className="flex items-center justify-between">
        <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold ${colors.badge}`}>
          {category.toolCount} tools
        </span>
        <span className="text-xs font-semibold text-brand-400 opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0.5 translate-x-0">
          Explore →
        </span>
      </div>
    </Link>
  );
}
