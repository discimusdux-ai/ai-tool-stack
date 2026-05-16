import { NextRequest, NextResponse } from "next/server";
import { BetaAnalyticsDataClient } from "@google-analytics/data";
import { createClient } from "@supabase/supabase-js";

export const runtime = "nodejs";

interface GA4Metrics {
  totalUsers: number;
  sessions: number;
  pageViews: number;
  avgSessionDurationSec: number;
  prevTotalUsers: number;
  prevSessions: number;
  prevPageViews: number;
  topPages: { path: string; views: number; users: number }[];
  dailyViews: { date: string; views: number; users: number }[];
}

interface SupabaseMetrics {
  totalSubscribers: number;
  newSubscribers7d: number;
  totalClicks: number;
  clicks7d: number;
  topProducts: { product_id: string; product_name: string | null; clicks: number }[];
  recentEvents: { event: string; path: string | null; created_at: string }[];
}

async function getGA4Metrics(propertyId: string, serviceAccountJson: object): Promise<GA4Metrics | null> {
  try {
    const client = new BetaAnalyticsDataClient({
      credentials: serviceAccountJson as never,
    });

    const property = `properties/${propertyId}`;

    // Current 7-day period
    const [current, previous, topPages, daily] = await Promise.all([
      client.runReport({
        property,
        dateRanges: [{ startDate: "7daysAgo", endDate: "yesterday" }],
        metrics: [
          { name: "totalUsers" },
          { name: "sessions" },
          { name: "screenPageViews" },
          { name: "averageSessionDuration" },
        ],
      }),
      // Previous 7-day period for comparison
      client.runReport({
        property,
        dateRanges: [{ startDate: "14daysAgo", endDate: "8daysAgo" }],
        metrics: [
          { name: "totalUsers" },
          { name: "sessions" },
          { name: "screenPageViews" },
        ],
      }),
      // Top pages
      client.runReport({
        property,
        dateRanges: [{ startDate: "7daysAgo", endDate: "yesterday" }],
        dimensions: [{ name: "pagePath" }],
        metrics: [{ name: "screenPageViews" }, { name: "totalUsers" }],
        limit: 10,
        orderBys: [{ metric: { metricName: "screenPageViews" }, desc: true }],
      }),
      // Daily breakdown
      client.runReport({
        property,
        dateRanges: [{ startDate: "7daysAgo", endDate: "yesterday" }],
        dimensions: [{ name: "date" }],
        metrics: [{ name: "screenPageViews" }, { name: "totalUsers" }],
        orderBys: [{ dimension: { dimensionName: "date" } }],
      }),
    ]);

    const currentRow = current[0]?.rows?.[0];
    const prevRow = previous[0]?.rows?.[0];

    return {
      totalUsers: parseInt(currentRow?.metricValues?.[0]?.value ?? "0"),
      sessions: parseInt(currentRow?.metricValues?.[1]?.value ?? "0"),
      pageViews: parseInt(currentRow?.metricValues?.[2]?.value ?? "0"),
      avgSessionDurationSec: parseFloat(currentRow?.metricValues?.[3]?.value ?? "0"),
      prevTotalUsers: parseInt(prevRow?.metricValues?.[0]?.value ?? "0"),
      prevSessions: parseInt(prevRow?.metricValues?.[1]?.value ?? "0"),
      prevPageViews: parseInt(prevRow?.metricValues?.[2]?.value ?? "0"),
      topPages: (topPages[0]?.rows ?? []).map((row) => ({
        path: row.dimensionValues?.[0]?.value ?? "",
        views: parseInt(row.metricValues?.[0]?.value ?? "0"),
        users: parseInt(row.metricValues?.[1]?.value ?? "0"),
      })),
      dailyViews: (daily[0]?.rows ?? []).map((row) => {
        const d = row.dimensionValues?.[0]?.value ?? "";
        return {
          date: `${d.slice(0, 4)}-${d.slice(4, 6)}-${d.slice(6, 8)}`,
          views: parseInt(row.metricValues?.[0]?.value ?? "0"),
          users: parseInt(row.metricValues?.[1]?.value ?? "0"),
        };
      }),
    };
  } catch (err) {
    console.error("GA4 error:", err);
    return null;
  }
}

async function getSupabaseMetrics(): Promise<SupabaseMetrics | null> {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return null;

  try {
    const supabase = createClient(url, key);
    const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString();

    const [
      { count: totalSubscribers },
      { count: newSubscribers7d },
      { count: totalClicks },
      { count: clicks7d },
      { data: topProducts },
      { data: recentEvents },
    ] = await Promise.all([
      supabase.from("ats_subscribers").select("*", { count: "exact", head: true }),
      supabase.from("ats_subscribers").select("*", { count: "exact", head: true }).gte("created_at", sevenDaysAgo),
      supabase.from("ats_clicks").select("*", { count: "exact", head: true }),
      supabase.from("ats_clicks").select("*", { count: "exact", head: true }).gte("created_at", sevenDaysAgo),
      // Top products by click count
      supabase.rpc("get_top_products", { limit_count: 10 }).then(({ data, error }) => {
        if (error || !data) {
          // Fallback: manual group-by via raw query
          return supabase
            .from("ats_clicks")
            .select("product_id, product_name")
            .order("created_at", { ascending: false })
            .limit(500)
            .then(({ data: rows }) => {
              const counts: Record<string, { product_name: string | null; clicks: number }> = {};
              for (const r of rows ?? []) {
                if (!counts[r.product_id]) counts[r.product_id] = { product_name: r.product_name, clicks: 0 };
                counts[r.product_id].clicks++;
              }
              return {
                data: Object.entries(counts)
                  .map(([pid, v]) => ({ product_id: pid, product_name: v.product_name, clicks: v.clicks }))
                  .sort((a, b) => b.clicks - a.clicks)
                  .slice(0, 10),
              };
            });
        }
        return { data };
      }),
      supabase
        .from("ats_analytics")
        .select("event, path, created_at")
        .order("created_at", { ascending: false })
        .limit(20),
    ]);

    return {
      totalSubscribers: totalSubscribers ?? 0,
      newSubscribers7d: newSubscribers7d ?? 0,
      totalClicks: totalClicks ?? 0,
      clicks7d: clicks7d ?? 0,
      topProducts: (topProducts as { product_id: string; product_name: string | null; clicks: number }[]) ?? [],
      recentEvents: (recentEvents as { event: string; path: string | null; created_at: string }[]) ?? [],
    };
  } catch (err) {
    console.error("Supabase error:", err);
    return null;
  }
}

export async function GET(request: NextRequest) {
  // Verify admin auth
  const authCookie = request.cookies.get("admin-auth");
  if (!authCookie || authCookie.value !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const propertyId = process.env.GA4_PROPERTY_ID ?? "538067539";
  const serviceAccountB64 = process.env.GA4_SERVICE_ACCOUNT_JSON;

  let ga4: GA4Metrics | null = null;
  if (serviceAccountB64) {
    try {
      const serviceAccountJson = JSON.parse(
        Buffer.from(serviceAccountB64, "base64").toString("utf-8")
      );
      ga4 = await getGA4Metrics(propertyId, serviceAccountJson);
    } catch (err) {
      console.error("Failed to parse service account JSON:", err);
    }
  }

  const supabase = await getSupabaseMetrics();

  return NextResponse.json({
    ga4,
    supabase,
    generatedAt: new Date().toISOString(),
  });
}
