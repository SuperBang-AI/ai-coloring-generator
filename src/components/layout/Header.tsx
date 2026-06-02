"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { trackEvent } from "@/lib/analytics";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "FAQ", href: "#faq" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = (label: string) => {
    trackEvent("nav_click", { item: label });
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FFF9F2]/95 backdrop-blur-sm border-b border-[#EBE0D5]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="/"
            className="flex items-center gap-2.5 font-display text-xl font-semibold text-[#FF6B4A] no-underline"
          >
            <svg width="28" height="28" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="28" cy="28" r="20" stroke="#FF6B4A" strokeWidth="3.5" fill="none" />
              <path
                d="M44 44 L56 56"
                stroke="#FF6B4A"
                strokeWidth="3.5"
                strokeLinecap="round"
              />
              <path
                d="M20 28 L24 36 L34 16"
                stroke="#FFB630"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
            <span className="hidden sm:inline">AI Coloring Generator</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => handleNavClick(link.label)}
                className="font-body text-[15px] font-medium text-[#8C7A6E] hover:text-[#FF6B4A] transition-colors no-underline"
              >
                {link.label}
              </a>
            ))}
            <Button
              href="#hero-input"
              variant="secondary"
              size="sm"
              eventName="header_cta_click"
            >
              Generate Free
            </Button>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 -mr-2 text-[#8C7A6E] hover:text-[#FF6B4A] transition-colors cursor-pointer"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {mobileOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="4" y1="6" x2="20" y2="6" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="18" x2="20" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <nav className="md:hidden pb-4 border-t border-[#EBE0D5] pt-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => handleNavClick(link.label)}
                className="font-body text-base font-medium text-[#8C7A6E] hover:text-[#FF6B4A] transition-colors px-2 py-1 no-underline"
              >
                {link.label}
              </a>
            ))}
            <Button
              href="#hero-input"
              variant="secondary"
              size="sm"
              className="w-full mt-2"
              eventName="mobile_header_cta_click"
            >
              Generate Free
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}
