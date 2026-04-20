import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About AI Tool Stack",
  description:
    "Learn about AI Tool Stack — our mission, editorial process, and commitment to honest AI and SaaS tool reviews.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-gray-100 bg-gray-50 py-16">
        <div className="mx-auto max-w-3xl px-4">
          <h1 className="mb-4 text-4xl font-extrabold text-gray-900 md:text-5xl">
            About AI Tool Stack
          </h1>
          <p className="text-lg text-gray-600">
            We help businesses and creators find the best AI and SaaS tools
            through honest reviews, data-driven comparisons, and expert guides.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="prose prose-lg mx-auto max-w-3xl px-4 prose-headings:font-bold">
          <h2>Our Mission</h2>
          <p>
            The AI tool landscape is exploding. Thousands of new tools launch
            every month, each claiming to be the &quot;best.&quot; It&apos;s
            overwhelming, and bad decisions cost real money.
          </p>
          <p>
            AI Tool Stack cuts through the noise. We provide clear,
            research-backed recommendations so you can invest in the right tools
            with confidence.
          </p>

          <h2>How We Review Tools</h2>
          <p>Every tool on our site goes through a rigorous process:</p>
          <ol>
            <li>
              <strong>Hands-on testing</strong> — We sign up and use every tool
              for real work, not just surface-level demos.
            </li>
            <li>
              <strong>Feature analysis</strong> — We compare capabilities,
              limitations, and unique strengths against the competition.
            </li>
            <li>
              <strong>Pricing deep-dive</strong> — We break down every plan,
              including hidden costs, overage fees, and contract traps.
            </li>
            <li>
              <strong>User research</strong> — We aggregate real user reviews
              and support experiences to supplement our findings.
            </li>
            <li>
              <strong>Regular updates</strong> — Tools change fast. We
              re-evaluate our reviews quarterly and update content accordingly.
            </li>
          </ol>

          <h2>Our Values</h2>
          <ul>
            <li>
              <strong>Honesty over revenue.</strong> We&apos;ll recommend free
              tools over paid ones if they&apos;re genuinely better for your use
              case.
            </li>
            <li>
              <strong>Depth over speed.</strong> We take our time to produce
              thorough, well-researched content — not SEO fluff.
            </li>
            <li>
              <strong>Transparency always.</strong> We disclose all affiliate
              relationships and never let them influence our recommendations.
            </li>
          </ul>

          <h2>Affiliate Partnerships</h2>
          <p>
            We earn revenue through affiliate commissions when you click our
            links and sign up for tools. This supports our work at no extra cost
            to you. Read our full{" "}
            <Link href="/disclosure">affiliate disclosure</Link>.
          </p>

          <h2>Get in Touch</h2>
          <p>
            Questions, feedback, or partnership inquiries? Email us at{" "}
            <a href="mailto:hello@aitoolstack.com">hello@aitoolstack.com</a>.
          </p>
        </div>
      </section>
    </>
  );
}
