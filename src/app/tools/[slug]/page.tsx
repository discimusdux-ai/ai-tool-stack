import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getToolReview, getAllToolReviews } from "@/lib/tools";
import { CTAButton } from "@/components/affiliate/CTAButton";

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
              ? "text-yellow-400"
              : i === full && half
              ? "text-yellow-300"
              : "text-gray-300"
          }
        >
          ★
        </span>
      ))}
      <span className="ml-1 text-sm font-bold text-gray-700">{rating}/5</span>
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

      {/* Breadcrumb */}
      <div className="border-b border-gray-100 bg-gray-50 py-3">
        <div className="mx-auto max-w-4xl px-4">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-brand-600">
              Home
            </Link>
            <span>›</span>
            <Link href="/tools" className="hover:text-brand-600">
              Tool Reviews
            </Link>
            <span>›</span>
            <Link
              href={`/categories/${tool.categorySlug}`}
              className="hover:text-brand-600"
            >
              {tool.category}
            </Link>
            <span>›</span>
            <span className="font-medium text-gray-700">{tool.name}</span>
          </nav>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 py-12">
        {/* Header */}
        <header className="mb-10">
          <div className="mb-3 flex flex-wrap items-center gap-3">
            <Link
              href={`/categories/${tool.categorySlug}`}
              className="rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700 hover:bg-brand-100"
            >
              {tool.category}
            </Link>
            <span className="text-xs text-gray-400">Updated April 2026</span>
          </div>

          <h1 className="mb-2 text-4xl font-extrabold text-gray-900 md:text-5xl">
            {tool.name} Review (2026)
          </h1>
          <p className="mb-4 text-xl text-gray-600">{tool.tagline}</p>

          <div className="flex flex-wrap items-center gap-6">
            <StarRating rating={tool.rating} />
            <span className="font-medium text-gray-700">{tool.price}</span>
            {tool.priceNote && (
              <span className="text-sm text-green-600">{tool.priceNote}</span>
            )}
          </div>
        </header>

        {/* CTA Box */}
        <div className="mb-10 rounded-xl border border-brand-200 bg-brand-50 p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="font-bold text-gray-900">
                Ready to try {tool.name}?
              </div>
              <div className="text-sm text-gray-600">
                {tool.price} · {tool.priceNote}
              </div>
            </div>
            <CTAButton
              productId={tool.slug}
              label={`Try ${tool.name}`}
              size="lg"
            />
          </div>
        </div>

        {/* Quick Summary */}
        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            Quick Summary
          </h2>
          <p className="text-gray-700 leading-relaxed">{tool.longDescription}</p>
        </section>

        {/* Pros & Cons */}
        <section className="mb-10">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">
            Pros & Cons
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-green-200 bg-green-50 p-6">
              <h3 className="mb-4 font-bold text-green-800">✓ What We Love</h3>
              <ul className="space-y-2">
                {tool.pros.map((pro) => (
                  <li key={pro} className="flex items-start gap-2 text-sm text-green-700">
                    <span className="mt-0.5 shrink-0 text-green-500">✓</span>
                    {pro}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-red-200 bg-red-50 p-6">
              <h3 className="mb-4 font-bold text-red-800">✗ What Could Be Better</h3>
              <ul className="space-y-2">
                {tool.cons.map((con) => (
                  <li key={con} className="flex items-start gap-2 text-sm text-red-700">
                    <span className="mt-0.5 shrink-0 text-red-400">✗</span>
                    {con}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Best For / Not For */}
        <section className="mb-10 grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-blue-200 bg-blue-50 p-5">
            <div className="mb-1 font-bold text-blue-800">✓ Best For</div>
            <p className="text-sm text-blue-700">{tool.bestFor}</p>
          </div>
          <div className="rounded-lg border border-orange-200 bg-orange-50 p-5">
            <div className="mb-1 font-bold text-orange-800">⚠ Not Ideal For</div>
            <p className="text-sm text-orange-700">{tool.notFor}</p>
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-10">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">
            Key Features
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {tool.features.map((feature) => (
              <div
                key={feature.name}
                className="rounded-lg border border-gray-200 bg-white p-5"
              >
                <div className="mb-1 font-semibold text-gray-900">
                  {feature.name}
                </div>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section className="mb-10">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">Pricing</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {tool.pricingTiers.map((tier, i) => (
              <div
                key={tier.name}
                className={`rounded-xl border p-5 ${
                  i === 1
                    ? "border-brand-300 bg-brand-50 ring-2 ring-brand-200"
                    : "border-gray-200 bg-white"
                }`}
              >
                <div className="mb-1 font-bold text-gray-900">{tier.name}</div>
                <div className="mb-4 text-2xl font-extrabold text-brand-600">
                  {tier.price}
                </div>
                <ul className="space-y-1">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="mt-0.5 text-green-500">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Verdict */}
        <section className="mb-10 rounded-xl border border-gray-200 bg-white p-8">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            Our Verdict
          </h2>
          <div className="mb-4 flex items-center gap-3">
            <StarRating rating={tool.rating} />
            <span className="font-semibold text-gray-700">
              {tool.rating >= 4.7 ? "Outstanding" : tool.rating >= 4.4 ? "Excellent" : "Very Good"}
            </span>
          </div>
          <p className="text-gray-700 leading-relaxed">{tool.verdict}</p>
          <div className="mt-6">
            <CTAButton
              productId={tool.slug}
              label={`Get started with ${tool.name}`}
              size="lg"
            />
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-10">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {tool.faqs.map((faq) => (
              <div
                key={faq.q}
                className="rounded-lg border border-gray-200 bg-white p-6"
              >
                <h3 className="mb-2 font-semibold text-gray-900">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related Tools */}
        {relatedTools.length > 0 && (
          <section className="mb-10">
            <h2 className="mb-6 text-2xl font-bold text-gray-900">
              Compare Alternatives
            </h2>
            <div className="grid gap-4 sm:grid-cols-3">
              {relatedTools.map((t) => (
                <Link
                  key={t.slug}
                  href={`/tools/${t.slug}`}
                  className="group rounded-lg border border-gray-200 bg-white p-4 transition hover:border-brand-300 hover:shadow-md"
                >
                  <div className="mb-1 flex items-center justify-between">
                    <span className="font-semibold text-gray-900 group-hover:text-brand-600">
                      {t.name}
                    </span>
                    <span className="text-sm text-yellow-500">★ {t.rating}</span>
                  </div>
                  <p className="text-xs text-gray-500">{t.price}</p>
                </Link>
              ))}
            </div>
            <div className="mt-4">
              <Link
                href={`/categories/${tool.categorySlug}`}
                className="text-sm font-medium text-brand-600 hover:underline"
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
