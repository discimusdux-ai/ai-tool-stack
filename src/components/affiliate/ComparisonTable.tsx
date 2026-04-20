"use client";

import { getAffiliateUrl } from "@/lib/affiliate-links";

interface Tool {
  id: string;
  name: string;
  rating: number;
  price: string;
  features: Record<string, string | boolean>;
}

interface Props {
  tools: Tool[];
  featureLabels: Record<string, string>;
  winner?: string;
}

export function ComparisonTable({ tools, featureLabels, winner }: Props) {
  return (
    <div className="overflow-x-auto rounded-xl border border-gray-200">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-gray-200 bg-gray-50">
            <th className="px-6 py-4 text-left font-semibold text-gray-600">Feature</th>
            {tools.map((tool) => (
              <th key={tool.id} className="px-6 py-4 text-center">
                <div className="font-bold text-gray-900">{tool.name}</div>
                {winner === tool.id && (
                  <span className="mt-1 inline-block rounded-full bg-accent-500/10 px-2 py-0.5 text-xs font-medium text-accent-600">
                    ⭐ Winner
                  </span>
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-gray-100">
            <td className="px-6 py-3 font-medium text-gray-600">Rating</td>
            {tools.map((tool) => (
              <td key={tool.id} className="px-6 py-3 text-center font-bold text-brand-600">
                {tool.rating}/5
              </td>
            ))}
          </tr>
          <tr className="border-b border-gray-100">
            <td className="px-6 py-3 font-medium text-gray-600">Starting Price</td>
            {tools.map((tool) => (
              <td key={tool.id} className="px-6 py-3 text-center">{tool.price}</td>
            ))}
          </tr>
          {Object.entries(featureLabels).map(([key, label]) => (
            <tr key={key} className="border-b border-gray-100">
              <td className="px-6 py-3 font-medium text-gray-600">{label}</td>
              {tools.map((tool) => (
                <td key={tool.id} className="px-6 py-3 text-center">
                  {typeof tool.features[key] === "boolean"
                    ? tool.features[key] ? "✅" : "❌"
                    : tool.features[key] || "—"}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr className="bg-brand-50">
            <td className="px-6 py-4 font-semibold">Try It Free</td>
            {tools.map((tool) => (
              <td key={tool.id} className="px-6 py-4 text-center">
                <a
                  href={getAffiliateUrl(tool.id)}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="cta-button px-4 py-2 text-xs"
                >
                  Visit {tool.name} →
                </a>
              </td>
            ))}
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
