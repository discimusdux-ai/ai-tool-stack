import { NextRequest, NextResponse } from "next/server";
import { JWT } from "google-auth-library";

export const runtime = "nodejs";

/**
 * Admin-only read-only GA4 Data API proxy.
 * POST { reports: [<runReport body>, ...] } (max 10) → { reports: [<runReport response>, ...] }
 * Auth: admin-auth cookie (same as /api/dashboard). Scope: analytics.readonly.
 */
export async function POST(request: NextRequest) {
  const authCookie = request.cookies.get("admin-auth");
  if (!authCookie || authCookie.value !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const propertyId = process.env.GA4_PROPERTY_ID ?? "538067539";
  const sa = process.env.GA4_SERVICE_ACCOUNT_JSON;
  if (!sa) return NextResponse.json({ error: "GA4 not configured" }, { status: 503 });

  let reports: object[];
  try {
    const body = await request.json();
    reports = Array.isArray(body?.reports) ? body.reports.slice(0, 10) : [];
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }
  if (!reports.length) return NextResponse.json({ error: "reports[] required" }, { status: 400 });

  try {
    const creds = JSON.parse(Buffer.from(sa, "base64").toString("utf-8"));
    const jwt = new JWT({
      email: creds.client_email,
      key: creds.private_key,
      scopes: ["https://www.googleapis.com/auth/analytics.readonly"],
    });
    const { token } = await jwt.getAccessToken();
    const results = await Promise.all(
      reports.map(async (r) => {
        const res = await fetch(
          `https://analyticsdata.googleapis.com/v1beta/properties/${propertyId}:runReport`,
          {
            method: "POST",
            headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
            body: JSON.stringify(r),
          }
        );
        const json = await res.json();
        return res.ok ? json : { error: json };
      })
    );
    return NextResponse.json({ reports: results });
  } catch (err) {
    return NextResponse.json({ error: err instanceof Error ? err.message : String(err) }, { status: 500 });
  }
}
