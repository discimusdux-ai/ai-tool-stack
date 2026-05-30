import Link from "next/link";
import { NewsletterForm } from "@/components/email/NewsletterForm";
import { CategoryCard } from "@/components/ui/CategoryCard";
import { ToolMarquee } from "@/components/ui/ToolMarquee";
import { HeroSearch } from "@/components/ui/HeroSearch";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { FeaturedTools } from "@/components/ui/FeaturedTools";
import { ComparisonWidget } from "@/components/ui/ComparisonWidget";
import { CATEGORIES } from "@/lib/constants";

const STATS = [
  { value: 100, suffix: "+", label: "Tools Reviewed",   icon: "🔍" },
  { value: 30,  suffix: "+", label: "Categories",       icon: "📂" },
  { value: 50,  suffix: "K+",label: "Monthly Readers",  icon: "👥" },
  { value: 100, suffix: "%", label: "Independent",      icon: "⭐" },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-gray-950 py-28 text-white noise-overlay">
        {/* Gradient orbs */}
        <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[700px] rounded-full bg-brand-600/15 blur-[140px]" />
        <div className="pointer-events-none absolute top-20 right-0 w-[500px] h-[500px] rounded-full bg-accent-500/8 blur-[120px]" />
        <div className="pointer-events-none absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-hot-500/8 blur-[100px]" />
        <div className="pointer-events-none absolute top-1/2 right-1/4 w-[200px] h-[200px] rounded-full bg-purple-500/10 blur-[80px]" />

        {/* Dot grid */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,_rgba(99,102,241,0.12)_1px,_transparent_1px)] bg-[size:32px_32px]" />

        {/* Floating accent lines */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-1/4 top-20 h-px w-64 bg-gradient-to-r from-transparent via-brand-400/30 to-transparent" />
          <div className="absolute right-1/4 bottom-20 h-px w-48 bg-gradient-to-r from-transparent via-accent-400/20 to-transparent" />
          <div className="absolute left-20 top-1/2 h-32 w-px bg-gradient-to-b from-transparent via-brand-400/20 to-transparent" />
          <div className="absolute right-20 top-1/3 h-24 w-px bg-gradient-to-b from-transparent via-accent-400/15 to-transparent" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-400/20 bg-brand-500/10 px-4 py-1.5 text-sm font-medium text-brand-300 backdrop-blur-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-accent-400" />
            Fully Updated for 2026 · 100+ Tools Reviewed
          </div>

          {/* Headline */}
          <h1 className="mb-6 text-5xl font-extrabold leading-tight tracking-tight md:text-7xl">
            Stop Guessing.{" "}
            <span className="gradient-text">Pick Better AI Tools.</span>
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-400 md:text-xl">
            Brutally honest reviews, side-by-side comparisons, and expert guides
            for every major AI and SaaS tool. No fluff, no paid rankings — just
            the truth.
          </p>

          {/* Search */}
          <HeroSearch />

          {/* Alt CTAs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link href="/categories" className="cta-button cta-glow text-base">
              Browse All Tools →
            </Link>
            <Link
              href="/compare"
              className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-semibold text-gray-200 backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/10"
            >
              Compare Tools
            </Link>
            <Link
              href="/blog"
              className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-semibold text-gray-200 backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/10"
            >
              Latest Reviews
            </Link>
          </div>
        </div>
      </section>

      {/* ── Tool Marquee ── */}
      <ToolMarquee />

      {/* ── Animated Stats ── */}
      <section className="border-b border-white/5 bg-gray-900/40 py-16 backdrop-blur-sm">
        <div className="mx-auto max-w-4xl px-4">
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
            {STATS.map((s) => (
              <AnimatedCounter
                key={s.label}
                end={s.value}
                suffix={s.suffix}
                label={s.label}
                icon={s.icon}
                duration={1800}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Tools (ranked cards with ratings) ── */}
      <FeaturedTools />

      {/* ── Categories Grid ── */}
      <section className="py-24 border-t border-white/5">
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

      {/* ── Interactive Comparison Widget ── */}
      <ComparisonWidget />

      {/* ── How It Works ── */}
      <section className="relative py-24 border-t border-white/5">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-brand-950/20 to-transparent" />
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
                accentColor: "text-brand-400",
              },
              {
                step: "02",
                title: "Honest Comparisons",
                desc: "Real pros and cons, no paid rankings. We tell you when a tool isn't worth it.",
                icon: "⚖️",
                color: "from-accent-600/20 to-accent-800/10",
                border: "border-accent-500/20",
                accentColor: "text-accent-400",
              },
              {
                step: "03",
                title: "Clear Recommendations",
                desc: "Actionable picks based on your use case, budget, and team size — no fluff.",
                icon: "🎯",
                color: "from-hot-600/20 to-hot-800/10",
                border: "border-hot-500/20",
                accentColor: "text-hot-400",
              },
            ].map((item) => (
              <div
                key={item.step}
                className={`group relative overflow-hidden rounded-2xl border ${item.border} bg-gradient-to-br ${item.color} p-8 transition-all hover:-translate-y-0.5 hover:shadow-lg`}
              >
                {/* Step number watermark */}
                <div className="pointer-events-none absolute right-4 bottom-4 text-7xl font-black opacity-5 select-none">
                  {item.step}
                </div>
                <div className="mb-4 text-5xl">{item.icon}</div>
                <div className={`mb-2 text-xs font-bold uppercase tracking-widest ${item.accentColor}`}>
                  Step {item.step}
                </div>
                <h3 className="mb-3 text-xl font-bold text-white">{item.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Social Proof / Testimonial Strip ── */}
      <section className="border-t border-b border-white/5 bg-gray-900/30 py-16">
        <div className="mx-auto max-w-5xl px-4">
          <div className="mb-10 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-gray-500">
              What Readers Say
            </span>
          </div>
          <div className="grid gap-5 sm:grid-cols-3">
            {[
              {
                quote: "Finally found a site that doesn't just parrot vendor marketing. The Cursor vs Copilot breakdown saved me hours.",
                author: "Marcus T.",
                role: "Senior Developer",
                emoji: "💻",
              },
              {
                quote: "The category breakdowns are genuinely useful. Switched my whole stack based on their SEO tools review.",
                author: "Priya K.",
                role: "Marketing Director",
                emoji: "📈",
              },
              {
                quote: "Newsletter is gold. They cover tools I've never heard of that actually solve problems I have.",
                author: "James L.",
                role: "Startup Founder",
                emoji: "🚀",
              },
            ].map((t) => (
              <div key={t.author} className="rounded-2xl border border-white/8 bg-white/3 p-6">
                <div className="mb-4 flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <svg key={s} className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="mb-5 text-sm text-gray-300 leading-relaxed italic">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-500/10 text-lg ring-1 ring-brand-500/20">
                    {t.emoji}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{t.author}</p>
                    <p className="text-xs text-gray-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Newsletter CTA ── */}
      <section className="relative overflow-hidden py-28">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-950 via-brand-900/80 to-gray-950" />
        <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 w-[700px] h-[500px] rounded-full bg-brand-600/15 blur-[120px]" />
        <div className="pointer-events-none absolute right-0 bottom-0 w-[400px] h-[400px] rounded-full bg-accent-600/10 blur-[100px]" />

        <div className="relative mx-auto max-w-2xl px-4 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-400/20 bg-brand-500/10 px-4 py-1.5 text-sm font-medium text-brand-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-accent-400" />
            Free Weekly Digest
          </div>
          <h2 className="mb-4 text-3xl font-extrabold text-white md:text-4xl">
            Stay Ahead of the AI Curve
          </h2>
          <p className="mb-3 text-gray-400">
            Weekly deep-dives, exclusive deals, and expert tool picks.
          </p>
          <div className="mb-8 flex flex-wrap justify-center gap-4 text-sm text-gray-500">
            <span className="flex items-center gap-1.5"><span className="text-emerald-400">✓</span> New tool breakdowns every week</span>
            <span className="flex items-center gap-1.5"><span className="text-emerald-400">✓</span> Exclusive discount codes</span>
            <span className="flex items-center gap-1.5"><span className="text-emerald-400">✓</span> No spam, ever</span>
          </div>
          <NewsletterForm variant="hero" />
          <p className="mt-4 text-sm text-gray-500">
            Free forever. Join 10,000+ professionals who stay ahead.
          </p>
        </div>
      </section>
    </>
  );
}
