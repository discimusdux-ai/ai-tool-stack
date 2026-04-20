import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Compare Tools — Side-by-Side AI & SaaS Comparisons",
  description: "Honest head-to-head comparisons of the most popular AI and SaaS tools.",
};

const COMPARISONS = [
  { slug: "jasper-vs-copy-ai", title: "Jasper vs Copy.ai", desc: "Which AI writing tool delivers better content?", category: "AI Writing" },
  { slug: "semrush-vs-ahrefs", title: "Semrush vs Ahrefs", desc: "The ultimate SEO tool showdown", category: "SEO Tools" },
  { slug: "monday-vs-clickup", title: "Monday.com vs ClickUp", desc: "Project management compared feature by feature", category: "Productivity" },
  { slug: "convertkit-vs-mailchimp", title: "ConvertKit vs Mailchimp", desc: "Best email platform for creators", category: "Email Marketing" },
  { slug: "pipedrive-vs-hubspot", title: "Pipedrive vs HubSpot", desc: "CRM tools for small vs scaling teams", category: "CRM" },
  { slug: "canva-vs-figma", title: "Canva vs Figma", desc: "Design tools for marketers vs designers", category: "Design" },
];

export default function ComparePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <h1 className="mb-4 text-4xl font-extrabold text-gray-900">Compare Tools</h1>
      <p className="mb-12 text-lg text-gray-500">Side-by-side comparisons to help you pick the right tool.</p>

      <div className="grid gap-6 sm:grid-cols-2">
        {COMPARISONS.map((comp) => (
          <Link
            key={comp.slug}
            href={`/compare/${comp.slug}`}
            className="group rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-brand-300 hover:shadow-md"
          >
            <span className="mb-2 inline-block rounded-full bg-brand-50 px-2.5 py-0.5 text-xs font-medium text-brand-700">{comp.category}</span>
            <h2 className="mb-1 text-lg font-bold text-gray-900 group-hover:text-brand-600">{comp.title}</h2>
            <p className="text-sm text-gray-500">{comp.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
