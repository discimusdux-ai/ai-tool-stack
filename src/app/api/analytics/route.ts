import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const ALLOWED_EVENTS = [
  "page_view",
  "affiliate_click",
  "cta_click",
  "newsletter_signup",
] as const;

function str(v: unknown, max: number): string | null {
  return typeof v === "string" && v ? v.slice(0, max) : null;
}

export async function POST(request: NextRequest) {
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !supabaseKey) {
      return NextResponse.json(
        { error: "Analytics not configured" },
        { status: 503 }
      );
    }

    const body = await request.json();

    // Validate required fields
    if (!body.event || !ALLOWED_EVENTS.includes(body.event)) {
      return NextResponse.json(
        { error: "Invalid event type" },
        { status: 400 }
      );
    }

    const supabase = createClient(supabaseUrl, supabaseKey);

    const { error } = await supabase.from("ats_analytics").insert({
      event: body.event,
      path: typeof body.path === "string" ? body.path.slice(0, 500) : null,
      product_id:
        typeof body.productId === "string"
          ? body.productId.slice(0, 100)
          : null,
      source:
        typeof body.source === "string"
          ? body.source.slice(0, 200)
          : typeof body.placement === "string"
            ? body.placement.slice(0, 200)
            : null,
      referrer:
        typeof body.referrer === "string" ? body.referrer.slice(0, 2000) : null,
    });

    if (error) throw error;

    // If it's an affiliate click, also log to dedicated clicks table
    if (body.event === "affiliate_click" && body.productId) {
      await supabase.from("ats_clicks").insert({
        product_id: body.productId.slice(0, 100),
        product_name:
          typeof body.productName === "string"
            ? body.productName.slice(0, 200)
            : null,
        source_page:
          typeof body.path === "string" ? body.path.slice(0, 500) : null,
        referrer:
          typeof body.referrer === "string"
            ? body.referrer.slice(0, 2000)
            : null,
        user_agent: (request.headers.get("user-agent") ?? "").slice(0, 500) || null,
        utm_source: str(body.utmSource, 100),
        utm_medium: str(body.utmMedium, 100),
        utm_campaign: str(body.utmCampaign, 100),
      });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to record event" },
      { status: 500 }
    );
  }
}
