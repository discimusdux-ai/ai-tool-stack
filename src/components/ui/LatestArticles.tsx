import Link from "next/link";
import type { BlogPostMeta } from "@/lib/blog";

const TYPE_STYLES: Record<string, { label: string; icon: string; badge: string }> = {
  comparison: {
    label: "Comparison",
    icon: "⚖️",
    badge: "bg-accent-500/15 text-accent-300 border-accent-500/25",
  },
  review: {
    label: "Review",
    icon: "🔍",
    badge: "bg-brand-500/15 text-brand-300 border-brand-500/25",
  },
  roundup: {
    label: "Roundup",
    icon: "📋",
    badge: "bg-amber-500/15 text-amber-300 border-amber-500/25",
  },
  guide: {
    label: "Guide",
    icon: "📖",
    badge: "bg-emerald-500/15 text-emerald-300 border-emerald-500/25",
  },
};

function classifyPost(title: string) {
  const t = title.toLowerCase();
  if (t.includes(" vs ") || t.includes(" vs. ")) return TYPE_STYLES.comparison;
  if (t.startsWith("best ") || t.includes("best free") || t.includes("best ai"))
    return TYPE_STYLES.roundup;
  if (t.includes("review")) return TYPE_STYLES.review;
  return TYPE_STYLES.guide;
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function LatestArticles({ posts }: { posts: BlogPostMeta[] }) {
  if (posts.length === 0) return null;

  return (
    <section className="relative border-b border-white/5 bg-gray-950 py-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.08),_transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-4">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-4 py-1.5 text-sm font-medium text-emerald-300">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              Fresh This Week
            </div>
            <h2 className="text-3xl font-extrabold text-white md:text-4xl">
              Just Published
            </h2>
            <p className="mt-2 max-w-xl text-gray-400">
              Our newest reviews and comparisons — updated constantly, so this
              lineup changes as fast as the AI tool landscape does.
            </p>
          </div>
          <Link
            href="/blog"
            className="group hidden shrink-0 items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-semibold text-gray-200 backdrop-blur-sm transition-all hover:border-brand-400/30 hover:bg-white/10 sm:flex"
          >
            View All Articles
            <span className="transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((post, i) => {
            const type = classifyPost(post.title);
            return (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-400/40 hover:bg-white/[0.07] hover:shadow-xl hover:shadow-brand-900/30"
              >
                {/* Rank watermark */}
                <div className="pointer-events-none absolute right-3 top-2 text-6xl font-black text-white/[0.04] select-none">
                  {String(i + 1).padStart(2, "0")}
                </div>

                <div className="mb-4 flex items-center gap-2">
                  <span
                    className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-xs font-semibold ${type.badge}`}
                  >
                    <span>{type.icon}</span>
                    {type.label}
                  </span>
                  {i === 0 && (
                    <span className="rounded-full bg-rose-500/15 px-2.5 py-1 text-xs font-semibold text-rose-300 border border-rose-500/25">
                      Newest
                    </span>
                  )}
                </div>

                <h3 className="mb-2 text-lg font-bold leading-snug text-white transition-colors group-hover:text-brand-300">
                  {post.title}
                </h3>
                <p className="mb-5 flex-1 text-sm leading-relaxed text-gray-400 line-clamp-3">
                  {post.description}
                </p>

                <div className="flex items-center justify-between border-t border-white/5 pt-4 text-xs text-gray-500">
                  <span>{formatDate(post.date)}</span>
                  <span>{post.readingTime}</span>
                </div>

                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-400 transition-all group-hover:gap-2.5">
                  Read Now
                  <span aria-hidden>→</span>
                </span>
              </Link>
            );
          })}
        </div>

        <Link
          href="/blog"
          className="group mt-8 flex items-center justify-center gap-1.5 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-gray-200 backdrop-blur-sm transition-all hover:border-brand-400/30 hover:bg-white/10 sm:hidden"
        >
          View All Articles
          <span className="transition-transform group-hover:translate-x-0.5">→</span>
        </Link>
      </div>
    </section>
  );
}
