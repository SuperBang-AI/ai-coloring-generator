import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Our privacy policy explains how we collect, use, and protect your personal information when using the AI Coloring Page Generator.",
};

export default function PrivacyPolicyPage() {
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
          Privacy Policy
        </h1>
        <p className="text-[#8C7A6E] mb-8">Last updated: June 2026</p>

        <div className="prose prose-lg max-w-none text-[#3D2C24] space-y-6">
          <h2 className="font-display text-2xl font-semibold mt-10 mb-4">1. Information We Collect</h2>
          <p>We collect minimal information to provide our coloring page generation service:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Input prompts</strong> — the text descriptions you submit to generate coloring pages. These are processed transiently and not permanently stored.</li>
            <li><strong>Generated images</strong> — coloring pages are generated and delivered to you. We do not retain generated images longer than necessary to deliver them.</li>
            <li><strong>Usage data</strong> — anonymized analytics including page views, feature usage, and interaction events for improving our service.</li>
            <li><strong>Cookies</strong> — we use essential cookies and, with consent, analytics cookies. See our <a href="/cookie-policy" className="text-[#FF6B4A] underline">Cookie Policy</a>.</li>
          </ul>

          <h2 className="font-display text-2xl font-semibold mt-10 mb-4">2. How We Use Information</h2>
          <p>Your information helps us:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Generate coloring pages from your prompts</li>
            <li>Improve the quality and speed of our AI generation</li>
            <li>Understand how people use the tool to make it better</li>
            <li>Display relevant advertisements (our primary revenue source)</li>
          </ul>

          <h2 className="font-display text-2xl font-semibold mt-10 mb-4">3. Data Sharing</h2>
          <p>We do not sell your personal data. Data may be shared with:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>AI service providers</strong> — to process prompts and generate images</li>
            <li><strong>Analytics providers</strong> — to measure site performance (e.g., Google Analytics)</li>
            <li><strong>Advertising partners</strong> — to display relevant ads (e.g., Google AdSense)</li>
          </ul>

          <h2 className="font-display text-2xl font-semibold mt-10 mb-4">4. Children&apos;s Privacy</h2>
          <p>Our tool is designed for use by adults (parents, teachers). Children under 13 should not use the tool directly. We do not knowingly collect personal information from children under 13. If you believe a child has provided us with personal data, please contact us.</p>

          <h2 className="font-display text-2xl font-semibold mt-10 mb-4">5. Data Security</h2>
          <p>We use industry-standard security measures including HTTPS encryption and secure API communication. However, no method of electronic transmission is 100% secure.</p>

          <h2 className="font-display text-2xl font-semibold mt-10 mb-4">6. Your Rights</h2>
          <p>Depending on your location, you may have rights under GDPR (EEA/UK), CCPA (California), or similar laws. These include the right to access, correct, delete, or port your personal data. To exercise these rights, contact us.</p>

          <h2 className="font-display text-2xl font-semibold mt-10 mb-4">7. Cookies</h2>
          <p>See our <a href="/cookie-policy" className="text-[#FF6B4A] underline">Cookie Policy</a> for detailed information about cookie usage.</p>

          <h2 className="font-display text-2xl font-semibold mt-10 mb-4">8. Changes to This Policy</h2>
          <p>We may update this policy. Significant changes will be posted on this page with an updated date.</p>

          <h2 className="font-display text-2xl font-semibold mt-10 mb-4">9. Contact</h2>
          <p>Questions about this policy? Reach us at <a href="mailto:hello@aicoloringgenerator.com" className="text-[#FF6B4A] underline">hello@aicoloringgenerator.com</a>.</p>
        </div>
      </div>
    </div>
  );
}
