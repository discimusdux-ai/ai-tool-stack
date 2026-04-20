import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Affiliate Disclosure",
  description:
    "How AI Tool Stack earns money, our editorial process, and our commitment to honest, unbiased reviews.",
};

export default function DisclosurePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="mb-8 text-4xl font-extrabold text-gray-900">
        Affiliate Disclosure
      </h1>

      <div className="prose prose-lg max-w-none prose-headings:font-bold prose-a:text-brand-600">
        <p className="text-lg text-gray-600">
          <strong>Last updated:</strong> April 2026
        </p>

        <h2>How We Make Money</h2>
        <p>
          AI Tool Stack is a free resource. We earn money through affiliate
          partnerships with some of the tools we review. When you click on an
          affiliate link and make a purchase, we may receive a commission at
          <strong> no extra cost to you</strong>.
        </p>
        <p>
          This commission helps us keep the site running, pay for tool
          subscriptions for testing, and continue producing free, high-quality
          content.
        </p>

        <h2>Our Editorial Policy</h2>
        <p>
          Our reviews and recommendations are based on thorough, hands-on
          testing. Affiliate partnerships{" "}
          <strong>never influence our ratings, rankings, or verdicts</strong>.
          Here&apos;s how we maintain integrity:
        </p>
        <ul>
          <li>
            <strong>We test every tool ourselves.</strong> No pay-for-play
            reviews. We sign up, use the product, and evaluate it on its
            merits.
          </li>
          <li>
            <strong>We publish cons alongside pros.</strong> Every review
            includes honest drawbacks — even for tools we love.
          </li>
          <li>
            <strong>We recommend free alternatives.</strong> If a free tool
            does the job, we&apos;ll tell you.
          </li>
          <li>
            <strong>Affiliate status is always disclosed.</strong> Links that
            earn us a commission are marked with &quot;rel=sponsored&quot; and
            noted where applicable.
          </li>
        </ul>

        <h2>What This Means for You</h2>
        <p>
          Using our affiliate links is the best way to support AI Tool Stack
          while getting the same price (and often better deals) than going
          directly to the vendor. You never pay more by using our links.
        </p>

        <h2>Non-Affiliate Content</h2>
        <p>
          Not every tool on our site has an affiliate program. We review and
          recommend tools regardless of whether they offer commissions, because
          our primary goal is to help you find the best solution for your
          needs.
        </p>

        <h2>Questions?</h2>
        <p>
          If you have questions about our affiliate relationships or editorial
          process, reach out at{" "}
          <a href="mailto:hello@aitoolstack.com">hello@aitoolstack.com</a>.
        </p>
      </div>
    </div>
  );
}
