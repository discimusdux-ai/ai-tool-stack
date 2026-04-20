import type { Metadata } from "next";
import Link from "next/link";
import { ComparisonTable } from "@/components/affiliate/ComparisonTable";
import { NewsletterForm } from "@/components/email/NewsletterForm";

const COMPARISONS: Record<string, {
  title: string;
  description: string;
  tools: { id: string; name: string; rating: number; price: string; features: Record<string, string | boolean> }[];
  featureLabels: Record<string, string>;
  winner: string;
  verdict: string;
}> = {
  "jasper-vs-copy-ai": {
    title: "Jasper vs Copy.ai: Which AI Writer Is Better in 2026?",
    description: "A detailed comparison of Jasper and Copy.ai for content marketing.",
    tools: [
      { id: "jasper-ai", name: "Jasper AI", rating: 4.7, price: "$49/mo", features: { longForm: true, brandVoice: true, templates: "50+", seo: true, freeplan: false, teamCollab: true, api: true } },
      { id: "copy-ai", name: "Copy.ai", rating: 4.5, price: "Free / $49/mo", features: { longForm: true, brandVoice: true, templates: "90+", seo: false, freeplan: true, teamCollab: true, api: true } },
    ],
    featureLabels: { longForm: "Long-Form Content", brandVoice: "Brand Voice", templates: "Templates", seo: "Built-in SEO", freeplan: "Free Plan", teamCollab: "Team Collaboration", api: "API Access" },
    winner: "jasper-ai",
    verdict: "Jasper wins for teams that need SEO-optimized long-form content with brand consistency. Copy.ai is the better choice for quick copy generation and budget-conscious creators thanks to its free tier.",
  },
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const comp = COMPARISONS[slug];
  if (!comp) return { title: "Comparison Coming Soon" };
  return { title: comp.title, description: comp.description };
}

export default async function ComparisonPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const comp = COMPARISONS[slug];

  if (!comp) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-20 text-center">
        <h1 className="mb-4 text-3xl font-bold">Comparison Coming Soon</h1>
        <p className="mb-8 text-gray-500">We&apos;re working on this comparison. Check back shortly.</p>
        <Link href="/compare" className="cta-button">← All Comparisons</Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <Link href="/compare" className="mb-6 inline-block text-sm font-medium text-brand-600 hover:underline">← All Comparisons</Link>
      <h1 className="mb-8 text-4xl font-extrabold text-gray-900">{comp.title}</h1>

      <ComparisonTable tools={comp.tools} featureLabels={comp.featureLabels} winner={comp.winner} />

      <div className="mt-12 rounded-xl border border-gray-200 bg-gray-50 p-8">
        <h2 className="mb-4 text-2xl font-bold">Our Verdict</h2>
        <p className="text-lg text-gray-700 leading-relaxed">{comp.verdict}</p>
      </div>

      <div className="mt-12 rounded-xl border border-brand-200 bg-brand-50 p-8">
        <h3 className="mb-2 text-xl font-bold">Get Weekly Tool Comparisons</h3>
        <p className="mb-4 text-gray-600">We publish new comparisons every week. Never miss one.</p>
        <NewsletterForm variant="inline" />
      </div>
    </div>
  );
}
