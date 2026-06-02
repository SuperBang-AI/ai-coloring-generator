"use client";

import { useState, useEffect } from "react";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem("cookie-consent", "all");
    setVisible(false);
  };

  const acceptEssential = () => {
    localStorage.setItem("cookie-consent", "essential");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6 bg-[#3D2C24] shadow-lg">
      <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex-1 text-sm text-[#FFF9F2] leading-relaxed">
          We use cookies to analyze site traffic and deliver relevant ads. By clicking
          &ldquo;Accept All&rdquo; you consent to our use of cookies.
          Read our{" "}
          <a href="/cookie-policy" className="underline text-[#FFB630] hover:text-[#E5A020]">
            Cookie Policy
          </a>
          .
        </div>
        <div className="flex gap-3 flex-shrink-0">
          <button
            onClick={acceptEssential}
            className="px-5 py-2.5 text-sm font-semibold text-[#FFF9F2] border border-[#8C7A6E] rounded-btn hover:border-[#FFF9F2] transition-colors cursor-pointer"
          >
            Essential Only
          </button>
          <button
            onClick={acceptAll}
            className="px-5 py-2.5 text-sm font-semibold bg-[#FFB630] text-[#3D2C24] rounded-btn hover:bg-[#E5A020] transition-colors cursor-pointer"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}
