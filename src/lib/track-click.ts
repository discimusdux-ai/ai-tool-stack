"use client";

/**
 * Attribution + click tracking helpers.
 *
 * - captureAttribution(): called once per page load (UtmCapture). Stores the landing
 *   utm_* params in sessionStorage so a later affiliate click can be attributed to the
 *   channel that brought the visitor (e.g. utm_source=x).
 * - `?ats_test=1` on any URL marks the session as an internal test; its clicks are stored
 *   with utm_medium="internal-test" so reports can exclude them.
 * - trackAffiliateClick(): fire-and-forget POST to /api/analytics. Never blocks or throws.
 */
const KEY = "ats_attr";

type Attr = { utm_source?: string; utm_medium?: string; utm_campaign?: string; test?: boolean };

function readAttr(): Attr {
  try {
    return JSON.parse(sessionStorage.getItem(KEY) || "{}") as Attr;
  } catch {
    return {};
  }
}

export function captureAttribution() {
  try {
    const p = new URLSearchParams(window.location.search);
    const prev = readAttr();
    const next: Attr = { ...prev };
    for (const k of ["utm_source", "utm_medium", "utm_campaign"] as const) {
      const v = p.get(k);
      if (v && !prev.utm_source) next[k] = v.slice(0, 100); // first touch wins
    }
    if (p.get("ats_test") === "1") next.test = true;
    sessionStorage.setItem(KEY, JSON.stringify(next));
  } catch {
    // no-op
  }
}

export function trackAffiliateClick(productId: string, productName?: string, placement?: string) {
  try {
    const attr = typeof window !== "undefined" ? readAttr() : {};
    const payload = JSON.stringify({
      event: "affiliate_click",
      productId,
      productName,
      placement,
      path: typeof window !== "undefined" ? window.location.pathname : undefined,
      referrer: typeof document !== "undefined" ? document.referrer : undefined,
      utmSource: attr.utm_source,
      utmMedium: attr.test ? "internal-test" : attr.utm_medium,
      utmCampaign: attr.utm_campaign,
    });
    fetch("/api/analytics", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: payload,
      keepalive: true,
    }).catch(() => {});
  } catch {
    // no-op — tracking must never break the user-facing click
  }
}
