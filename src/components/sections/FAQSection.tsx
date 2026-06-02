import { Accordion } from "@/components/ui/Accordion";

const faqItems = [
  {
    question: "Is it really free?",
    answer:
      "Yes. 5 free generations per day with no signup required. Register a free account and get 10/day. No credit card, no trial expiry, no hidden fees. We make money from ads — not from charging you.",
  },
  {
    question: "Do I need to create an account?",
    answer:
      "No. You can start generating coloring pages on the homepage immediately. Registration is optional and only gives you more daily generations (10 instead of 5).",
  },
  {
    question: "What kind of coloring pages can I create?",
    answer:
      "Anything you can describe. Animals, fantasy creatures, vehicles, landscapes, holiday themes, mandalas, cartoon characters, flowers — if you can type it, we can generate a coloring page for it.",
  },
  {
    question: "How good is the quality compared to other AI coloring tools?",
    answer:
      "We tuned our AI specifically for line art. That means sharper outlines, cleaner details, and fewer glitchy artifacts. Pages are designed to print well on standard home printers — no blurry edges, no broken lines.",
  },
  {
    question: "Can I print the coloring pages?",
    answer:
      "Absolutely. Every page downloads as a high-quality PNG in standard paper ratio (A4 / US Letter). Print on any home printer, in black and white or color settings. It's the whole point.",
  },
  {
    question: "Is this safe for kids to use?",
    answer:
      "The tool is designed for adults (parents and teachers) to generate pages for kids. We have content filters to prevent inappropriate results. Kids should use the pages — adults should generate them.",
  },
  {
    question: "What's different about your AI compared to ChatGPT or Midjourney?",
    answer:
      "General AI tools aren't tuned for coloring pages — they often produce gray shading, color artifacts, or messy outlines. We trained specifically for clean black-and-white line art that prints and colors beautifully.",
  },
  {
    question: "Why would I use this instead of buying coloring books?",
    answer:
      "Coloring books cost $5-15 each, run out of pages, and lock you into one theme. This tool is free, never runs out, and generates exactly what your kid is into right now — not what a publisher decided last year.",
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="section-padding">
      <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="font-display text-[26px] sm:text-[36px] font-semibold leading-[1.2] tracking-[-0.01em] text-[#3D2C24]">
            Frequently Asked Questions
          </h2>
        </div>

        <Accordion items={faqItems} />
      </div>
    </section>
  );
}
