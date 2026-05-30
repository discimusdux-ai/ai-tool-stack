import Link from "next/link";

interface FeaturedTool {
  name: string;
  slug: string;
  category: string;
  categorySlug: string;
  tagline: string;
  emoji: string;
  color: string;
  rating: number;
  badge?: string;
  badgeColor?: string;
  priceLabel: string;
}

const FEATURED_TOOLS: FeaturedTool[] = [
  {
    name: "ChatGPT",
    slug: "chatgpt",
    category: "AI Writing",
    categorySlug: "ai-writing",
    tagline: "The AI assistant that started it all",
    emoji: "🤖",
    color: "from-emerald-600/20 to-emerald-900/10",
    rating: 4.8,
    badge: "Editor's Pick",
    badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
    priceLabel: "Free / $20 mo",
  },
  {
    name: "Cursor",
    slug: "cursor",
    category: "AI Coding",
    categorySlug: "ai-coding",
    tagline: "The AI-first code editor developers love",
    emoji: "💻",
    color: "from-brand-600/20 to-brand-900/10",
    rating: 4.9,
    badge: "🔥 Trending",
    badgeColor: "bg-orange-500/20 text-orange-300 border-orange-500/30",
    priceLabel: "Free / $20 mo",
  },
  {
    name: "Midjourney",
    slug: "midjourney",
    category: "AI Image",
    categorySlug: "ai-image",
    tagline: "Best-in-class AI image generation",
    emoji: "🎨",
    color: "from-purple-600/20 to-purple-900/10",
    rating: 4.7,
    badge: "Top Rated",
    badgeColor: "bg-purple-500/20 text-purple-300 border-purple-500/30",
    priceLabel: "From $10 mo",
  },
  {
    name: "Perplexity",
    slug: "perplexity",
    category: "AI Search",
    categorySlug: "ai-writing",
    tagline: "AI-powered search with real-time citations",
    emoji: "🔍",
    color: "from-cyan-600/20 to-cyan-900/10",
    rating: 4.6,
    badge: "Best Free Tier",
    badgeColor: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
    priceLabel: "Free / $20 mo",
  },
  {
    name: "Jasper",
    slug: "jasper",
    category: "AI Writing",
    categorySlug: "ai-writing",
    tagline: "Enterprise AI writing for marketing teams",
    emoji: "✍️",
    color: "from-violet-600/20 to-violet-900/10",
    rating: 4.3,
    priceLabel: "From $49 mo",
  },
  {
    name: "Zapier",
    slug: "zapier",
    category: "Automation",
    categorySlug: "business-automation",
    tagline: "Connect 7,000+ apps without code",
    emoji: "⚡",
    color: "from-orange-600/20 to-orange-900/10",
    rating: 4.5,
    badge: "Best for Teams",
    badgeColor: "bg-orange-500/20 text-orange-300 border-orange-500/30",
    priceLabel: "Free / $19.99 mo",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`h-3.5 w-3.5 ${star <= Math.floor(rating) ? "text-yellow-400" : star - 0.5 <= rating ? "text-yellow-400/60" : "text-gray-600"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      <span className="ml-1 text-xs text-gray-400">{rating}</span>
    </div>
  );
}

export function FeaturedTools() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-14 text-center">
          <span className="mb-3 inline-block rounded-full bg-brand-500/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-brand-400">
            Top Picks
          </span>
          <h2 className="mb-4 text-3xl font-extrabold text-white md:text-4xl">
            Best AI Tools Right Now
          </h2>
          <p className="mx-auto max-w-xl text-gray-400">
            Our editors test and rank the most impactful tools every week. These are the current standouts.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURED_TOOLS.map((tool, i) => (
            <Link
              key={tool.slug}
              href={`/tools/${tool.slug}`}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${tool.color} p-6 transition-all hover:border-brand-400/30 hover:shadow-xl hover:shadow-brand-900/20 hover:-translate-y-0.5`}
            >
              {/* Rank badge */}
              <div className="absolute right-4 top-4 flex h-7 w-7 items-center justify-center rounded-full bg-white/5 text-xs font-bold text-gray-400 ring-1 ring-white/10">
                #{i + 1}
              </div>

              {/* Icon + category */}
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-black/30 text-2xl ring-1 ring-white/10">
                  {tool.emoji}
                </div>
                <div>
                  <span className="block text-xs font-medium text-gray-500">{tool.category}</span>
                  <h3 className="text-base font-bold text-white group-hover:text-brand-300 transition-colors">
                    {tool.name}
                  </h3>
                </div>
              </div>

              {/* Tagline */}
              <p className="mb-4 text-sm text-gray-400 leading-relaxed">{tool.tagline}</p>

              {/* Footer row */}
              <div className="flex items-center justify-between">
                <div className="flex flex-col gap-1">
                  <StarRating rating={tool.rating} />
                  <span className="text-xs text-gray-500">{tool.priceLabel}</span>
                </div>
                {tool.badge && (
                  <span className={`rounded-full border px-2.5 py-1 text-xs font-semibold ${tool.badgeColor}`}>
                    {tool.badge}
                  </span>
                )}
              </div>

              {/* Hover arrow */}
              <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-brand-400 opacity-0 group-hover:opacity-100 transition-opacity">
                View full review
                <svg className="h-3 w-3 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/categories"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-gray-200 backdrop-blur-sm transition-all hover:border-brand-400/30 hover:bg-white/8"
          >
            Browse All 100+ Tools
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
