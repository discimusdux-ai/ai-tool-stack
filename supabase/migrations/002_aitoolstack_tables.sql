-- AI Tool Stack: Database Tables
-- Run in Supabase SQL Editor (Dashboard → SQL Editor → New query)
-- Project: zjynadxdewybpdvwbuxr

-- ============================================
-- 1. Newsletter Subscribers
-- ============================================
CREATE TABLE IF NOT EXISTS ats_subscribers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  name TEXT,
  source TEXT DEFAULT 'website',
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'unsubscribed', 'bounced')),
  tags TEXT[] DEFAULT '{}',
  ip_address INET,
  user_agent TEXT,
  confirmed_at TIMESTAMPTZ,
  unsubscribed_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_ats_subscribers_email ON ats_subscribers(email);
CREATE INDEX IF NOT EXISTS idx_ats_subscribers_status ON ats_subscribers(status);
CREATE INDEX IF NOT EXISTS idx_ats_subscribers_created ON ats_subscribers(created_at DESC);

-- ============================================
-- 2. Analytics Events
-- ============================================
CREATE TABLE IF NOT EXISTS ats_analytics (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  event TEXT NOT NULL,
  path TEXT,
  product_id TEXT,
  source TEXT,
  referrer TEXT,
  user_agent TEXT,
  ip_address INET,
  session_id TEXT,
  metadata JSONB DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_ats_analytics_event ON ats_analytics(event);
CREATE INDEX IF NOT EXISTS idx_ats_analytics_created ON ats_analytics(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_ats_analytics_path ON ats_analytics(path);
CREATE INDEX IF NOT EXISTS idx_ats_analytics_product ON ats_analytics(product_id);

-- ============================================
-- 3. Affiliate Clicks (dedicated tracking)
-- ============================================
CREATE TABLE IF NOT EXISTS ats_clicks (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  product_id TEXT NOT NULL,
  product_name TEXT,
  source_page TEXT,
  referrer TEXT,
  user_agent TEXT,
  ip_address INET,
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_ats_clicks_product ON ats_clicks(product_id);
CREATE INDEX IF NOT EXISTS idx_ats_clicks_created ON ats_clicks(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_ats_clicks_source ON ats_clicks(source_page);

-- ============================================
-- 4. Row Level Security
-- ============================================

-- Enable RLS on all tables
ALTER TABLE ats_subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE ats_analytics ENABLE ROW LEVEL SECURITY;
ALTER TABLE ats_clicks ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (for the public API)
CREATE POLICY "Allow anonymous inserts on subscribers"
  ON ats_subscribers FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow anonymous inserts on analytics"
  ON ats_analytics FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow anonymous inserts on clicks"
  ON ats_clicks FOR INSERT
  TO anon
  WITH CHECK (true);

-- Service role can do everything (for admin/server-side)
CREATE POLICY "Service role full access on subscribers"
  ON ats_subscribers FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Service role full access on analytics"
  ON ats_analytics FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Service role full access on clicks"
  ON ats_clicks FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

-- ============================================
-- 5. Auto-update timestamp trigger
-- ============================================
CREATE OR REPLACE FUNCTION ats_update_timestamp()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_ats_subscribers_updated
  BEFORE UPDATE ON ats_subscribers
  FOR EACH ROW
  EXECUTE FUNCTION ats_update_timestamp();

-- ============================================
-- 6. Helper views
-- ============================================

-- Daily analytics summary
CREATE OR REPLACE VIEW ats_daily_stats AS
SELECT
  DATE(created_at) AS day,
  event,
  COUNT(*) AS total,
  COUNT(DISTINCT ip_address) AS unique_visitors
FROM ats_analytics
GROUP BY DATE(created_at), event
ORDER BY day DESC, event;

-- Top affiliate clicks
CREATE OR REPLACE VIEW ats_top_clicks AS
SELECT
  product_id,
  product_name,
  COUNT(*) AS total_clicks,
  COUNT(DISTINCT ip_address) AS unique_clicks,
  MAX(created_at) AS last_click
FROM ats_clicks
GROUP BY product_id, product_name
ORDER BY total_clicks DESC;

-- Subscriber growth
CREATE OR REPLACE VIEW ats_subscriber_growth AS
SELECT
  DATE(created_at) AS day,
  COUNT(*) AS new_subscribers,
  SUM(COUNT(*)) OVER (ORDER BY DATE(created_at)) AS cumulative
FROM ats_subscribers
WHERE status = 'active'
GROUP BY DATE(created_at)
ORDER BY day DESC;
