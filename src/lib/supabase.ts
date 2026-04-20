import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Track page view
export async function trackPageView(path: string, referrer?: string) {
  await supabase.from("analytics").insert({ event: "page_view", path, referrer, timestamp: new Date().toISOString() });
}

// Track affiliate click
export async function trackAffiliateClick(productId: string, source: string) {
  await supabase.from("analytics").insert({ event: "affiliate_click", product_id: productId, source, timestamp: new Date().toISOString() });
}
