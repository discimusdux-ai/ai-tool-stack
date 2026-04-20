import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
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
      {/* Header */}
      <section className="border-b border-gray-100 bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-4 flex items-center gap-3">
            <Link
              href="/categories"
              className="text-sm text-brand-600 hover:underline"
            >
              ← All Categories
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-4xl">{category.icon}</span>
            <div>
              <h1 className="text-4xl font-extrabold text-gray-900 md:text-5xl">
                {category.name}
              </h1>
              <p className="mt-2 text-lg text-gray-600">
                {category.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-8 text-2xl font-bold">
            Top {category.name} ({tools.length} tools)
          </h2>
          {tools.length === 0 ? (
            <div className="rounded-xl border border-gray-200 bg-white p-12 text-center">
              <p className="text-lg text-gray-500">
                We&apos;re currently reviewing tools in this category. Check
                back soon!
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

      {/* Newsletter */}
      <section className="border-t border-gray-100 bg-gray-50 py-12">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <h2 className="mb-4 text-2xl font-bold">
            Stay Updated on {category.name}
          </h2>
          <p className="mb-6 text-gray-600">
            Get notified when we add new {category.name.toLowerCase()} reviews
            and comparisons.
          </p>
          <NewsletterForm variant="inline" />
        </div>
      </section>
    </>
  );
}
