import { Card } from "@/components/ui/Card";

const features = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF6B4A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19l7-7 3 3-7 7-3-3z" />
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
        <path d="M2 2l7.586 7.586" />
        <circle cx="11" cy="11" r="2" />
      </svg>
    ),
    name: "Text → Line Art",
    advantage: "Describe anything — get clean black-and-white line art powered by tuned AI",
    benefit: "Looks like a real artist drew it. Crisp enough to print and color with crayons, markers, or pencils.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF6B4A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="4" y1="21" x2="4" y2="14" />
        <line x1="4" y1="10" x2="4" y2="3" />
        <line x1="12" y1="21" x2="12" y2="12" />
        <line x1="12" y1="8" x2="12" y2="3" />
        <line x1="20" y1="21" x2="20" y2="16" />
        <line x1="20" y1="12" x2="20" y2="3" />
        <line x1="2" y1="14" x2="6" y2="14" />
        <line x1="10" y1="8" x2="14" y2="8" />
        <line x1="18" y1="16" x2="22" y2="16" />
      </svg>
    ),
    name: "3 Difficulty Levels",
    advantage: "Simple (toddlers 3-5), Medium (kids 6-8), Complex (older kids & adults)",
    benefit: "One tool for the whole family. Big shapes for little hands, intricate patterns for focus time.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF6B4A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>
    ),
    name: "Instant PNG Download",
    advantage: "Standard paper ratio, clean white background, no watermarks, no weird margins",
    benefit: "Hit print, hand it to your kid. No cropping, no adjusting, just print-ready pages.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF6B4A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="8.5" cy="7" r="4" />
        <line x1="18" y1="8" x2="23" y2="13" />
        <line x1="23" y1="8" x2="18" y2="13" />
      </svg>
    ),
    name: "No Signup Required",
    advantage: "Start immediately — no email, no account, no credit card",
    benefit: "Kid needs a page NOW. You're not filling out a form while they tug your sleeve. Type → generate → print.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF6B4A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9z" />
        <path d="M12 3v18" />
        <path d="M3 12h18" />
        <path d="M8 5.5c1.2 2.1 1.9 4.3 2 6.5-.1 2.2-.8 4.4-2 6.5" />
        <path d="M16 5.5c-1.2 2.1-1.9 4.3-2 6.5.1 2.2.8 4.4 2 6.5" />
      </svg>
    ),
    name: "Clean, Ad-Lite UX",
    advantage: "Minimal interface with respectful ad placement — no flashing banners or popup storms",
    benefit: "You're here to make coloring pages, not fight ads. The tool stays front and center.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF6B4A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    name: "Better AI Quality",
    advantage: "Custom-tuned models for clean outlines, richer detail, fewer artifacts",
    benefit: "Defined outlines you can actually follow. No broken lines. No muddy blobs where a face should be.",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="section-padding">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="font-display text-[26px] sm:text-[36px] font-semibold leading-[1.2] tracking-[-0.01em] text-[#3D2C24]">
            Everything You Need
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <Card key={feature.name}>
              <div className="w-10 h-10 rounded-lg bg-[#FFF9F2] flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="font-display text-lg font-semibold text-[#3D2C24] mb-2">
                {feature.name}
              </h3>
              <p className="font-body text-sm text-[#8C7A6E] mb-3 leading-relaxed">
                {feature.advantage}
              </p>
              <p className="font-body text-[15px] text-[#3D2C24] leading-relaxed">
                {feature.benefit}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
