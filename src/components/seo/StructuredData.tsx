/**
 * Renders JSON-LD structured data for SEO.
 * Accepts any valid Schema.org object (Article, Review, Product, etc.)
 */

type JsonLdData = Record<string, unknown>;

export function StructuredData({ data }: { data: JsonLdData }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
