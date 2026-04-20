import Link from "next/link";
import type { Metadata } from "next";
import { COMPARISONS } from "@/lib/comparisons";

export const metadata: Metadata = {
  title: "Tool Comparisons — Side-by-Side AI & SaaS Reviews",
  description:
    "Head-to-head comparisons of the most popular AI and SaaS tools. Feature breakdowns, pricing analysis, and clear winner verdicts.",
};

export default function ComparePage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-gray-100 bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h1 className="mb-4 text-4xl font-extrabold text-gray-900 md:text-5xl">
            Tool Comparisons
          </h1>
          <p className="max-w-2xl text-lg text-gray-600">
            Unbiased, data-driven head-to-head comparisons. We test every tool
            so you can make confident decisions.
          </p>
        </div>
      </section>

      {/* Comparisons Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-6 sm:grid-cols-2">
            {COMPARISONS.map((comp) => (
              <Link
                key={comp.slug}
                href={`/compare/${comp.slug}`}
                className="group rounded-xl border border-gray-200 bg-white p-8 transition-all hover:border-brand-300 hover:shadow-lg"
              >
                <span className="mb-3 inline-block rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700">
                  {comp.category}
                </span>
                <h2 className="mb-2 text-2xl font-bold text-gray-900 group-hover:text-brand-600">
                  {comp.title}
                </h2>
                <p className="mb-4 text-gray-600">{comp.description}</p>

                {/* Mini comparison preview */}
                <div className="flex items-center gap-4 rounded-lg bg-gray-50 p-4">
                  {comp.tools.map((tool, i) => (
                    <div key={tool.id} className="flex-1 text-center">
                      <div className="text-sm font-bold text-gray-900">
                        {tool.name}
                      </div>
                      <div className="text-xs text-gray-500">
                        {tool.rating}/5 · {tool.price}
                      </div>
                      {comp.winner === tool.id && (
                        <span className="mt-1 inline-block text-xs text-accent-600">
                          ⭐ Winner
                        </span>
                      )}
                      {i < comp.tools.length - 1 && (
                        <span className="absolute text-gray-300" />
                      )}
                    </div>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Suggest Comparison CTA */}
      <section className="border-t border-gray-100 bg-gray-50 py-16 text-center">
        <div className="mx-auto max-w-2xl px-4">
          <h2 className="mb-4 text-2xl font-bold">
            Want a specific comparison?
          </h2>
          <p className="mb-6 text-gray-600">
            We add new comparisons every week. Subscribe to our newsletter to
            get notified when we publish new head-to-head reviews.
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
