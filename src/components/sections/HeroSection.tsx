"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/Button";
import { DifficultySelector } from "@/components/ui/DifficultySelector";
import { trackEvent } from "@/lib/analytics";
import { getClientId } from "@/lib/client-id";

interface UsageInfo {
  remaining: number;
  dailyLimit: number;
  usedToday: number;
  resetAt?: string;
}

export function HeroSection() {
  const [prompt, setPrompt] = useState("");
  const [style, setStyle] = useState("medium");
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState("");
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [remaining, setRemaining] = useState<number | null>(null);
  const [dailyLimit, setDailyLimit] = useState<number>(5);
  const inputRef = useRef<HTMLInputElement>(null);
  const resultRef = useRef<HTMLDivElement>(null);

  // Fetch usage info on mount
  const fetchUsage = useCallback(async () => {
    try {
      const res = await fetch(`/api/usage?clientId=${encodeURIComponent(getClientId())}`);
      if (res.ok) {
        const data: UsageInfo = await res.json();
        setRemaining(data.remaining ?? null);
        setDailyLimit(data.dailyLimit ?? 5);
      } else {
        setRemaining(null);
      }
    } catch {
      // Silently fail — usage display is non-critical
      setRemaining(null);
    }
  }, []);

  useEffect(() => {
    fetchUsage();
  }, [fetchUsage]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = prompt.trim();
    if (!trimmed) {
      setError("Please describe what you'd like to color.");
      inputRef.current?.focus();
      return;
    }
    if (trimmed.length < 3) {
      setError("Please enter at least 3 characters.");
      return;
    }

    setError("");
    setImageUrl(null);
    setIsGenerating(true);
    trackEvent("tool_submit", { prompt_length: trimmed.length, style });

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: trimmed, style, clientId: getClientId() }),
      });

      // Check if response is JSON (error) or binary (image)
      const contentType = res.headers.get("Content-Type") || "";

      if (!res.ok) {
        if (contentType.includes("application/json")) {
          const data = await res.json();
          if (data.remaining !== undefined) {
            setRemaining(data.remaining);
          }
          throw new Error(data.error || "Generation failed. Please try again.");
        } else {
          throw new Error(`Server error (${res.status}). Please try again.`);
        }
      }

      if (contentType.includes("image/")) {
        // Success: got an image back
        const blob = await res.blob();
        const objectUrl = URL.createObjectURL(blob);
        setImageUrl(objectUrl);

        // Update remaining from header
        const remainingHeader = res.headers.get("X-Remaining");
        if (remainingHeader !== null) {
          setRemaining(parseInt(remainingHeader, 10));
        }

        trackEvent("tool_result_view", { success: true });

        // Scroll to result after a brief delay
        setTimeout(() => {
          resultRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 100);
      } else {
        throw new Error("Unexpected response from server. Please try again.");
      }
    } catch (err) {
      const message = err instanceof Error ? err.message : "Something went wrong. Please try again.";
      setError(message);
      trackEvent("tool_error", { error: message });
    } finally {
      setIsGenerating(false);
    }
  };

  const handleDownload = () => {
    if (!imageUrl) return;
    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = `coloring-page-${Date.now()}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    trackEvent("tool_download", {});
  };

  const handleGenerateAnother = () => {
    setImageUrl(null);
    setError("");
    setPrompt("");
    inputRef.current?.focus();
    window.scrollTo({ top: 0, behavior: "smooth" });
    // Refresh usage count
    fetchUsage();
  };

  return (
    <section className="pt-20 sm:pt-30 pb-16 sm:pb-20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column — copy + interaction */}
          <div className="order-2 lg:order-1">
            <span className="inline-block font-body text-sm font-semibold text-[#FF6B4A] mb-4 tracking-wide">
              🖍️ AI Coloring Page Generator
            </span>

            <h1 className="font-display text-[32px] sm:text-[40px] lg:text-[52px] font-semibold leading-[1.15] tracking-[-0.02em] text-[#3D2C24] mb-5">
              Coloring Pages in 10 Seconds — Free, No Signup
            </h1>

            <p className="font-body text-base sm:text-lg text-[#8C7A6E] leading-relaxed mb-8 max-w-[540px]">
              Describe what your kid loves. AI draws a clean, printable coloring page instantly.
              Better lines than other tools, zero ad clutter.
            </p>

            {/* Generator form */}
            <form onSubmit={handleSubmit} className="mb-6">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1 relative">
                  <input
                    ref={inputRef}
                    id="hero-input"
                    type="text"
                    value={prompt}
                    onChange={(e) => {
                      setPrompt(e.target.value);
                      if (error) setError("");
                    }}
                    placeholder="e.g. friendly T-Rex with a birthday hat"
                    disabled={isGenerating}
                    className="w-full min-h-[56px] px-5 py-4 bg-[#FFFDFA] border-2 border-[#EBE0D5] rounded-btn font-body text-base text-[#3D2C24] placeholder:text-[#8C7A6E] transition-colors duration-200 focus:outline-none focus:border-[#FF6B4A] focus:shadow-[0_0_0_3px_rgba(255,107,74,0.15)]"
                    style={{ fontSize: "16px" }}
                  />
                </div>
                <Button
                  type="submit"
                  eventName="hero_cta_click"
                  disabled={isGenerating}
                  className="sm:flex-shrink-0"
                >
                  {isGenerating ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeDasharray="32" strokeLinecap="round" className="opacity-30" />
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeDasharray="32" strokeLinecap="round" strokeDashoffset="8" />
                      </svg>
                      Generating…
                    </span>
                  ) : (
                    "✨ Generate My Coloring Page — Free"
                  )}
                </Button>
              </div>

              {error && (
                <div className="mt-3 p-3 bg-[#FFF5F5] border border-[#FFDADA] rounded-btn">
                  <p className="text-sm text-[#D9434E] font-medium">{error}</p>
                </div>
              )}
            </form>

            {/* Difficulty selector */}
            <div className="mb-6">
              <p className="font-body text-sm font-semibold text-[#8C7A6E] mb-2.5">Choose style:</p>
              <DifficultySelector onChange={setStyle} />
            </div>

            {/* Trust line / remaining usage */}
            <div className="flex flex-col gap-1.5">
              <p className="flex items-center gap-2 font-body text-sm text-[#8C7A6E]">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#5B9A68" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                No signup. No credit card. Download print-ready PNG instantly.
              </p>
              {remaining !== null && (
                <p className="flex items-center gap-1.5 font-body text-xs text-[#8C7A6E] ml-6">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                  <span>
                    <strong className="text-[#FF6B4A]">{remaining}</strong> free generations left today
                    {dailyLimit > 0 && <> (out of {dailyLimit})</>}
                  </span>
                </p>
              )}
            </div>
          </div>

          {/* Right column — hero visual */}
          <div className="order-1 lg:order-2">
            <div className="relative max-w-[500px] mx-auto">
              {/* Main preview frame */}
              <div className="bg-[#FFFDFA] border-2 border-[#EBE0D5] rounded-[20px] overflow-hidden shadow-[0_1px_3px_rgba(61,44,36,0.06)]">
                <div className="aspect-[16/10] bg-gradient-to-br from-[#FFF9F2] to-[#FFFDFA] flex items-center justify-center p-6">
                  {/* Placeholder line-art illustration */}
                  <div className="w-full max-w-[300px]">
                    <svg viewBox="0 0 400 280" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                      {/* Castle */}
                      <path d="M120 200 L120 140 L100 140 L100 120 L140 120 L140 140 L130 140 L130 200" stroke="#3D2C24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                      <path d="M100 120 L80 100 L60 120" stroke="#3D2C24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                      <path d="M140 120 L160 100 L180 120" stroke="#3D2C24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                      <rect x="90" y="160" width="15" height="15" rx="2" stroke="#3D2C24" strokeWidth="2" fill="none" />
                      <rect x="125" y="160" width="15" height="15" rx="2" stroke="#3D2C24" strokeWidth="2" fill="none" />
                      {/* Flag */}
                      <line x1="160" y1="80" x2="160" y2="120" stroke="#3D2C24" strokeWidth="2" />
                      <path d="M160 80 L190 90 L160 100" stroke="#3D2C24" strokeWidth="2" strokeLinejoin="round" fill="none" />

                      {/* Dragon */}
                      <path d="M260 200 C260 170, 280 160, 290 160 C300 160, 310 165, 310 175 C310 165, 320 160, 330 160 C340 160, 350 170, 350 190 L350 200" stroke="#3D2C24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                      <circle cx="280" cy="155" r="4" stroke="#3D2C24" strokeWidth="2" fill="none" />
                      <path d="M270 155 L280 160" stroke="#3D2C24" strokeWidth="2" strokeLinecap="round" fill="none" />
                      {/* Fire breath */}
                      <path d="M245 175 C235 172, 230 168, 225 165" stroke="#FFB630" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.7" />
                      <path d="M245 178 C232 178, 225 174, 220 170" stroke="#FF6B4A" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.5" />

                      {/* Rainbow */}
                      <path d="M60 250 C100 210, 200 210, 300 260" stroke="#FF6B4A" strokeWidth="4" fill="none" opacity="0.15" />
                      <path d="M65 255 C105 218, 200 218, 297 265" stroke="#FFB630" strokeWidth="4" fill="none" opacity="0.15" />
                      <path d="M70 260 C110 226, 200 226, 293 270" stroke="#5B9A68" strokeWidth="4" fill="none" opacity="0.15" />

                      {/* Ground line */}
                      <line x1="30" y1="200" x2="370" y2="200" stroke="#3D2C24" strokeWidth="2.5" strokeLinecap="round" opacity="0.5" />

                      {/* Small flowers */}
                      <circle cx="80" cy="210" r="5" stroke="#3D2C24" strokeWidth="1.5" fill="none" />
                      <circle cx="80" cy="210" r="2" stroke="#3D2C24" strokeWidth="1.5" fill="none" />
                      <circle cx="200" cy="215" r="5" stroke="#3D2C24" strokeWidth="1.5" fill="none" />
                      <circle cx="200" cy="215" r="2" stroke="#3D2C24" strokeWidth="1.5" fill="none" />
                      <circle cx="340" cy="212" r="5" stroke="#3D2C24" strokeWidth="1.5" fill="none" />
                      <circle cx="340" cy="212" r="2" stroke="#3D2C24" strokeWidth="1.5" fill="none" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Crayon decorations */}
              <div className="flex justify-center gap-3 mt-4">
                <div className="w-3 h-12 rounded-full bg-[#FF6B4A] opacity-80 -rotate-12" title="crayon" />
                <div className="w-3 h-12 rounded-full bg-[#FFB630] opacity-80 rotate-6" title="crayon" />
                <div className="w-3 h-12 rounded-full bg-[#5B9A68] opacity-80 -rotate-6" title="crayon" />
                <div className="w-3 h-12 rounded-full bg-[#E55A3A] opacity-80 rotate-12" title="crayon" />
              </div>
            </div>
          </div>
        </div>

        {/* ─── Result Display ─── */}
        {imageUrl && (
          <div ref={resultRef} className="mt-12 max-w-[800px] mx-auto">
            <div className="bg-[#FFFDFA] border-2 border-[#FFB630] rounded-[20px] overflow-hidden shadow-[0_2px_16px_rgba(255,182,48,0.15)]">
              {/* Image display */}
              <div className="bg-white border-b border-[#EBE0D5] p-4 sm:p-8 flex items-center justify-center">
                <img
                  src={imageUrl}
                  alt="Generated coloring page"
                  className="max-w-full h-auto max-h-[600px] object-contain"
                  style={{ imageRendering: "auto" }}
                />
              </div>

              {/* Action bar */}
              <div className="p-4 sm:p-6 flex flex-col sm:flex-row items-center gap-3 bg-[#FFF9F2]">
                <Button
                  onClick={handleDownload}
                  eventName="result_download"
                  className="w-full sm:w-auto"
                >
                  <span className="flex items-center gap-2">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                    Download PNG
                  </span>
                </Button>

                <button
                  onClick={handleGenerateAnother}
                  className="font-body text-sm font-semibold text-[#FF6B4A] underline underline-offset-[3px] hover:text-[#E55A3A] transition-colors px-4 py-2"
                >
                  Generate Another One
                </button>

                {/* Remaining indicator */}
                {remaining !== null && (
                  <div className="sm:ml-auto font-body text-xs text-[#8C7A6E]">
                    <strong className="text-[#FF6B4A]">{remaining}</strong> free generations left today
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
