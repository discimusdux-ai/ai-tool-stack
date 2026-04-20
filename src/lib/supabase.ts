import { createClient, SupabaseClient } from "@supabase/supabase-js";

let _supabase: SupabaseClient | null = null;

/**
 * Get the Supabase client (lazy-initialized to avoid build-time crashes).
 * Returns null if environment variables are not configured.
 */
export function getSupabase(): SupabaseClient | null {
  if (_supabase) return _supabase;

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !key) {
    console.warn("Supabase not configured — missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY");
    return null;
  }

  _supabase = createClient(url, key);
  return _supabase;
}

/** Track a page view (fails silently if Supabase isn't configured) */
export async function trackPageView(path: string, referrer?: string) {
  const supabase = getSupabase();
  if (!supabase) return;

  await supabase.from("analytics").insert({
    event: "page_view",
    path,
    referrer: referrer ?? null,
  });
}

/** Track an affiliate click (fails silently if Supabase isn't configured) */
export async function trackAffiliateClick(productId: string, source: string) {
  const supabase = getSupabase();
  if (!supabase) return;

  await supabase.from("analytics").insert({
    event: "affiliate_click",
    product_id: productId,
    source,
  });
}
