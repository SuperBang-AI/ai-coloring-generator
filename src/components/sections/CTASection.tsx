"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/Button";

export function CTASection() {
  const [prompt, setPrompt] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;
    // Scroll to hero input and populate it
    const heroInput = document.getElementById("hero-input") as HTMLInputElement;
    if (heroInput) {
      heroInput.value = prompt.trim();
      heroInput.focus();
      heroInput.scrollIntoView({ behavior: "smooth", block: "center" });
      // Trigger input event for React state
      const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
        window.HTMLInputElement.prototype,
        "value"
      )?.set;
      nativeInputValueSetter?.call(heroInput, prompt.trim());
      heroInput.dispatchEvent(new Event("input", { bubbles: true }));
    }
  };

  return (
    <section className="section-padding border-t border-dashed border-[#EBE0D5]">
      <div className="max-w-[600px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-display text-[26px] sm:text-[36px] font-semibold leading-[1.2] tracking-[-0.01em] text-[#3D2C24] mb-4">
          Generate My Coloring Page — Free
        </h2>

        <p className="font-body text-base sm:text-lg text-[#8C7A6E] mb-8 leading-relaxed">
          No signup. No limits on creativity. Just type and print.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="flex flex-col sm:flex-row gap-3 mb-4">
            <input
              ref={inputRef}
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Describe what you want to color"
              className="flex-1 min-h-[56px] px-5 py-4 bg-[#FFFDFA] border-2 border-[#EBE0D5] rounded-btn font-body text-base text-[#3D2C24] placeholder:text-[#8C7A6E] transition-colors duration-200 focus:outline-none focus:border-[#FF6B4A] focus:shadow-[0_0_0_3px_rgba(255,107,74,0.15)]"
              style={{ fontSize: "16px" }}
            />
            <Button type="submit" variant="primary" className="sm:flex-shrink-0">
              ✨ Generate My Coloring Page
            </Button>
          </div>
        </form>

        <p className="text-sm text-[#8C7A6E]">
          No signup. No limits on creativity.
        </p>
      </div>
    </section>
  );
}
