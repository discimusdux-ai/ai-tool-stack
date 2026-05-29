import Link from "next/link";
import { NewsletterForm } from "@/components/email/NewsletterForm";
import { CategoryCard } from "@/components/ui/CategoryCard";
import { CATEGORIES } from "@/lib/constants";

/** Homepage comparison links — slugs must match comparisons.ts exactly */
const FEATURED_COMPARISONS = [
  {
    title: "Monday.com vs ClickUp",
    slug: "monday-vs-clickup",
    desc: "Project management tools compared feature by feature",
    tag: "Productivity",
    emoji: "📋",
  },
  {
    title: "ConvertKit vs Mailchimp",
    slug: "convertkit-vs-mailchimp",
    desc: "Best email platform for creators and small businesses",
    tag: "Email Marketing",
    emoji: "📧",
  },
  {
    title: "Cursor vs GitHub Copilot",
    slug: "cursor-vs-github-copilot",
    desc: "Which AI coding assistant is worth your money in 2026?",
    tag: "AI Coding",
    emoji: "💻",
  },
  {
    title: "Intercom vs Zendesk",
    slug: "intercom-vs-zendesk",
    desc: "Customer support platforms head-to-head",
    tag: "CRM & Sales",
    emoji: "🤝",
  },
];

const STATS = [
  { value: "100+", label: "Tools Reviewed", icon: "🔍" },
  { value: "30+", label: "Categories", icon: "📂" },
  { value: "2026", label: "Always Current", icon: "🔄" },
  { value: "100%", label: "Independent", icon: "⭐" },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-gray-950 py-28 text-white noise-overlay">
        {/* Gradient orbs */}
        <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full bg-brand-600/20 blur-[120px]" />
        <div className="pointer-events-none absolute top-20 right-0 w-[400px] h-[400px] rounded-full bg-accent-500/10 blur-[100px]" />
        <div className="pointer-events-none absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-hot-500/10 blur-[80px]" />

        {/* Dot grid */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,_rgba(99,102,241,0.15)_1px,_transparent_1px)] bg-[size:32px_32px]" />

        <div className="relative mx-auto max-w-6xl px-4 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-400/20 bg-brand-500/10 px-4 py-1.5 text-sm font-medium text-brand-300 backdrop-blur-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-accent-400" />
            Fully Updated for 2026
          </div>

          <h1 className="mb-6 text-5xl font-extrabold leading-tight tracking-tight md:text-7xl">
            Stop Guessing.{" "}
            <span className="gradient-text">Pick Better AI Tools.</span>
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-400 md:text-xl">
            Brutally honest reviews, side-by-side comparisons, and expert
            guides for every major AI and SaaS tool. No fluff, no paid
            rankings — just the truth.
          </p>

          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/categories" className="cta-button cta-glow text-base">
              Browse All Tools →
            </Link>
            <Link
              href="/blog"
              className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-semibold text-gray-200 backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/10"
            >
              Read Latest Reviews
            </Link>
          </div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="border-y border-white/5 bg-gray-900/50 py-8 backdrop-blur-sm">
        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-6 px-4 sm:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-1 text-center">
              <span className="text-2xl">{s.icon}</span>
              <span className="text-2xl font-extrabold text-white">{s.value}</span>
              <span className="text-xs text-gray-400">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Categories Grid ── */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-14 text-center">
            <span className="mb-3 inline-block rounded-full bg-brand-500/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-brand-400">
              Explore
            </span>
            <h2 className="mb-4 text-3xl font-extrabold text-white md:text-4xl">
              Find Tools by Category
            </h2>
            <p className="mx-auto max-w-xl text-gray-400">
              Every major category of AI and SaaS tools, reviewed in depth so
              you can pick with confidence.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {CATEGORIES.map((cat) => (
              <CategoryCard key={cat.slug} category={cat} />
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="relative py-24">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-brand-950/30 to-transparent" />
        <div className="relative mx-auto max-w-6xl px-4">
          <div className="mb-14 text-center">
            <span className="mb-3 inline-block rounded-full bg-accent-500/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-accent-400">
              Our Process
            </span>
            <h2 className="text-3xl font-extrabold text-white md:text-4xl">
              How We Help You Choose
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Hands-On Testing",
                desc: "We test every tool ourselves — real workflows, real results. No marketing copy, no assumptions.",
                icon: "🔬",
                color: "from-brand-600/20 to-brand-800/10",
                border: "border-brand-500/20",
              },
              {
                step: "02",
                title: "Honest Comparisons",
                desc: "Real pros and cons, no paid rankings. We tell you when a tool isn't worth it.",
                icon: "⚖️",
                color: "from-accent-600/20 to-accent-800/10",
                border: "border-accent-500/20",
              },
              {
                step: "03",
                title: "Clear Recommendations",
                desc: "Actionable picks based on your use case, budget, and team size — no fluff.",
                icon: "🎯",
                color: "from-hot-600/20 to-hot-800/10",
                border: "border-hot-500/20",
              },
            ].map((item) => (
              <div
                key={item.step}
                className={`relative overflow-hidden rounded-2xl border ${item.border} bg-gradient-to-br ${item.color} p-8`}
              >
                <div className="mb-4 text-5xl">{item.icon}</div>
                <div className="mb-2 text-xs font-bold uppercase tracking-widest text-gray-400">
                  Step {item.step}
                </div>
                <h3 className="mb-3 text-xl font-bold text-white">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Comparisons ── */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-14 text-center">
            <span className="mb-3 inline-block rounded-full bg-hot-500/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-hot-400">
              Head-to-Head
            </span>
            <h2 className="mb-3 text-3xl font-extrabold text-white md:text-4xl">
              Popular Comparisons
            </h2>
            <p className="text-gray-400">Our most-read tool showdowns</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {FEATURED_COMPARISONS.map((comp) => (
              <Link
                key={comp.slug}
                href={`/compare/${comp.slug}`}
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:border-brand-400/30 hover:bg-white/8 hover:shadow-lg hover:shadow-brand-900/30"
              >
                <span className="text-3xl">{comp.emoji}</span>
                <div className="flex-1">
                  <span className="mb-1 inline-block rounded-full bg-brand-500/10 px-2.5 py-0.5 text-xs font-medium text-brand-300">
                    {comp.tag}
                  </span>
                  <h3 className="text-base font-bold text-white group-hover:text-brand-300">
                    {comp.title}
                  </h3>
                  <p className="text-xs text-gray-500">{comp.desc}</p>
                </div>
                <span className="text-gray-500 transition-transform group-hover:translate-x-1 group-hover:text-brand-400">
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Newsletter CTA ── */}
      <section className="relative overflow-hidden py-28">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-950 via-brand-900 to-gray-950" />
        <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-brand-600/20 blur-[100px]" />
        <div className="relative mx-auto max-w-2xl px-4 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-400/20 bg-brand-500/10 px-4 py-1.5 text-sm font-medium text-brand-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-accent-400" />
            Free Weekly Digest
          </div>
          <h2 className="mb-4 text-3xl font-extrabold text-white md:text-4xl">
            Stay Ahead of the AI Curve
          </h2>
          <p className="mb-8 text-gray-400">
            Weekly deep-dives, exclusive deals, and expert tool picks. Join
            10,000+ professionals who stay ahead.
          </p>
          <NewsletterForm variant="hero" />
          <p className="mt-4 text-sm text-gray-500">
            Free forever. No spam. Unsubscribe anytime.
          </p>
        </div>
      </section>
    </>
  );
}
