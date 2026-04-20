-- AI Tool Stack: Initial Database Schema
-- Run this migration against your Supabase project

-- ============================================
-- 1. Newsletter Subscribers
-- ============================================
CREATE TABLE IF NOT EXISTS subscribers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  name TEXT,
  source TEXT DEFAULT 'website',          -- where they signed up: website, blog, comparison, etc.
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'unsubscribed', 'bounced')),
  tags TEXT[] DEFAULT '{}',               -- interest tags: ai-writing, seo, design, etc.
  ip_address INET,
  user_agent TEXT,
  confirmed_at TIMESTAMPTZ,
  unsubscribed_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_subscribers_email ON subscribers(email);
CREATE INDEX idx_subscribers_status ON subscribers(status);
CREATE INDEX idx_subscribers_created ON subscribers(created_at DESC);

-- ============================================
-- 2. Analytics Events
-- ============================================
CREATE TABLE IF NOT EXISTS analytics (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  event TEXT NOT NULL,                    -- page_view, affiliate_click, cta_click, newsletter_signup
  path TEXT,                              -- page path: /blog/best-ai-writing-tools
  product_id TEXT,                        -- affiliate product ID (for click events)
  source TEXT,                            -- traffic source: google, direct, newsletter, social
  referrer TEXT,                          -- full referrer URL
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT,
  session_id TEXT,                        -- anonymous session tracking
  ip_address INET,
  user_agent TEXT,
  country TEXT,
  device_type TEXT,                       -- desktop, mobile, tablet
  metadata JSONB DEFAULT '{}',            -- flexible additional data
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_analytics_event ON analytics(event);
CREATE INDEX idx_analytics_created ON analytics(created_at DESC);
CREATE INDEX idx_analytics_product ON analytics(product_id) WHERE product_id IS NOT NULL;
CREATE INDEX idx_analytics_path ON analytics(path);
CREATE INDEX idx_analytics_session ON analytics(session_id);

-- ============================================
-- 3. Articles (for tracking performance)
-- ============================================
CREATE TABLE IF NOT EXISTS articles (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  category TEXT,
  tags TEXT[] DEFAULT '{}',
  status TEXT DEFAULT 'published' CHECK (status IN ('draft', 'published', 'archived')),
  published_at TIMESTAMPTZ,
  views_count INT DEFAULT 0,
  clicks_count INT DEFAULT 0,             -- affiliate clicks from this article
  avg_time_on_page FLOAT,
  search_impressions INT DEFAULT 0,
  search_clicks INT DEFAULT 0,
  search_position FLOAT,
  metadata JSONB DEFAULT '{}',            -- flexible: word_count, featured, etc.
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_articles_slug ON articles(slug);
CREATE INDEX idx_articles_status ON articles(status);
CREATE INDEX idx_articles_category ON articles(category);

-- ============================================
-- 4. Affiliate Links (runtime tracking)
-- ============================================
CREATE TABLE IF NOT EXISTS affiliate_clicks (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  product_id TEXT NOT NULL,               -- matches affiliate-links.ts IDs
  product_name TEXT,
  source_page TEXT,                       -- which page the click came from
  source_section TEXT,                    -- comparison_table, product_card, cta_button, etc.
  session_id TEXT,
  ip_address INET,
  user_agent TEXT,
  country TEXT,
  converted BOOLEAN DEFAULT FALSE,        -- did they actually sign up? (requires postback)
  revenue DECIMAL(10,2),                  -- commission amount if known
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_clicks_product ON affiliate_clicks(product_id);
CREATE INDEX idx_clicks_created ON affiliate_clicks(created_at DESC);
CREATE INDEX idx_clicks_source ON affiliate_clicks(source_page);
CREATE INDEX idx_clicks_converted ON affiliate_clicks(converted) WHERE converted = TRUE;

-- ============================================
-- 5. Email Sends (newsletter tracking)
-- ============================================
CREATE TABLE IF NOT EXISTS email_sends (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  campaign_name TEXT NOT NULL,
  subject TEXT NOT NULL,
  sent_count INT DEFAULT 0,
  open_count INT DEFAULT 0,
  click_count INT DEFAULT 0,
  unsubscribe_count INT DEFAULT 0,
  bounce_count INT DEFAULT 0,
  sent_at TIMESTAMPTZ,
  metadata JSONB DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- 6. Row Level Security Policies
-- ============================================

-- Enable RLS on all tables
ALTER TABLE subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE analytics ENABLE ROW LEVEL SECURITY;
ALTER TABLE articles ENABLE ROW LEVEL SECURITY;
ALTER TABLE affiliate_clicks ENABLE ROW LEVEL SECURITY;
ALTER TABLE email_sends ENABLE ROW LEVEL SECURITY;

-- Analytics: allow anonymous inserts (for tracking), read requires auth
CREATE POLICY "Allow anonymous analytics inserts"
  ON analytics FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow authenticated analytics reads"
  ON analytics FOR SELECT
  TO authenticated
  USING (true);

-- Subscribers: allow anonymous inserts (signup), read requires auth
CREATE POLICY "Allow anonymous subscriber inserts"
  ON subscribers FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow authenticated subscriber management"
  ON subscribers FOR ALL
  TO authenticated
  USING (true);

-- Affiliate clicks: allow anonymous inserts
CREATE POLICY "Allow anonymous click tracking"
  ON affiliate_clicks FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow authenticated click reads"
  ON affiliate_clicks FOR SELECT
  TO authenticated
  USING (true);

-- Articles: read-only for anon, full access for auth
CREATE POLICY "Allow public article reads"
  ON articles FOR SELECT
  TO anon
  USING (status = 'published');

CREATE POLICY "Allow authenticated article management"
  ON articles FOR ALL
  TO authenticated
  USING (true);

-- Email sends: authenticated only
CREATE POLICY "Allow authenticated email send management"
  ON email_sends FOR ALL
  TO authenticated
  USING (true);

-- ============================================
-- 7. Helper Functions
-- ============================================

-- Function to increment article view count
CREATE OR REPLACE FUNCTION increment_article_views(article_slug TEXT)
RETURNS VOID AS $$
BEGIN
  UPDATE articles SET views_count = views_count + 1, updated_at = NOW()
  WHERE slug = article_slug;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to get top articles by clicks
CREATE OR REPLACE FUNCTION get_top_articles_by_clicks(limit_count INT DEFAULT 10)
RETURNS TABLE (slug TEXT, title TEXT, clicks_count INT, views_count INT, conversion_rate FLOAT) AS $$
BEGIN
  RETURN QUERY
  SELECT a.slug, a.title, a.clicks_count, a.views_count,
    CASE WHEN a.views_count > 0 THEN a.clicks_count::FLOAT / a.views_count ELSE 0 END
  FROM articles a
  WHERE a.status = 'published'
  ORDER BY a.clicks_count DESC
  LIMIT limit_count;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to get daily analytics summary
CREATE OR REPLACE FUNCTION get_daily_analytics(days_back INT DEFAULT 30)
RETURNS TABLE (day DATE, page_views BIGINT, affiliate_clicks BIGINT, signups BIGINT) AS $$
BEGIN
  RETURN QUERY
  SELECT
    DATE(created_at) as day,
    COUNT(*) FILTER (WHERE event = 'page_view') as page_views,
    COUNT(*) FILTER (WHERE event = 'affiliate_click') as affiliate_clicks,
    COUNT(*) FILTER (WHERE event = 'newsletter_signup') as signups
  FROM analytics
  WHERE created_at >= NOW() - (days_back || ' days')::INTERVAL
  GROUP BY DATE(created_at)
  ORDER BY day DESC;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
