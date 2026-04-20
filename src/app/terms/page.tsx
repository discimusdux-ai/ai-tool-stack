import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "AI Tool Stack terms of service — usage terms, disclaimers, and legal information.",
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="mb-8 text-4xl font-extrabold text-gray-900">Terms of Service</h1>

      <div className="prose prose-lg max-w-none prose-headings:font-bold prose-a:text-brand-600">
        <p className="text-lg text-gray-600"><strong>Last updated:</strong> April 2026</p>

        <h2>Acceptance of Terms</h2>
        <p>By accessing and using AI Tool Stack (aitoolstack.com), you accept and agree to be bound by these terms. If you do not agree, please do not use our site.</p>

        <h2>Content & Reviews</h2>
        <p>Our reviews, comparisons, and recommendations are based on our research and testing as of the publication date. We make no guarantees about:</p>
        <ul>
          <li>The accuracy of third-party tool features or pricing (these change frequently).</li>
          <li>Your specific results from using any recommended tool.</li>
          <li>The continued availability of any tool or offer mentioned.</li>
        </ul>
        <p>Always verify current pricing and features directly with tool vendors before purchasing.</p>

        <h2>Affiliate Links</h2>
        <p>This site contains affiliate links. When you click on an affiliate link and make a purchase, we may earn a commission. This is at no additional cost to you. See our <a href="/disclosure">affiliate disclosure</a> for details.</p>

        <h2>Intellectual Property</h2>
        <p>All original content on AI Tool Stack (text, images, design, code) is protected by copyright. You may not reproduce, distribute, or create derivative works without our written permission.</p>

        <h2>User Conduct</h2>
        <p>You agree not to:</p>
        <ul>
          <li>Scrape or automatically collect content from our site.</li>
          <li>Use our content for competing affiliate sites without permission.</li>
          <li>Attempt to interfere with site operations or security.</li>
        </ul>

        <h2>Disclaimer of Warranties</h2>
        <p>AI Tool Stack is provided &quot;as is&quot; without warranties of any kind, express or implied. We do not guarantee uninterrupted access or error-free content.</p>

        <h2>Limitation of Liability</h2>
        <p>AI Tool Stack and its operators shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use of this site or reliance on our content.</p>

        <h2>Changes to Terms</h2>
        <p>We may update these terms at any time. Continued use of the site after changes constitutes acceptance of the new terms.</p>

        <h2>Contact</h2>
        <p>Questions about these terms? Email <a href="mailto:legal@aitoolstack.com">legal@aitoolstack.com</a>.</p>
      </div>
    </div>
  );
}
