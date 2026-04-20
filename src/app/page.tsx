import Link from "next/link";
import { NewsletterForm } from "@/components/email/NewsletterForm";
import { CategoryCard } from "@/components/ui/CategoryCard";
import { CATEGORIES } from "@/lib/constants";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-950 via-brand-900 to-brand-800 py-24 text-white">
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10" />
        <div className="relative mx-auto max-w-6xl px-4 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-400/30 bg-brand-500/10 px-4 py-1.5 text-sm font-medium text-brand-200">
            <span className="h-2 w-2 rounded-full bg-accent-400 animate-pulse" />
            Updated for 2026
          </div>
          <h1 className="mb-6 text-5xl font-extrabold leading-tight tracking-tight md:text-6xl lg:text-7xl">
            Find the <span className="text-brand-400">Perfect AI Tools</span>
            <br />
            for Your Business
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-brand-200 md:text-xl">
            Expert reviews, honest comparisons, and in-depth guides for the best
            AI and SaaS tools. Stop wasting money on the wrong software.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/categories"
              className="cta-button cta-glow text-lg"
            >
              Browse Tools →
            </Link>
            <Link
              href="/blog"
              className="rounded-lg border border-brand-400/30 bg-white/5 px-6 py-3 font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10"
            >
              Read Latest Reviews
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="border-b border-gray-100 bg-gray-50 py-6">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-8 px-4 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <span className="text-xl">🔍</span>
            <span>100+ Tools Reviewed</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xl">⭐</span>
            <span>Unbiased Expert Analysis</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xl">💰</span>
            <span>Free Comparison Guides</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xl">🔄</span>
            <span>Updated Weekly</span>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Explore by Category
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              We cover every major category of AI and SaaS tools so you can find
              exactly what you need.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CATEGORIES.map((cat) => (
              <CategoryCard key={cat.slug} category={cat} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
            How We Help You Choose
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Deep Research",
                desc: "We test every tool hands-on, analyzing features, pricing, performance, and support quality.",
                icon: "🔬",
              },
              {
                step: "02",
                title: "Honest Comparisons",
                desc: "Side-by-side comparisons with real pros and cons. No fluff, no paid rankings — just facts.",
                icon: "⚖️",
              },
              {
                step: "03",
                title: "Actionable Guides",
                desc: "Clear recommendations based on your specific use case, team size, and budget.",
                icon: "🎯",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="rounded-xl border border-gray-200 bg-white p-8 transition-shadow hover:shadow-lg"
              >
                <div className="mb-4 text-4xl">{item.icon}</div>
                <div className="mb-2 text-sm font-bold text-brand-600">
                  STEP {item.step}
                </div>
                <h3 className="mb-3 text-xl font-bold">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Comparisons */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
            Popular Comparisons
          </h2>
          <p className="mb-12 text-center text-lg text-gray-600">
            Our most-read head-to-head tool comparisons
          </p>
          <div className="grid gap-6 sm:grid-cols-2">
            {[
              {
                title: "Jasper vs Copy.ai",
                desc: "Which AI writing tool is better for content marketing?",
                tag: "AI Writing",
              },
              {
                title: "Semrush vs Ahrefs",
                desc: "The ultimate SEO tool showdown for 2026",
                tag: "SEO Tools",
              },
              {
                title: "Monday.com vs ClickUp",
                desc: "Project management tools compared feature by feature",
                tag: "Productivity",
              },
              {
                title: "ConvertKit vs Mailchimp",
                desc: "Best email platform for creators and small businesses",
                tag: "Email Marketing",
              },
            ].map((comp) => (
              <Link
                key={comp.title}
                href={`/compare/${comp.title.toLowerCase().replace(/ vs /g, "-vs-").replace(/ /g, "-").replace(/\./g, "")}`}
                className="group flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-brand-300 hover:shadow-md"
              >
                <div className="flex-1">
                  <span className="mb-1 inline-block rounded-full bg-brand-50 px-2.5 py-0.5 text-xs font-medium text-brand-700">
                    {comp.tag}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-brand-600">
                    {comp.title}
                  </h3>
                  <p className="text-sm text-gray-500">{comp.desc}</p>
                </div>
                <span className="text-gray-400 transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-gradient-to-br from-brand-600 to-brand-800 py-20 text-white">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Get the AI Tool Stack Newsletter
          </h2>
          <p className="mb-8 text-lg text-brand-100">
            Weekly deep-dives on the best new AI tools, exclusive deals, and
            expert recommendations. Join 10,000+ professionals who stay ahead.
          </p>
          <NewsletterForm variant="hero" />
          <p className="mt-4 text-sm text-brand-200">
            Free forever. No spam. Unsubscribe anytime.
          </p>
        </div>
      </section>
    </>
  );
}
