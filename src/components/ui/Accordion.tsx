"use client";

import { useState, useRef, useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
}

export function Accordion({ items, className = "" }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggle = (index: number) => {
    const newIndex = openIndex === index ? null : index;
    setOpenIndex(newIndex);
    if (newIndex !== null) {
      trackEvent("faq_open", { question: items[index].question });
    }
  };

  return (
    <div className={`divide-y divide-[#EBE0D5] border-y border-[#EBE0D5] ${className}`}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index}>
            <button
              onClick={() => toggle(index)}
              className="w-full flex items-center justify-between py-5 px-2 text-left cursor-pointer group"
              aria-expanded={isOpen}
            >
              <span className="font-display text-lg font-semibold text-[#3D2C24] pr-4">
                {item.question}
              </span>
              <span
                className={`
                  flex-shrink-0 w-7 h-7 rounded-full border-2 flex items-center justify-center
                  transition-all duration-200
                  ${isOpen
                    ? "border-[#FF6B4A] bg-[#FF6B4A] text-white"
                    : "border-[#EBE0D5] text-[#8C7A6E] group-hover:border-[#FF6B4A]"
                  }
                `}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  className={`transition-transform duration-200 ${isOpen ? "rotate-45" : ""}`}
                >
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </span>
            </button>
            <div
              ref={(el) => { contentRefs.current[index] = el; }}
              className="overflow-hidden transition-all duration-300 ease-in-out"
              style={{
                maxHeight: isOpen ? (contentRefs.current[index]?.scrollHeight || 500) + "px" : "0px",
                opacity: isOpen ? 1 : 0,
              }}
              aria-hidden={!isOpen}
            >
              <div className="pb-5 px-2 text-[#3D2C24] leading-relaxed whitespace-pre-line">
                {item.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
