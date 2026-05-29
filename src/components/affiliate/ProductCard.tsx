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
    <div
      className={`rounded-2xl border bg-white/5 p-6 backdrop-blur-sm transition-all hover:shadow-xl hover:shadow-brand-900/30 ${
        featured
          ? "border-brand-400/30 ring-1 ring-brand-500/20"
          : "border-white/10 hover:border-brand-400/20"
      }`}
    >
      {featured && (
        <span className="mb-3 inline-block rounded-full bg-brand-500/15 px-3 py-1 text-xs font-bold text-brand-300">
          ⭐ Editor&apos;s Pick
        </span>
      )}
      <h3 className="mb-2 text-lg font-bold text-white">{name}</h3>
      <RatingStars rating={rating} />
      <p className="mt-2 text-sm text-gray-400">{description}</p>
      <div className="mt-5 flex items-center justify-between">
        <span className="rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-gray-400 ring-1 ring-white/10">
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
