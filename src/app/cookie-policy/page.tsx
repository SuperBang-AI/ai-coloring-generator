import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Learn about how and why we use cookies on the AI Coloring Page Generator — essential, analytics, and advertising cookies.",
  alternates: {
    canonical: "/cookie-policy",
  },
};

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-[#FFF9F2]">
      <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <a href="/" className="inline-flex items-center gap-2 font-display text-[#FF6B4A] font-semibold mb-8 no-underline hover:text-[#E55A3A] transition-colors">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back to Home
        </a>

        <h1 className="font-display text-[32px] sm:text-[40px] font-semibold text-[#3D2C24] mb-8">
          Cookie Policy
        </h1>
        <p className="text-[#8C7A6E] mb-8">Last updated: June 2026</p>

        <div className="prose prose-lg max-w-none text-[#3D2C24] space-y-6">
          <h2 className="font-display text-2xl font-semibold mt-10 mb-4">What Are Cookies?</h2>
          <p>Cookies are small text files placed on your device when you visit a website. They help websites remember your preferences, understand usage patterns, and deliver relevant content.</p>

          <h2 className="font-display text-2xl font-semibold mt-10 mb-4">Cookies We Use</h2>

          <h3 className="font-display text-xl font-semibold mt-6 mb-2">Essential Cookies</h3>
          <p>Required for basic site functionality. These cannot be disabled.</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Cookie consent</strong> — remembers your cookie preferences</li>
          </ul>

          <h3 className="font-display text-xl font-semibold mt-6 mb-2">Analytics Cookies</h3>
          <p>Help us understand how visitors use our site. We use Google Analytics. These are only set with your consent.</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Google Analytics</strong> (_ga, _gid, _gat) — anonymous usage statistics</li>
          </ul>

          <h3 className="font-display text-xl font-semibold mt-6 mb-2">Advertising Cookies</h3>
          <p>Used to display relevant ads and measure ad performance. Set with your consent.</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Google AdSense</strong> — ad delivery and frequency capping</li>
          </ul>

          <h2 className="font-display text-2xl font-semibold mt-10 mb-4">Your Choices</h2>
          <p>You can:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Accept All</strong> — enable all cookies for the best experience</li>
            <li><strong>Essential Only</strong> — disable analytics and advertising cookies</li>
            <li><strong>Browser settings</strong> — block or delete cookies through your browser settings</li>
          </ul>
          <p>To change your preferences, clear your browser&apos;s localStorage for this site or use your browser&apos;s cookie management tools.</p>

          <h2 className="font-display text-2xl font-semibold mt-10 mb-4">EEA & UK Users</h2>
          <p>Under GDPR and UK GDPR, we require your consent before setting non-essential cookies. You can withdraw consent at any time by clearing your browser data or adjusting your browser&apos;s cookie settings.</p>

          <h2 className="font-display text-2xl font-semibold mt-10 mb-4">Contact</h2>
          <p>Questions? <a href="mailto:hello@aicoloringgenerator.com" className="text-[#FF6B4A] underline">hello@aicoloringgenerator.com</a>.</p>
        </div>
      </div>
    </div>
  );
}
