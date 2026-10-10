"use client";

import { getAffiliateLink, getAffiliateUrl } from "@/lib/affiliate-links";
import { trackAffiliateClick } from "@/lib/track-click";

interface Props {
  ids: string[];
  title?: string;
}

/** Quick comparison table with "Try it" buttons. Active affiliates with offer data only. */
export function AffiliateCompare({ ids, title = "Quick comparison" }: Props) {
  const rows = ids
    .map((id) => getAffiliateLink(id))
    .filter((l): l is NonNullable<typeof l> => !!l && l.isActive && !!l.offer && getAffiliateUrl(l.id) !== "#");
  if (!rows.length) return null;

  return (
    <div className="not-prose my-10" data-placement="compare-table">
      <h3 className="mb-3 text-xl font-bold text-white">{title}</h3>
      <div className="overflow-x-auto rounded-xl border border-white/10">
        <table className="w-full text-left text-sm">
          <thead className="bg-[#0a0f19] text-gray-400">
            <tr>
              <th className="px-4 py-3 font-semibold">Tool</th>
              <th className="px-4 py-3 font-semibold">Best for</th>
              <th className="px-4 py-3 font-semibold">Starting price</th>
              <th className="px-4 py-3 font-semibold">Free plan</th>
              <th className="px-4 py-3" />
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={r.id} className={`border-t border-white/5 ${i % 2 === 0 ? "bg-[#0d1117]" : ""}`}>
                <td className="px-4 py-3 font-bold text-white">{r.name}</td>
                <td className="px-4 py-3 text-gray-300">{r.offer!.bestFor}</td>
                <td className="px-4 py-3 text-gray-300">{r.offer!.startingPrice}</td>
                <td className="px-4 py-3 text-gray-300">{r.offer!.freePlan}</td>
                <td className="px-4 py-3 text-right">
                  <a
                    href={getAffiliateUrl(r.id)}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="cta-button whitespace-nowrap px-4 py-2 text-xs"
                    onClick={() => trackAffiliateClick(r.id, r.name, "compare-table")}
                  >
                    Try it →
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-2 text-xs text-gray-500">
        Prices from vendor pricing pages, checked {rows[0].offer!.verified}. Affiliate links — we may earn a commission.
      </p>
    </div>
  );
}
