import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export function PricingSection() {
  return (
    <section id="pricing" className="section-padding bg-[#FEF7EE]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <Card className="max-w-[480px] w-full text-center relative shadow-[0_0_0_3px_rgba(255,107,74,0.06)]">
            {/* Highlight glow */}
            <div className="absolute inset-0 rounded-card bg-gradient-to-b from-[#FFB630]/3 to-transparent pointer-events-none" />

            <div className="relative">
              <span className="inline-block font-display text-5xl font-semibold text-[#FF6B4A] mb-3">
                $0
              </span>
              <h3 className="font-display text-[22px] font-semibold text-[#3D2C24] mb-2">
                Free — Forever
              </h3>
              <p className="font-body text-sm text-[#8C7A6E] mb-6">
                No trial. No catch. Just free.
              </p>

              <ul className="space-y-3 mb-8 text-left max-w-[320px] mx-auto">
                {[
                  "5 free generations per day (no signup)",
                  "10/day with free registration",
                  "All 3 difficulty levels",
                  "PNG download — no watermarks",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[15px] text-[#3D2C24]">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#5B9A68"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="flex-shrink-0 mt-0.5"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>

              <Button href="#hero-input" eventName="pricing_cta_click" className="w-full">
                Start Creating — Free
              </Button>

              <p className="mt-4 text-xs text-[#8C7A6E]">
                No credit card. No trial that expires. Just free.
              </p>
            </div>
          </Card>
        </div>

        {/* Pro teaser */}
        <div className="mt-10 text-center">
          <p className="font-body text-sm text-[#8C7A6E]">
            Heavy user?{" "}
            <span className="text-[#FF6B4A] font-medium">
              Pro coming soon
            </span>{" "}
            — 50/day, ad-free, 4K downloads, $3.99/month.
          </p>
        </div>
      </div>
    </section>
  );
}
