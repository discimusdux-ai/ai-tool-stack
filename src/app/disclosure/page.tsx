import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Affiliate Disclosure",
  description: "Our affiliate disclosure and how we make money.",
};

export default function DisclosurePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 prose prose-lg">
      <h1 className="text-3xl font-extrabold text-gray-900">Affiliate Disclosure</h1>
      <p className="text-gray-600 leading-relaxed">
        AI Tool Stack is a free resource. We keep the lights on through affiliate partnerships —
        when you click a link and purchase a product, we may earn a commission at no extra cost to you.
      </p>
      <h2 className="text-xl font-bold text-gray-900 mt-8">How This Works</h2>
      <p className="text-gray-600 leading-relaxed">
        Some links on this site are affiliate links. This means if you click on the link and purchase
        an item, we will receive a small commission. This does not affect the price you pay.
      </p>
      <h2 className="text-xl font-bold text-gray-900 mt-8">Our Promise</h2>
      <ul className="text-gray-600 space-y-2">
        <li>We never let affiliate commissions influence our rankings or recommendations.</li>
        <li>We review tools we genuinely believe provide value.</li>
        <li>Negative reviews stay published — we don&apos;t remove them if a tool underperforms.</li>
        <li>Our editorial team operates independently from our business team.</li>
      </ul>
      <h2 className="text-xl font-bold text-gray-900 mt-8">Questions?</h2>
      <p className="text-gray-600 leading-relaxed">
        If you have questions about our affiliate relationships, reach out to us anytime.
      </p>
    </div>
  );
}
