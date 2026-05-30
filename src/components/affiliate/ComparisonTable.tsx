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
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-white/10 bg-[#0a0f19]">
            <th className="px-6 py-4 text-left font-semibold text-gray-400">Feature</th>
            {tools.map((tool) => (
              <th key={tool.id} className="px-6 py-4 text-center">
                <div className={`font-bold ${winner === tool.id ? "text-brand-300" : "text-white"}`}>
                  {tool.name}
                </div>
                {winner === tool.id && (
                  <span className="mt-1 inline-block rounded-full bg-brand-500/20 px-2 py-0.5 text-xs font-medium text-brand-400">
                    ⭐ Winner
                  </span>
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-white/5 bg-[#0d1117]">
            <td className="px-6 py-3 font-medium text-gray-400">Rating</td>
            {tools.map((tool) => (
              <td key={tool.id} className="px-6 py-3 text-center font-bold text-yellow-400">
                ★ {tool.rating}/5
              </td>
            ))}
          </tr>
          <tr className="border-b border-white/5">
            <td className="px-6 py-3 font-medium text-gray-400">Starting Price</td>
            {tools.map((tool) => (
              <td key={tool.id} className="px-6 py-3 text-center text-gray-300">{tool.price}</td>
            ))}
          </tr>
          {Object.entries(featureLabels).map(([key, label], i) => (
            <tr key={key} className={`border-b border-white/5 ${i % 2 === 0 ? "bg-[#0d1117]" : ""}`}>
              <td className="px-6 py-3 font-medium text-gray-400">{label}</td>
              {tools.map((tool) => (
                <td key={tool.id} className="px-6 py-3 text-center text-gray-300">
                  {typeof tool.features[key] === "boolean"
                    ? tool.features[key] ? (
                      <span className="text-green-400">✓</span>
                    ) : (
                      <span className="text-red-400">✗</span>
                    )
                    : tool.features[key] || "—"}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr className="bg-brand-600/10 border-t border-brand-500/20">
            <td className="px-6 py-4 font-semibold text-white">Try It Free</td>
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
