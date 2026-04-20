interface ReviewData {
  name: string;
  description: string;
  rating: number;
  author: string;
  datePublished: string;
}

export function StructuredData({ review }: { review: ReviewData }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Review",
    name: review.name,
    description: review.description,
    reviewRating: { "@type": "Rating", ratingValue: review.rating, bestRating: 5 },
    author: { "@type": "Organization", name: review.author },
    datePublished: review.datePublished,
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
}
