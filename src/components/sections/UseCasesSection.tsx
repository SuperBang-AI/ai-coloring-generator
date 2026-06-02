import { Card } from "@/components/ui/Card";

const useCases = [
  {
    title: "Weekend Morning with the Kids",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF6B4A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    before: "It's Saturday morning. Your 5-year-old wants to color a dinosaur. You only have princess books and farm animal books. Google shows pixelated junk.",
    after: 'You type "friendly T-Rex with a birthday hat." 10 seconds later, a clean line-art page prints out. Kid is coloring happily. You\'re drinking coffee while it\'s still hot.',
    large: true,
  },
  {
    title: "Monday Classroom Activity",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF6B4A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c0 1.1 2.7 2 6 2s6-.9 6-2v-5" />
      </svg>
    ),
    before: "You're teaching ocean animals this week. You need 20 whale-themed coloring sheets. The free sites have 5 whale variants max — and 3 are blurry scans.",
    after: "You generate 20 unique whale coloring pages with different styles and difficulties. Print them in minutes. Lesson prep: done.",
    large: false,
  },
  {
    title: "Evening Wind-Down",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF6B4A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
    before: 'You love coloring to decompress after work. But every "adult coloring" site has the same 10 mandala templates you\'ve seen a hundred times.',
    after: 'You type "intricate Art Nouveau flower pattern with butterflies." Get a detailed, original line-art piece — looks hand-drawn, not template-generated.',
    large: false,
    fullWidth: true,
  },
];

export function UseCasesSection() {
  return (
    <section id="use-cases" className="section-padding">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="font-display text-[26px] sm:text-[36px] font-semibold leading-[1.2] tracking-[-0.01em] text-[#3D2C24]">
            Made for Real Life
          </h2>
        </div>

        {/* Bento grid: 2+1 layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-6">
          {useCases.map((uc) => {
            if (uc.fullWidth) {
              return (
                <Card key={uc.title} className="col-span-1 lg:col-span-2">
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#FFF9F2] flex items-center justify-center">
                          {uc.icon}
                        </div>
                        <h3 className="font-display text-xl font-semibold text-[#3D2C24]">
                          {uc.title}
                        </h3>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <span className="font-body text-xs font-semibold uppercase tracking-wider text-[#8C7A6E]">
                            Before
                          </span>
                          <p className="text-[15px] text-[#8C7A6E] mt-1 leading-relaxed">{uc.before}</p>
                        </div>
                        <div>
                          <span className="font-body text-xs font-semibold uppercase tracking-wider text-[#5B9A68]">
                            After
                          </span>
                          <p className="text-[15px] text-[#3D2C24] mt-1 leading-relaxed">{uc.after}</p>
                        </div>
                      </div>
                    </div>
                    <div className="w-full md:w-48 h-36 bg-[#FFF9F2] rounded-card border border-[#EBE0D5] flex items-center justify-center flex-shrink-0">
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#FFB630" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.6">
                        <path d="M12 2L2 7l10 5 10-5-10-5z" />
                        <path d="M2 17l10 5 10-5" />
                        <path d="M2 12l10 5 10-5" />
                      </svg>
                    </div>
                  </div>
                </Card>
              );
            }

            return (
              <Card key={uc.title}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#FFF9F2] flex items-center justify-center">
                    {uc.icon}
                  </div>
                  <h3 className="font-display text-xl font-semibold text-[#3D2C24]">
                    {uc.title}
                  </h3>
                </div>
                <div className="space-y-3">
                  <div>
                    <span className="font-body text-xs font-semibold uppercase tracking-wider text-[#8C7A6E]">
                      Before
                    </span>
                    <p className="text-[15px] text-[#8C7A6E] mt-1 leading-relaxed">{uc.before}</p>
                  </div>
                  <div>
                    <span className="font-body text-xs font-semibold uppercase tracking-wider text-[#5B9A68]">
                      After
                    </span>
                    <p className="text-[15px] text-[#3D2C24] mt-1 leading-relaxed">{uc.after}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
