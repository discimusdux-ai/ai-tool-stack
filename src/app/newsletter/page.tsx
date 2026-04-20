import type { Metadata } from "next";
import { NewsletterForm } from "@/components/email/NewsletterForm";

export const metadata: Metadata = {
  title: "Newsletter — Weekly AI Tool Reviews & Exclusive Deals",
  description:
    "Join 10,000+ professionals who get our weekly deep-dives on the best AI tools, exclusive deals, and expert recommendations.",
};

export default function NewsletterPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-600 to-brand-800 py-24 text-white">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-400/30 bg-white/10 px-4 py-1.5 text-sm font-medium">
            <span className="h-2 w-2 rounded-full bg-accent-400 animate-pulse" />
            Free Weekly Newsletter
          </div>
          <h1 className="mb-6 text-4xl font-extrabold md:text-5xl">
            The AI Tool Stack Newsletter
          </h1>
          <p className="mb-8 text-lg text-brand-100">
            Every week, we break down the best new AI and SaaS tools, share
            exclusive deals, and give you actionable recommendations to grow
            your business.
          </p>
          <NewsletterForm variant="hero" />
          <p className="mt-4 text-sm text-brand-200">
            Free forever. No spam. Unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">
            What You&apos;ll Get Every Week
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: "🔍",
                title: "Tool Deep-Dives",
                desc: "Hands-on reviews of new AI and SaaS tools with real screenshots, pricing breakdowns, and honest verdicts.",
              },
              {
                icon: "💰",
                title: "Exclusive Deals",
                desc: "Special discounts and extended trials negotiated directly with tool vendors — only for subscribers.",
              },
              {
                icon: "📊",
                title: "Market Intel",
                desc: "Stay ahead of the curve with AI industry trends, product updates, and competitive landscape analysis.",
              },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="mb-4 text-4xl">{item.icon}</div>
                <h3 className="mb-2 text-lg font-bold">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="border-t border-gray-100 bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="mb-8 flex flex-wrap items-center justify-center gap-12">
            <div>
              <div className="text-3xl font-extrabold text-brand-600">
                10,000+
              </div>
              <div className="text-sm text-gray-500">Subscribers</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-brand-600">
                52%
              </div>
              <div className="text-sm text-gray-500">Open Rate</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-brand-600">
                Weekly
              </div>
              <div className="text-sm text-gray-500">Delivery</div>
            </div>
          </div>
          <p className="text-gray-500">
            Trusted by marketers, founders, and developers at companies of all sizes.
          </p>
        </div>
      </section>
    </>
  );
}
