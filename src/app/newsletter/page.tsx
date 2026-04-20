import type { Metadata } from "next";
import { NewsletterForm } from "@/components/email/NewsletterForm";

export const metadata: Metadata = {
  title: "Newsletter — Weekly AI Tool Recommendations",
  description: "Get weekly deep-dives on the best AI tools, exclusive deals, and expert recommendations.",
};

export default function NewsletterPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-20 text-center">
      <span className="mb-4 inline-block text-5xl">📧</span>
      <h1 className="mb-4 text-4xl font-extrabold text-gray-900">The AI Tool Stack Newsletter</h1>
      <p className="mb-8 text-lg text-gray-500">
        Weekly deep-dives on the best new AI and SaaS tools. Honest reviews, exclusive deals, and
        actionable recommendations — no fluff.
      </p>

      <div className="rounded-xl border border-gray-200 bg-white p-8 text-left shadow-sm">
        <h2 className="mb-4 text-lg font-bold text-gray-900">What you get every week:</h2>
        <ul className="mb-6 space-y-3 text-gray-600">
          <li className="flex items-start gap-3">
            <span className="text-accent-500">✓</span>
            <span>One in-depth tool review or comparison</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-accent-500">✓</span>
            <span>New tool discoveries before they go mainstream</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-accent-500">✓</span>
            <span>Exclusive deals and discount codes</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-accent-500">✓</span>
            <span>Quick tips to get more from your current tools</span>
          </li>
        </ul>
        <NewsletterForm variant="inline" />
        <p className="mt-4 text-center text-xs text-gray-400">Free forever · No spam · Unsubscribe anytime</p>
      </div>
    </div>
  );
}
