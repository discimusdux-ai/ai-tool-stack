"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

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

interface DashboardData {
  ga4: GA4Metrics | null;
  supabase: SupabaseMetrics | null;
  generatedAt: string;
}

function pct(current: number, prev: number): string {
  if (prev === 0) return current > 0 ? "+∞" : "—";
  const change = ((current - prev) / prev) * 100;
  return (change >= 0 ? "+" : "") + change.toFixed(1) + "%";
}

function isPositive(current: number, prev: number): boolean {
  return current >= prev;
}

function formatDuration(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}m ${s}s`;
}

function StatCard({
  title,
  value,
  prev,
  suffix = "",
  format,
}: {
  title: string;
  value: number;
  prev?: number;
  suffix?: string;
  format?: (v: number) => string;
}) {
  const display = format ? format(value) : value.toLocaleString() + suffix;
  const hasComparison = prev !== undefined;
  const positive = hasComparison ? isPositive(value, prev!) : true;
  const change = hasComparison ? pct(value, prev!) : null;

  return (
    <div className="bg-gray-900 rounded-xl p-5 border border-gray-800">
      <p className="text-gray-400 text-sm font-medium mb-2">{title}</p>
      <p className="text-2xl font-bold text-white">{display}</p>
      {change && (
        <p className={`text-xs mt-1 ${positive ? "text-emerald-400" : "text-red-400"}`}>
          {change} vs prev 7d
        </p>
      )}
    </div>
  );
}

function MiniBar({ value, max }: { value: number; max: number }) {
  const pct = max > 0 ? (value / max) * 100 : 0;
  return (
    <div className="flex items-center gap-2 flex-1">
      <div className="flex-1 bg-gray-800 rounded-full h-1.5">
        <div
          className="bg-brand-500 h-1.5 rounded-full"
          style={{ width: `${pct}%` }}
        />
      </div>
      <span className="text-gray-300 text-sm tabular-nums w-12 text-right">{value.toLocaleString()}</span>
    </div>
  );
}

function SparkLine({ data }: { data: { date: string; views: number }[] }) {
  if (!data.length) return null;
  const max = Math.max(...data.map((d) => d.views), 1);
  const width = 280;
  const height = 48;
  const step = width / (data.length - 1 || 1);

  const points = data
    .map((d, i) => {
      const x = i * step;
      const y = height - (d.views / max) * (height - 4) - 2;
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-12">
      <polyline
        fill="none"
        stroke="#6366f1"
        strokeWidth="2"
        strokeLinejoin="round"
        points={points}
      />
    </svg>
  );
}

export default function AdminDashboard() {
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    fetch("/api/dashboard")
      .then((r) => {
        if (r.status === 401) {
          router.push("/admin/login");
          return null;
        }
        return r.json();
      })
      .then((d) => {
        if (d) setData(d);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load data");
        setLoading(false);
      });
  }, [router]);

  async function handleLogout() {
    await fetch("/api/admin-auth", { method: "DELETE" });
    router.push("/admin/login");
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <div className="text-gray-400">Loading dashboard...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <div className="text-red-400">{error}</div>
      </div>
    );
  }

  const { ga4, supabase } = data ?? {};
  const maxTopPageViews = ga4?.topPages?.[0]?.views ?? 1;
  const maxProductClicks = supabase?.topProducts?.[0]?.clicks ?? 1;
  const generatedAt = data?.generatedAt ? new Date(data.generatedAt).toLocaleString() : "";

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-lg font-bold">AI Tool Stack</h1>
            <p className="text-xs text-gray-400">Analytics Dashboard · Last 7 days</p>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs text-gray-500">{generatedAt}</span>
            <button
              onClick={handleLogout}
              className="text-xs text-gray-400 hover:text-white transition-colors"
            >
              Sign out
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 space-y-8">

        {/* GA4 — Traffic Overview */}
        <section>
          <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
            Traffic · Google Analytics
            {!ga4 && <span className="ml-2 text-yellow-500 normal-case font-normal">(not connected — add GA4_SERVICE_ACCOUNT_JSON to Vercel env)</span>}
          </h2>

          {ga4 ? (
            <>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <StatCard title="Users" value={ga4.totalUsers} prev={ga4.prevTotalUsers} />
                <StatCard title="Sessions" value={ga4.sessions} prev={ga4.prevSessions} />
                <StatCard title="Page Views" value={ga4.pageViews} prev={ga4.prevPageViews} />
                <StatCard
                  title="Avg. Session"
                  value={ga4.avgSessionDurationSec}
                  format={formatDuration}
                />
              </div>

              {/* Sparkline */}
              {ga4.dailyViews.length > 0 && (
                <div className="bg-gray-900 rounded-xl p-5 border border-gray-800 mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-sm font-medium text-gray-300">Daily Page Views</p>
                    <div className="flex gap-4 text-xs text-gray-500">
                      {ga4.dailyViews[0]?.date} → {ga4.dailyViews[ga4.dailyViews.length - 1]?.date}
                    </div>
                  </div>
                  <SparkLine data={ga4.dailyViews} />
                  <div className="flex justify-between text-xs text-gray-600 mt-1">
                    {ga4.dailyViews.map((d) => (
                      <span key={d.date}>{d.date.slice(5)}</span>
                    ))}
                  </div>
                </div>
              )}

              {/* Top Pages */}
              <div className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden">
                <div className="px-5 py-4 border-b border-gray-800">
                  <p className="text-sm font-semibold text-gray-200">Top Pages</p>
                </div>
                <div className="divide-y divide-gray-800">
                  {ga4.topPages.map((page) => (
                    <div key={page.path} className="px-5 py-3 flex items-center gap-4">
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-gray-200 truncate font-mono">{page.path}</p>
                      </div>
                      <MiniBar value={page.views} max={maxTopPageViews} />
                    </div>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <div className="bg-gray-900 rounded-xl border border-dashed border-gray-700 p-8 text-center">
              <p className="text-gray-500 text-sm">
                Set <code className="bg-gray-800 px-1 rounded text-gray-300">GA4_PROPERTY_ID</code> and{" "}
                <code className="bg-gray-800 px-1 rounded text-gray-300">GA4_SERVICE_ACCOUNT_JSON</code> in
                Vercel to see traffic data.
              </p>
            </div>
          )}
        </section>

        {/* Supabase — Affiliate & Subscribers */}
        <section>
          <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
            Affiliate & Subscribers · Supabase
          </h2>

          {supabase ? (
            <>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <StatCard title="Total Subscribers" value={supabase.totalSubscribers} />
                <StatCard title="New Subscribers (7d)" value={supabase.newSubscribers7d} />
                <StatCard title="Total Clicks" value={supabase.totalClicks} />
                <StatCard title="Clicks (7d)" value={supabase.clicks7d} />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Top Products */}
                <div className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden">
                  <div className="px-5 py-4 border-b border-gray-800">
                    <p className="text-sm font-semibold text-gray-200">Top Affiliate Products</p>
                  </div>
                  <div className="divide-y divide-gray-800">
                    {supabase.topProducts.length === 0 && (
                      <p className="px-5 py-4 text-sm text-gray-500">No clicks recorded yet.</p>
                    )}
                    {supabase.topProducts.map((p) => (
                      <div key={p.product_id} className="px-5 py-3 flex items-center gap-4">
                        <div className="flex-1 min-w-0">
                          <p className="text-sm text-gray-200 truncate">
                            {p.product_name ?? p.product_id}
                          </p>
                        </div>
                        <MiniBar value={p.clicks} max={maxProductClicks} />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recent Events */}
                <div className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden">
                  <div className="px-5 py-4 border-b border-gray-800">
                    <p className="text-sm font-semibold text-gray-200">Recent Events</p>
                  </div>
                  <div className="divide-y divide-gray-800">
                    {supabase.recentEvents.length === 0 && (
                      <p className="px-5 py-4 text-sm text-gray-500">No events recorded yet.</p>
                    )}
                    {supabase.recentEvents.slice(0, 12).map((ev, i) => (
                      <div key={i} className="px-5 py-2.5 flex items-center gap-3">
                        <span
                          className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                            ev.event === "affiliate_click"
                              ? "bg-emerald-900/50 text-emerald-400"
                              : ev.event === "newsletter_signup"
                              ? "bg-blue-900/50 text-blue-400"
                              : "bg-gray-800 text-gray-400"
                          }`}
                        >
                          {ev.event.replace("_", " ")}
                        </span>
                        <span className="text-xs text-gray-500 truncate flex-1">
                          {ev.path ?? "—"}
                        </span>
                        <span className="text-xs text-gray-600 whitespace-nowrap">
                          {new Date(ev.created_at).toLocaleDateString()}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="bg-gray-900 rounded-xl border border-dashed border-gray-700 p-8 text-center">
              <p className="text-gray-500 text-sm">
                Supabase not configured. Set{" "}
                <code className="bg-gray-800 px-1 rounded text-gray-300">SUPABASE_SERVICE_ROLE_KEY</code> in
                Vercel.
              </p>
            </div>
          )}
        </section>

      </main>
    </div>
  );
}
