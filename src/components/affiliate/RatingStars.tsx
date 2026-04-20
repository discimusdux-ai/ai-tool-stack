export function RatingStars({ rating, max = 5 }: { rating: number; max?: number }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: max }).map((_, i) => (
        <span key={i} className={i < Math.round(rating) ? "text-yellow-400" : "text-gray-200"}>
          ★
        </span>
      ))}
      <span className="ml-1 text-sm font-medium text-gray-600">{rating.toFixed(1)}</span>
    </div>
  );
}
