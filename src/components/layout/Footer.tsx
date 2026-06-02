import Link from "next/link";

const footerLinks = {
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
    { label: "Cookie Policy", href: "/cookie-policy" },
    { label: "Refund Policy", href: "/refund-policy" },
    { label: "AI Disclaimer", href: "/ai-disclaimer" },
  ],
  social: [
    { label: "Pinterest", href: "https://pinterest.com/aicoloringgen", external: true },
    { label: "X (Twitter)", href: "https://x.com/aicoloringgen", external: true },
    { label: "Reddit", href: "https://reddit.com/r/aicoloringgen", external: true },
  ],
};

export function Footer() {
  return (
    <footer className="bg-[#3D2C24] text-[#FFF9F2]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand column */}
          <div className="md:col-span-1">
            <a href="/" className="flex items-center gap-2.5 font-display text-xl font-semibold text-[#FFB630] no-underline mb-4">
              <svg width="28" height="28" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="28" cy="28" r="20" stroke="#FFB630" strokeWidth="3.5" fill="none" />
                <path d="M44 44 L56 56" stroke="#FFB630" strokeWidth="3.5" strokeLinecap="round" />
                <path d="M20 28 L24 36 L34 16" stroke="#FF6B4A" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
              AI Coloring Generator
            </a>
            <p className="text-sm text-[#8C7A6E] leading-relaxed mb-6">
              Free printable coloring pages, powered by AI.
              Built for parents, teachers &amp; coloring fans.
            </p>
            {/* Social links */}
            <div className="flex gap-4">
              {footerLinks.social.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#8C7A6E] hover:text-[#FFB630] transition-colors no-underline"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Legal links */}
          <div className="md:col-span-2">
            <h3 className="font-display text-lg font-semibold text-[#FFB630] mb-4">Legal</h3>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#8C7A6E] hover:text-[#FFB630] transition-colors no-underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#8C7A6E]/30 mt-10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8C7A6E]">
          <p>&copy; 2026 AI Coloring Page Generator. All rights reserved.</p>
          <p className="text-center sm:text-right">
            Not affiliated with ChatGPT, Midjourney, or any coloring book publisher.
          </p>
        </div>
      </div>
    </footer>
  );
}
