import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy",
  description: "Our refund policy for the AI Coloring Page Generator. Currently free — no refunds needed. Covers future paid plans.",
  alternates: {
    canonical: "/refund-policy",
  },
};

export default function RefundPolicyPage() {
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
          Refund Policy
        </h1>
        <p className="text-[#8C7A6E] mb-8">Last updated: June 2026</p>

        <div className="prose prose-lg max-w-none text-[#3D2C24] space-y-6">
          <h2 className="font-display text-2xl font-semibold mt-10 mb-4">Current Status: Free Service</h2>
          <p>
            The AI Coloring Page Generator is currently a completely free service. No payments are required
            to use the core functionality. No refunds are applicable at this time.
          </p>

          <h2 className="font-display text-2xl font-semibold mt-10 mb-4">Future Paid Plans</h2>
          <p>
            If we introduce a paid Pro plan in the future (e.g., $3.99/month), the following refund policy will apply:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Cancellation</strong> — you may cancel your subscription at any time. Access continues until the end of the billing period.</li>
            <li><strong>Refunds</strong> — refunds are available within 14 days of payment if you are unsatisfied with the service.</li>
            <li><strong>Exceptions</strong> — refunds are not provided for accounts that violated our Terms of Service.</li>
            <li><strong>How to request</strong> — email <a href="mailto:hello@aicoloringgenerator.com" className="text-[#FF6B4A] underline">hello@aicoloringgenerator.com</a> with your account details.</li>
          </ul>

          <h2 className="font-display text-2xl font-semibold mt-10 mb-4">Contact</h2>
          <p>
            For any billing questions, reach us at{" "}
            <a href="mailto:hello@aicoloringgenerator.com" className="text-[#FF6B4A] underline">hello@aicoloringgenerator.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
