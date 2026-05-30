import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getToolReview, getAllToolReviews } from "@/lib/tools";
import { CTAButton } from "@/components/affiliate/CTAButton";
import { ExpandableFeature, FAQItem } from "@/components/ui/ExpandableFeature";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const tools = getAllToolReviews();
  return tools.map((tool) => ({ slug: tool.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const tool = getToolReview(slug);
  if (!tool) return {};

  return {
    title: `${tool.name} Review (2026) — Pricing, Pros, Cons & Verdict`,
    description: `Honest ${tool.name} review: ${tool.description} Pricing from ${tool.price}. Pros, cons, and our verdict.`,
    alternates: {
      canonical: `/tools/${tool.slug}`,
    },
  };
}

function StarRating({ rating }: { rating: number }) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }, (_, i) => (
        <span
          key={i}
          className={
            i < full
              ? "text-yellow-400 text-lg"
              : i === full && half
              ? "text-yellow-300 text-lg"
              : "text-gray-600 text-lg"
          }
        >
          ★
        </span>
      ))}
      <span className="ml-1 text-sm font-bold text-gray-300">{rating}/5</span>
    </div>
  );
}

export default async function ToolReviewPage({ params }: Props) {
  const { slug } = await params;
  const tool = getToolReview(slug);
  if (!tool) notFound();

  const relatedTools = getAllToolReviews()
    .filter((t) => t.categorySlug === tool.categorySlug && t.slug !== tool.slug)
    .slice(0, 3);

  const schemaOrg = {
    "@context": "https://schema.org",
    "@type": "Review",
    name: `${tool.name} Review`,
    reviewBody: tool.verdict,
    reviewRating: {
      "@type": "Rating",
      ratingValue: tool.rating,
      bestRating: 5,
    },
    itemReviewed: {
      "@type": "SoftwareApplication",
      name: tool.name,
      applicationCategory: tool.category,
    },
    author: {
      "@type": "Organization",
      name: "AI Tool Stack",
    },
    datePublished: "2026-04-01",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />

      {/* Hero with banner image */}
      <section className="relative overflow-hidden border-b border-white/5 bg-[#060a10]">
        <div className="relative h-64 w-full md:h-80">
          {tool.imageUrl ? (
            <Image
              src={tool.imageUrl}
              alt={tool.name}
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
          ) : (
            <div className="h-full w-full bg-gradient-to-br from-brand-900/60 via-[#060a10] to-[#080c14]" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#060a10] via-[#060a10]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#060a10]/80 via-transparent to-transparent" />
        </div>

        {/* Content overlaid at bottom */}
        <div className="relative mx-auto max-w-4xl px-4 pb-10 -mt-32">
          {/* Breadcrumb */}
          <nav className="mb-4 flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-brand-400 transition-colors">Home</Link>
            <span>›</span>
            <Link href="/tools" className="hover:text-brand-400 transition-colors">Tool Reviews</Link>
            <span>›</span>
            <Link href={`/categories/${tool.categorySlug}`} className="hover:text-brand-400 transition-colors">
              {tool.category}
            </Link>
            <span>›</span>
            <span className="text-gray-300">{tool.name}</span>
          </nav>

          <div className="mb-3 flex flex-wrap items-center gap-3">
            <Link
              href={`/categories/${tool.categorySlug}`}
              className="rounded-full bg-brand-500/20 px-3 py-1 text-xs font-medium text-brand-300 ring-1 ring-brand-500/30 hover:bg-brand-500/30 transition-colors"
            >
              {tool.category}
            </Link>
            <span className="text-xs text-gray-500">Updated April 2026</span>
          </div>

          <h1 className="mb-2 text-4xl font-extrabold text-white md:text-5xl">
            {tool.name} Review (2026)
          </h1>
          <p className="mb-4 text-xl text-gray-400">{tool.tagline}</p>

          <div className="flex flex-wrap items-center gap-6">
            <StarRating rating={tool.rating} />
            <span className="font-semibold text-gray-300">{tool.price}</span>
            {tool.priceNote && (
              <span className="text-sm text-green-400">{tool.priceNote}</span>
            )}
          </div>
        </div>
      </section>

      <div className="bg-[#060a10] mx-auto max-w-4xl px-4 py-12">
        {/* CTA Box */}
        <div className="mb-10 rounded-2xl border border-brand-500/30 bg-brand-600/10 p-6 ring-1 ring-brand-500/10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="font-bold text-white text-lg">
                Ready to try {tool.name}?
              </div>
              <div className="text-sm text-gray-400 mt-1">
                {tool.price} · {tool.priceNote}
              </div>
            </div>
            <CTAButton
              productId={tool.slug}
              label={`Try ${tool.name}`}
              size="lg"
              fallbackUrl={tool.affiliateUrl}
            />
          </div>
        </div>

        {/* Quick Summary */}
        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-bold text-white">Quick Summary</h2>
          <p className="text-gray-300 leading-relaxed text-base">{tool.longDescription}</p>
        </section>

        {/* Best For / Not For */}
        <section className="mb-10 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-green-500/20 bg-green-500/5 p-5">
            <div className="mb-2 flex items-center gap-2 font-bold text-green-400">
              <span>✓</span> Best For
            </div>
            <p className="text-sm text-green-300/80">{tool.bestFor}</p>
          </div>
          <div className="rounded-xl border border-orange-500/20 bg-orange-500/5 p-5">
            <div className="mb-2 flex items-center gap-2 font-bold text-orange-400">
              <span>⚠</span> Not Ideal For
            </div>
            <p className="text-sm text-orange-300/80">{tool.notFor}</p>
          </div>
        </section>

        {/* Pros & Cons */}
        <section className="mb-10">
          <h2 className="mb-6 text-2xl font-bold text-white">Pros & Cons</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-green-500/20 bg-green-500/5 p-6">
              <h3 className="mb-4 font-bold text-green-400">✓ What We Love</h3>
              <ul className="space-y-2">
                {tool.pros.map((pro) => (
                  <li key={pro} className="flex items-start gap-2 text-sm text-green-300/80">
                    <span className="mt-0.5 shrink-0 text-green-500">✓</span>
                    {pro}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-6">
              <h3 className="mb-4 font-bold text-red-400">✗ What Could Be Better</h3>
              <ul className="space-y-2">
                {tool.cons.map((con) => (
                  <li key={con} className="flex items-start gap-2 text-sm text-red-300/80">
                    <span className="mt-0.5 shrink-0 text-red-400">✗</span>
                    {con}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Key Features — expandable */}
        <section className="mb-10">
          <h2 className="mb-2 text-2xl font-bold text-white">Key Features</h2>
          <p className="mb-6 text-sm text-gray-500">Click each feature to expand details</p>
          <div className="space-y-3">
            {tool.features.map((feature) => (
              <ExpandableFeature
                key={feature.name}
                name={feature.name}
                description={feature.description}
              />
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section className="mb-10">
          <h2 className="mb-6 text-2xl font-bold text-white">Pricing</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {tool.pricingTiers.map((tier, i) => (
              <div
                key={tier.name}
                className={`rounded-2xl p-5 ${
                  i === 1
                    ? "border-2 border-brand-500/50 bg-brand-600/10 ring-2 ring-brand-500/20"
                    : "border border-white/10 bg-[#0d1117]"
                }`}
              >
                {i === 1 && (
                  <div className="mb-3 inline-block rounded-full bg-brand-500/20 px-2.5 py-0.5 text-xs font-bold text-brand-400">
                    Most Popular
                  </div>
                )}
                <div className="mb-1 font-bold text-white">{tier.name}</div>
                <div className="mb-4 text-2xl font-extrabold text-brand-400">
                  {tier.price}
                </div>
                <ul className="space-y-2">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-gray-400">
                      <span className="mt-0.5 text-green-400">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Verdict */}
        <section className="mb-10 rounded-2xl border border-white/10 bg-[#0d1117] p-8">
          <h2 className="mb-4 text-2xl font-bold text-white">Our Verdict</h2>
          <div className="mb-4 flex items-center gap-3">
            <StarRating rating={tool.rating} />
            <span className="font-semibold text-gray-300">
              {tool.rating >= 4.7 ? "Outstanding" : tool.rating >= 4.4 ? "Excellent" : "Very Good"}
            </span>
          </div>
          <p className="text-gray-300 leading-relaxed">{tool.verdict}</p>
          <div className="mt-6">
            <CTAButton
              productId={tool.slug}
              label={`Get started with ${tool.name}`}
              size="lg"
              fallbackUrl={tool.affiliateUrl}
            />
          </div>
        </section>

        {/* FAQ — expandable */}
        <section className="mb-10">
          <h2 className="mb-6 text-2xl font-bold text-white">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {tool.faqs.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </section>

        {/* Related Tools */}
        {relatedTools.length > 0 && (
          <section className="mb-10">
            <h2 className="mb-6 text-2xl font-bold text-white">
              Compare Alternatives
            </h2>
            <div className="grid gap-4 sm:grid-cols-3">
              {relatedTools.map((t) => (
                <Link
                  key={t.slug}
                  href={`/tools/${t.slug}`}
                  className="group overflow-hidden rounded-xl border border-white/10 bg-[#0d1117] transition hover:border-brand-500/40"
                >
                  {t.imageUrl && (
                    <div className="relative h-24 w-full overflow-hidden">
                      <Image
                        src={t.imageUrl}
                        alt={t.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117] to-transparent" />
                    </div>
                  )}
                  <div className="p-4">
                    <div className="mb-1 flex items-center justify-between">
                      <span className="font-semibold text-white group-hover:text-brand-400 transition-colors">
                        {t.name}
                      </span>
                      <span className="text-sm text-yellow-400">★ {t.rating}</span>
                    </div>
                    <p className="text-xs text-gray-500">{t.price}</p>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-4">
              <Link
                href={`/categories/${tool.categorySlug}`}
                className="text-sm font-medium text-brand-400 hover:underline"
              >
                View all {tool.category} tools →
              </Link>
            </div>
          </section>
        )}
      </div>
    </>
  );
}
