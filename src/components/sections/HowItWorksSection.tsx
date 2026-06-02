import { Card } from "@/components/ui/Card";
import { DifficultySelector } from "@/components/ui/DifficultySelector";

const steps = [
  {
    number: "1",
    title: "Describe",
    description: "Type your idea — unicorn with rainbow wings, fire truck, underwater castle",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FF6B4A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" />
        <path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z" />
      </svg>
    ),
  },
  {
    number: "2",
    title: "Pick a style",
    description: "",
    extra: <DifficultySelector />,
  },
  {
    number: "3",
    title: "Download & Print",
    description: "Get a crisp PNG in ~10 seconds. Print on any home printer.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FF6B4A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 9V2h12v7" />
        <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
        <path d="M6 14h12v8H6z" />
      </svg>
    ),
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="section-padding">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="font-display text-[26px] sm:text-[36px] font-semibold leading-[1.2] tracking-[-0.01em] text-[#3D2C24]">
            How It Works
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step, i) => (
            <div key={step.number} className="relative">
              <Card className="h-full flex flex-col items-start gap-4">
                {/* Step number */}
                <span className="font-display text-[72px] font-semibold leading-none text-[#FF6B4A] opacity-15 select-none">
                  {step.number}
                </span>

                {/* Icon & title */}
                <div className="flex items-center gap-3 -mt-8">
                  {step.icon && (
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#FFF9F2] flex items-center justify-center">
                      {step.icon}
                    </div>
                  )}
                  <h3 className="font-display text-xl font-semibold text-[#3D2C24]">
                    {step.title}
                  </h3>
                </div>

                {/* Description / Extra */}
                {step.description && (
                  <p className="font-body text-[15px] leading-relaxed text-[#8C7A6E]">
                    {step.description}
                  </p>
                )}
                {step.extra && <div>{step.extra}</div>}
              </Card>

              {/* Arrow connector (desktop) */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-[#EBE0D5]">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#EBE0D5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
