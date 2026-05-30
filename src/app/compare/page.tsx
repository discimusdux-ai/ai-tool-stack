import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { COMPARISONS } from "@/lib/comparisons";

export const metadata: Metadata = {
  title: "Tool Comparisons — Side-by-Side AI & SaaS Reviews",
  description:
    "Head-to-head comparisons of the most popular AI and SaaS tools. Feature breakdowns, pricing analysis, and clear winner verdicts.",
};

const CATEGORY_ICONS: Record<string, string> = {
  "AI Writing": "✍️",
  "SEO Tools": "🔍",
  "Productivity": "⚡",
  "Email Marketing": "📧",
  "Automation": "🔄",
  "Design": "🎨",
  "Customer Support": "💬",
};

export default function ComparePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/5 bg-[#060a10] py-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/3 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-brand-600/10 blur-3xl" />
          <div className="absolute right-1/4 top-8 h-64 w-64 rounded-full bg-accent-500/5 blur-2xl" />
        </div>
        <div className="relative mx-auto max-w-6xl px-4">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-brand-500/10 px-4 py-1.5 text-xs font-semibold text-brand-400 ring-1 ring-brand-500/20">
            ⚔️ {COMPARISONS.length} head-to-head comparisons
          </div>
          <h1 className="mb-4 text-4xl font-extrabold text-white md:text-5xl">
            Tool Comparisons
          </h1>
          <p className="max-w-2xl text-lg text-gray-400">
            Unbiased, data-driven head-to-head comparisons. We test every tool
            so you can make confident decisions without the guesswork.
          </p>
        </div>
      </section>

      {/* Comparisons Grid */}
      <section className="bg-[#060a10] py-14">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-6 sm:grid-cols-2">
            {COMPARISONS.map((comp) => {
              const winner = comp.tools.find((t) => t.id === comp.winner);
              const loser = comp.tools.find((t) => t.id !== comp.winner);

              return (
                <Link
                  key={comp.slug}
                  href={`/compare/${comp.slug}`}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0d1117] transition-all hover:border-brand-500/40 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)]"
                >
                  {/* Banner image */}
                  <div className="relative h-40 w-full overflow-hidden">
                    {comp.imageUrl ? (
                      <Image
                        src={comp.imageUrl}
                        alt={comp.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, 50vw"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-brand-900/40 via-[#0d1117] to-accent-900/20">
                        <span className="text-6xl opacity-20">
                          {CATEGORY_ICONS[comp.category] ?? "⚔️"}
                        </span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117] via-[#0d1117]/30 to-transparent" />

                    {/* Category badge */}
                    <div className="absolute left-3 top-3">
                      <span className="inline-flex items-center gap-1 rounded-full bg-black/50 px-3 py-1 text-xs font-medium text-brand-300 backdrop-blur-sm ring-1 ring-white/10">
                        {CATEGORY_ICONS[comp.category] ?? "🔧"} {comp.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h2 className="mb-2 text-xl font-bold text-white group-hover:text-brand-400 transition-colors">
                      {comp.title}
                    </h2>
                    <p className="mb-5 text-sm text-gray-400 line-clamp-2">{comp.description}</p>

                    {/* Mini tool cards */}
                    <div className="flex items-center gap-3">
                      {comp.tools.map((tool, i) => (
                        <div
                          key={tool.id}
                          className={`flex-1 rounded-lg p-3 text-center ${
                            comp.winner === tool.id
                              ? "border border-brand-500/30 bg-brand-600/10"
                              : "border border-white/10 bg-white/5"
                          }`}
                        >
                          <div className="text-sm font-bold text-white">{tool.name}</div>
                          <div className="text-xs text-gray-500 mt-0.5">
                            ★ {tool.rating} · {tool.price}
                          </div>
                          {comp.winner === tool.id && (
                            <span className="mt-1 inline-block text-xs font-medium text-brand-400">
                              ⭐ Winner
                            </span>
                          )}
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 flex items-center justify-end">
                      <span className="text-sm font-medium text-brand-400 group-hover:underline">
                        See full comparison →
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Suggest CTA */}
      <section className="border-t border-white/5 bg-[#080c14] py-16 text-center">
        <div className="mx-auto max-w-2xl px-4">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-brand-500/10 px-4 py-1.5 text-xs font-semibold text-brand-400 ring-1 ring-brand-500/20">
            💡 Weekly updates
          </div>
          <h2 className="mb-4 text-2xl font-bold text-white">
            Want a specific comparison?
          </h2>
          <p className="mb-6 text-gray-400">
            We add new comparisons every week. Subscribe to get notified when
            we publish new head-to-head reviews.
          </p>
          <Link
            href="/newsletter"
            className="cta-button text-lg"
          >
            Subscribe for Updates →
          </Link>
        </div>
      </section>
    </>
  );
}
