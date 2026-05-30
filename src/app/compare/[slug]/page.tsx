import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { COMPARISONS, getComparisonBySlug } from "@/lib/comparisons";
import { ComparisonTable } from "@/components/affiliate/ComparisonTable";
import { getAffiliateUrl } from "@/lib/affiliate-links";
import { StructuredData } from "@/components/seo/StructuredData";
import { NewsletterForm } from "@/components/email/NewsletterForm";

interface Props {
  params: Promise<{ slug: string }>;
}

const CATEGORY_ICONS: Record<string, string> = {
  "AI Writing": "✍️",
  "SEO Tools": "🔍",
  "Productivity": "⚡",
  "Email Marketing": "📧",
  "Automation": "🔄",
  "Design": "🎨",
  "Customer Support": "💬",
};

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

      {/* Hero with banner */}
      <section className="relative overflow-hidden border-b border-white/5 bg-[#060a10]">
        <div className="relative h-64 w-full md:h-80">
          {comp.imageUrl ? (
            <Image
              src={comp.imageUrl}
              alt={comp.title}
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
          ) : (
            <div className="h-full w-full bg-gradient-to-br from-brand-900/60 via-[#060a10] to-accent-900/20">
              <div className="flex h-full items-center justify-center">
                <span className="text-8xl opacity-10">
                  {CATEGORY_ICONS[comp.category] ?? "⚔️"}
                </span>
              </div>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#060a10] via-[#060a10]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#060a10]/80 via-transparent to-transparent" />
        </div>

        {/* Overlay content */}
        <div className="relative mx-auto max-w-4xl px-4 pb-10 -mt-32">
          <div className="mb-4 flex items-center gap-3">
            <Link
              href="/compare"
              className="text-sm text-brand-400 hover:underline"
            >
              ← All Comparisons
            </Link>
            <span className="text-gray-600">|</span>
            <span className="rounded-full bg-brand-500/20 px-3 py-1 text-xs font-medium text-brand-300 ring-1 ring-brand-500/30">
              {CATEGORY_ICONS[comp.category] ?? "🔧"} {comp.category}
            </span>
          </div>
          <h1 className="mb-4 text-4xl font-extrabold text-white md:text-5xl">
            {comp.title}
          </h1>
          <p className="text-lg text-gray-400">{comp.description}</p>
        </div>
      </section>

      <div className="bg-[#060a10] mx-auto max-w-4xl px-4 py-12">
        {/* Quick Verdict */}
        <div className="mb-12 rounded-2xl border border-accent-500/30 bg-accent-500/5 p-8">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-accent-500/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent-300">
            ⭐ Our Verdict
          </div>
          {winner && (
            <p className="mb-3 text-xl font-bold text-white">
              Winner: {winner.name}{" "}
              <span className="text-accent-400">({winner.rating}/5)</span>
            </p>
          )}
          <p className="text-gray-300 leading-relaxed">{comp.verdict}</p>
        </div>

        {/* Tool Preview Cards */}
        <div className="mb-10 grid gap-6 md:grid-cols-2">
          {comp.tools.map((tool) => (
            <div
              key={tool.id}
              className={`rounded-2xl p-6 ${
                comp.winner === tool.id
                  ? "border-2 border-brand-500/40 bg-brand-600/10"
                  : "border border-white/10 bg-[#0d1117]"
              }`}
            >
              <div className="mb-1 flex items-center gap-2">
                <h3 className="text-xl font-bold text-white">{tool.name}</h3>
                {comp.winner === tool.id && (
                  <span className="rounded-full bg-brand-500/20 px-2.5 py-0.5 text-xs font-medium text-brand-300">
                    ⭐ Winner
                  </span>
                )}
              </div>
              <div className="mb-4 flex items-center gap-3">
                <span className="text-sm font-bold text-yellow-400">★ {tool.rating}/5</span>
                <span className="text-gray-600">·</span>
                <span className="text-sm text-gray-400">{tool.price}</span>
                <span className="text-gray-600">·</span>
                <span className="text-xs text-gray-500">{tool.bestFor}</span>
              </div>

              <div className="mb-4">
                <h4 className="mb-2 text-sm font-bold text-green-400">✅ Pros</h4>
                <ul className="space-y-1.5">
                  {tool.pros.map((pro) => (
                    <li key={pro} className="flex items-start gap-2 text-sm text-gray-400">
                      <span className="mt-0.5 text-green-500 flex-shrink-0">✓</span>
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mb-6">
                <h4 className="mb-2 text-sm font-bold text-red-400">❌ Cons</h4>
                <ul className="space-y-1.5">
                  {tool.cons.map((con) => (
                    <li key={con} className="flex items-start gap-2 text-sm text-gray-400">
                      <span className="mt-0.5 text-red-400 flex-shrink-0">✗</span>
                      {con}
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

        {/* Comparison Table */}
        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-white">Feature Comparison</h2>
          <div className="overflow-hidden rounded-2xl border border-white/10">
            <ComparisonTable
              tools={comp.tools}
              featureLabels={comp.featureLabels}
              winner={comp.winner}
            />
          </div>
        </div>

        {/* Newsletter CTA */}
        <div className="rounded-2xl border border-white/10 bg-[#0d1117] p-8 text-center">
          <h3 className="mb-2 text-xl font-bold text-white">
            Get More Comparisons Like This
          </h3>
          <p className="mb-6 text-gray-400">
            We publish new tool comparisons weekly. Subscribe to stay informed.
          </p>
          <NewsletterForm variant="inline" />
        </div>
      </div>
    </>
  );
}
