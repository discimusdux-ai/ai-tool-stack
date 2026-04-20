import type { Metadata } from "next";
import Link from "next/link";
import { ProductCard } from "@/components/affiliate/ProductCard";
import { CATEGORIES, AFFILIATE_PROGRAMS } from "@/lib/constants";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const cat = CATEGORIES.find((c) => c.slug === slug);
  if (!cat) return { title: "Category Not Found" };
  return { title: `Best ${cat.name} in 2026`, description: cat.description };
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cat = CATEGORIES.find((c) => c.slug === slug);

  if (!cat) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-20 text-center">
        <h1 className="mb-4 text-3xl font-bold">Category Not Found</h1>
        <Link href="/categories" className="cta-button">← All Categories</Link>
      </div>
    );
  }

  const tools = AFFILIATE_PROGRAMS.filter((p) => p.category === slug);

  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <Link href="/categories" className="mb-6 inline-block text-sm font-medium text-brand-600 hover:underline">← All Categories</Link>
      <div className="mb-12">
        <div className="mb-2 text-4xl">{cat.icon}</div>
        <h1 className="mb-4 text-4xl font-extrabold text-gray-900">Best {cat.name} in 2026</h1>
        <p className="text-lg text-gray-500">{cat.description}</p>
      </div>

      {tools.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <ProductCard
              key={tool.slug}
              id={tool.slug}
              name={tool.name}
              description={tool.description}
              rating={tool.rating}
              commission={tool.commission}
              category={cat.name}
              featured={tool.featured}
            />
          ))}
        </div>
      ) : (
        <div className="rounded-xl border border-gray-200 bg-gray-50 p-12 text-center">
          <p className="text-lg text-gray-500">Reviews for this category are coming soon.</p>
        </div>
      )}
    </div>
  );
}
