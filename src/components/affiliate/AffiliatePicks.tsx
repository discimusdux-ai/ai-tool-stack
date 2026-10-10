"use client";

import { getAffiliateLink, getAffiliateUrl } from "@/lib/affiliate-links";
import { trackAffiliateClick } from "@/lib/track-click";

interface Props {
  /** array, or comma-separated string (MDX blocks JS expressions) */
  ids?: string[] | string;
  title?: string;
}

/** Above-the-fold "Our picks" box. Renders only active affiliates with offer data. */
export function AffiliatePicks({ ids, title = "Tools we recommend for this" }: Props) {
  const list = Array.isArray(ids) ? ids : (ids ?? "").split(",").map((x) => x.trim()).filter(Boolean);
  const picks = list
    .map((id) => getAffiliateLink(id))
    .filter((l): l is NonNullable<typeof l> => !!l && l.isActive && !!l.offer && getAffiliateUrl(l.id) !== "#");
  if (!picks.length) return null;

  return (
    <aside className="mt-8 rounded-xl border border-brand-500/30 bg-brand-950/40 p-5" data-placement="above-fold">
      <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-brand-300">{title}</p>
      <div className={`grid gap-3 ${picks.length > 1 ? "sm:grid-cols-2" : ""}`}>
        {picks.map((p) => (
          <div key={p.id} className="flex items-center justify-between gap-4 rounded-lg bg-gray-900/70 p-4 ring-1 ring-white/10">
            <div className="min-w-0">
              <p className="font-bold text-white">{p.name}</p>
              <p className="text-sm text-gray-400">{p.offer!.tagline}</p>
              <p className="mt-1 text-xs text-gray-500">
                {p.offer!.startingPrice} · Free plan: {p.offer!.freePlan}
              </p>
            </div>
            <a
              href={getAffiliateUrl(p.id)}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="cta-button shrink-0 px-4 py-2 text-xs"
              onClick={() => trackAffiliateClick(p.id, p.name, "above-fold")}
            >
              Try {p.name} →
            </a>
          </div>
        ))}
      </div>
      <p className="mt-3 text-xs text-gray-500">
        We may earn a commission if you sign up through these links, at no extra cost to you.
      </p>
    </aside>
  );
}
