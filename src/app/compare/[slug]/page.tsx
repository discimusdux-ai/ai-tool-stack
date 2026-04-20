import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { COMPARISONS, getComparisonBySlug } from "@/lib/comparisons";
import { ComparisonTable } from "@/components/affiliate/ComparisonTable";
import { getAffiliateUrl } from "@/lib/affiliate-links";
import { StructuredData } from "@/components/seo/StructuredData";
import { NewsletterForm } from "@/components/email/NewsletterForm";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return COMPARISONS.map((comp) => ({ slug: comp.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const comp = getComparisonBySlug(slug);
  if (!comp) return { title: "Comparison Not Found" };

  return {
    title: `${comp.title} (2026 Comparison)`,
    description: comp.description,
    openGraph: {
      title: `${comp.title} — Head-to-Head Comparison`,
      description: comp.description,
      type: "article",
    },
  };
}

export default async function ComparisonPage({ params }: Props) {
  const { slug } = await params;
  const comp = getComparisonBySlug(slug);
  if (!comp) notFound();

  const winner = comp.tools.find((t) => t.id === comp.winner);

  const comparisonSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${comp.title} — 2026 Comparison`,
    description: comp.description,
    publisher: {
      "@type": "Organization",
      name: "AI Tool Stack",
      url: "https://aitoolstack.com",
    },
  };

  return (
    <>
      <StructuredData data={comparisonSchema} />

      {/* Header */}
      <header className="border-b border-gray-100 bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-4">
          <div className="mb-4 flex items-center gap-3">
            <Link
              href="/compare"
              className="text-sm text-brand-600 hover:underline"
            >
              ← All Comparisons
            </Link>
            <span className="text-gray-300">|</span>
            <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700">
              {comp.category}
            </span>
          </div>
          <h1 className="mb-4 text-4xl font-extrabold text-gray-900 md:text-5xl">
            {comp.title}
          </h1>
          <p className="text-lg text-gray-600">{comp.description}</p>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-4 py-12">
        {/* Quick Verdict */}
        <div className="mb-12 rounded-xl border-2 border-accent-200 bg-accent-50 p-8">
          <h2 className="mb-2 text-sm font-bold uppercase tracking-wider text-accent-700">
            Our Verdict
          </h2>
          {winner && (
            <p className="mb-2 text-xl font-bold text-gray-900">
              Winner: {winner.name} ({winner.rating}/5)
            </p>
          )}
          <p className="text-gray-700">{comp.verdict}</p>
        </div>

        {/* Comparison Table */}
        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-bold">Feature Comparison</h2>
          <ComparisonTable
            tools={comp.tools}
            featureLabels={comp.featureLabels}
            winner={comp.winner}
          />
        </div>

        {/* Pros & Cons for Each */}
        <div className="mb-12 grid gap-8 md:grid-cols-2">
          {comp.tools.map((tool) => (
            <div
              key={tool.id}
              className="rounded-xl border border-gray-200 bg-white p-6"
            >
              <h3 className="mb-1 text-xl font-bold text-gray-900">
                {tool.name}
                {comp.winner === tool.id && (
                  <span className="ml-2 text-sm text-accent-600">
                    ⭐ Winner
                  </span>
                )}
              </h3>
              <p className="mb-4 text-sm text-gray-500">
                Best for: {tool.bestFor}
              </p>

              <div className="mb-4">
                <h4 className="mb-2 text-sm font-bold text-accent-700">
                  ✅ Pros
                </h4>
                <ul className="space-y-1">
                  {tool.pros.map((pro) => (
                    <li key={pro} className="text-sm text-gray-600">
                      • {pro}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mb-6">
                <h4 className="mb-2 text-sm font-bold text-red-600">
                  ❌ Cons
                </h4>
                <ul className="space-y-1">
                  {tool.cons.map((con) => (
                    <li key={con} className="text-sm text-gray-600">
                      • {con}
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={getAffiliateUrl(tool.id)}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="cta-button block w-full text-center"
              >
                Try {tool.name} Free →
              </a>
            </div>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="rounded-xl border border-gray-200 bg-white p-8 text-center">
          <h3 className="mb-2 text-xl font-bold">
            Get More Comparisons Like This
          </h3>
          <p className="mb-6 text-gray-600">
            We publish new tool comparisons weekly. Subscribe to stay informed.
          </p>
          <NewsletterForm variant="inline" />
        </div>
      </div>
    </>
  );
}
