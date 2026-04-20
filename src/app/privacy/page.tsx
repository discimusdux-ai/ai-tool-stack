import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "AI Tool Stack privacy policy — how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="mb-8 text-4xl font-extrabold text-gray-900">Privacy Policy</h1>

      <div className="prose prose-lg max-w-none prose-headings:font-bold prose-a:text-brand-600">
        <p className="text-lg text-gray-600"><strong>Last updated:</strong> April 2026</p>

        <h2>Information We Collect</h2>
        <p>We collect minimal information to provide our services:</p>
        <ul>
          <li><strong>Email address</strong> — When you subscribe to our newsletter.</li>
          <li><strong>Usage data</strong> — Anonymous page views and click analytics to improve our content.</li>
          <li><strong>Cookies</strong> — Essential cookies for site functionality and analytics cookies (with your consent).</li>
        </ul>

        <h2>How We Use Your Information</h2>
        <ul>
          <li>Send our weekly newsletter (only if you opt in).</li>
          <li>Improve our content based on aggregate usage patterns.</li>
          <li>Track affiliate link clicks for revenue attribution.</li>
        </ul>

        <h2>Third-Party Services</h2>
        <p>We use the following third-party services that may process your data:</p>
        <ul>
          <li><strong>Supabase</strong> — Database and authentication</li>
          <li><strong>Vercel</strong> — Website hosting and analytics</li>
          <li><strong>Affiliate networks</strong> — Click tracking (cookies set by partner sites when you click affiliate links)</li>
        </ul>

        <h2>Your Rights</h2>
        <p>You have the right to:</p>
        <ul>
          <li>Access, correct, or delete your personal data.</li>
          <li>Unsubscribe from our newsletter at any time (one-click unsubscribe in every email).</li>
          <li>Opt out of non-essential cookies.</li>
          <li>Request a copy of your data.</li>
        </ul>

        <h2>Data Retention</h2>
        <p>We retain newsletter subscriber data until you unsubscribe. Analytics data is anonymized and retained for 12 months.</p>

        <h2>Security</h2>
        <p>We use industry-standard security measures including encrypted connections (HTTPS), secure database hosting, and access controls to protect your information.</p>

        <h2>Contact</h2>
        <p>For privacy questions or data requests, email <a href="mailto:privacy@aitoolstack.com">privacy@aitoolstack.com</a>.</p>
      </div>
    </div>
  );
}
