import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CATEGORIES, AFFILIATE_PROGRAMS } from "@/lib/constants";
import { ProductCard } from "@/components/affiliate/ProductCard";
import { NewsletterForm } from "@/components/email/NewsletterForm";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return CATEGORIES.map((cat) => ({ slug: cat.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = CATEGORIES.find((c) => c.slug === slug);
  if (!category) return { title: "Category Not Found" };

  return {
    title: `Best ${category.name} (2026) — Reviews & Comparisons`,
    description: category.description,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = CATEGORIES.find((c) => c.slug === slug);
  if (!category) notFound();

  const tools = AFFILIATE_PROGRAMS.filter((p) => p.category === slug);

  return (
    <>
      {/* Hero with banner image */}
      <section className="relative overflow-hidden border-b border-white/5 bg-[#060a10]">
        {/* Full-width banner image */}
        <div className="relative h-64 w-full md:h-80">
          <Image
            src={`/images/categories/${category.slug}.webp`}
            alt={category.name}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#060a10] via-[#060a10]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#060a10]/70 via-transparent to-transparent" />
        </div>

        {/* Content overlaid at bottom */}
        <div className="relative mx-auto max-w-6xl px-4 pb-12 -mt-24">
          {/* Breadcrumb */}
          <div className="mb-5 flex items-center gap-2 text-sm">
            <Link
              href="/categories"
              className="text-gray-400 hover:text-brand-400 transition-colors"
            >
              ← All Categories
            </Link>
          </div>

          <div className="flex items-center gap-4">
            {/* Icon */}
            <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-brand-600/90 text-3xl shadow-xl ring-2 ring-brand-400/30 backdrop-blur-sm">
              {category.icon}
            </div>
            <div>
              <h1 className="text-4xl font-extrabold text-white md:text-5xl">
                {category.name}
              </h1>
              <p className="mt-2 max-w-2xl text-lg text-gray-400">
                {category.description}
              </p>
            </div>
          </div>

          {/* Meta badges */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-500/10 px-3 py-1.5 text-xs font-semibold text-brand-400 ring-1 ring-brand-500/20">
              🔍 {tools.length > 0 ? `${tools.length} tools` : `${category.toolCount} tools coming soon`}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1.5 text-xs font-semibold text-gray-400 ring-1 ring-white/10">
              ✅ Expert reviewed
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1.5 text-xs font-semibold text-gray-400 ring-1 ring-white/10">
              🗓 Updated 2026
            </span>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="bg-[#060a10] py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-2 text-2xl font-bold text-white">
            Top {category.name}
          </h2>
          <p className="mb-8 text-gray-500 text-sm">
            Ranked by expert score, features, and value.
          </p>

          {tools.length === 0 ? (
            <div className="rounded-2xl border border-white/10 bg-white/5 p-14 text-center">
              <div className="text-4xl mb-4">{category.icon}</div>
              <p className="text-lg font-semibold text-white mb-2">
                Reviews coming soon
              </p>
              <p className="text-gray-400 max-w-sm mx-auto">
                We&apos;re currently testing and reviewing tools in this category. Subscribe below to get notified.
              </p>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {tools.map((tool) => (
                <ProductCard
                  key={tool.slug}
                  id={tool.slug}
                  name={tool.name}
                  description={tool.description}
                  rating={tool.rating}
                  commission={tool.commission}
                  category={category.name}
                  featured={tool.featured}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Related categories */}
      <section className="border-t border-white/5 bg-[#080c14] py-12">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-6 text-lg font-bold text-white">Browse More Categories</h2>
          <div className="flex flex-wrap gap-3">
            {CATEGORIES.filter((c) => c.slug !== slug).slice(0, 6).map((cat) => (
              <Link
                key={cat.slug}
                href={`/categories/${cat.slug}`}
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-gray-300 transition-all hover:border-brand-500/40 hover:bg-brand-500/10 hover:text-brand-300"
              >
                <span>{cat.icon}</span>
                {cat.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="border-t border-white/5 bg-[#060a10] py-12">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <h2 className="mb-4 text-2xl font-bold text-white">
            Stay Updated on {category.name}
          </h2>
          <p className="mb-6 text-gray-400">
            Get notified when we add new {category.name.toLowerCase()} reviews
            and comparisons.
          </p>
          <NewsletterForm variant="inline" />
        </div>
      </section>
    </>
  );
}
