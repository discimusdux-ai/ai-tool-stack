"use client";

/**
 * Fire-and-forget affiliate click tracker.
 * Posts to /api/analytics (writes to ats_analytics + ats_clicks in Supabase).
 * Never blocks or throws — a tracking failure must never break the outbound link.
 */
export function trackAffiliateClick(productId: string, productName?: string) {
  try {
    const payload = JSON.stringify({
      event: "affiliate_click",
      productId,
      productName,
      path: typeof window !== "undefined" ? window.location.pathname : undefined,
      referrer: typeof document !== "undefined" ? document.referrer : undefined,
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
