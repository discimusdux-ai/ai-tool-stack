import { getAffiliateUrl } from "@/lib/affiliate-links";
import { RatingStars } from "./RatingStars";

interface Props {
  id: string;
  name: string;
  description: string;
  rating: number;
  commission: string;
  category: string;
  featured?: boolean;
}

export function ProductCard({ id, name, description, rating, commission, category, featured }: Props) {
  return (
    <div className={`rounded-xl border bg-white p-6 transition-all hover:shadow-lg ${featured ? "border-brand-300 ring-2 ring-brand-100" : "border-gray-200"}`}>
      {featured && (
        <span className="mb-3 inline-block rounded-full bg-brand-50 px-3 py-1 text-xs font-bold text-brand-600">
          ⭐ Editor&apos;s Pick
        </span>
      )}
      <h3 className="mb-2 text-lg font-bold text-gray-900">{name}</h3>
      <RatingStars rating={rating} />
      <p className="mt-2 text-sm text-gray-500">{description}</p>
      <div className="mt-4 flex items-center justify-between">
        <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
          {category}
        </span>
        <a
          href={getAffiliateUrl(id)}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="cta-button px-4 py-2 text-xs"
        >
          Try Free →
        </a>
      </div>
    </div>
  );
}
