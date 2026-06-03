import type { Metadata } from "next";
import Script from "next/script";
import { Analytics } from "@/components/Analytics";
import { CookieConsent } from "@/components/ui/CookieConsent";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://aicoloringgenerator.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "AI Coloring Page Generator — Free Printable Pages in 10s",
    template: "%s | AI Coloring Page Generator",
  },
  description:
    "Generate custom printable coloring pages with AI in seconds. Better line quality than competitors, completely free, no signup needed. Perfect for parents, teachers & coloring fans.",
  keywords: [
    "ai coloring page generator",
    "free coloring pages",
    "printable coloring pages",
    "ai coloring book",
    "kids coloring pages",
    "generate coloring pages",
  ],
  openGraph: {
    type: "website",
    siteName: "AI Coloring Page Generator",
    title: "AI Coloring Page Generator — Type It. Print It. Color It.",
    description:
      "Free AI tool that turns any idea into a crisp, printable coloring page in 10 seconds. Sharper lines, no clutter, no signup.",
    url: siteUrl,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "AI Coloring Page Generator" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Coloring Page Generator — Type It. Print It. Color It.",
    description:
      "Free AI tool that turns any idea into a crisp, printable coloring page in 10 seconds. Sharper lines, no clutter, no signup.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          id="json-ld"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "FAQPage",
                  "mainEntity": [
                    {
                      "@type": "Question",
                      "name": "Is it really free?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. 5 free generations per day with no signup required. Register a free account and get 10/day. No credit card, no trial expiry, no hidden fees. We make money from ads — not from charging you."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Do I need to create an account?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "No. You can start generating coloring pages on the homepage immediately. Registration is optional and only gives you more daily generations (10 instead of 5)."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "What kind of coloring pages can I create?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Anything you can describe. Animals, fantasy creatures, vehicles, landscapes, holiday themes, mandalas, cartoon characters, flowers — if you can type it, we can generate a coloring page for it."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "How good is the quality compared to other AI coloring tools?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "We tuned our AI specifically for line art. That means sharper outlines, cleaner details, and fewer glitchy artifacts. Pages are designed to print well on standard home printers — no blurry edges, no broken lines."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Can I print the coloring pages?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Absolutely. Every page downloads as a high-quality PNG in standard paper ratio (A4 / US Letter). Print on any home printer, in black and white or color settings. It's the whole point."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Is this safe for kids to use?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "The tool is designed for adults (parents and teachers) to generate pages for kids. We have content filters to prevent inappropriate results. Kids should use the pages — adults should generate them."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "What's different about your AI compared to ChatGPT or Midjourney?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "General AI tools aren't tuned for coloring pages — they often produce gray shading, color artifacts, or messy outlines. We trained specifically for clean black-and-white line art that prints and colors beautifully."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Why would I use this instead of buying coloring books?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Coloring books cost $5-15 each, run out of pages, and lock you into one theme. This tool is free, never runs out, and generates exactly what your kid is into right now — not what a publisher decided last year."
                      }
                    }
                  ]
                },
                {
                  "@type": "WebApplication",
                  "name": "AI Coloring Page Generator",
                  "description": "Generate custom printable coloring pages with AI in seconds. Better line quality than competitors, completely free, no signup needed. Perfect for parents, teachers & coloring fans.",
                  "url": siteUrl,
                  "applicationCategory": "MultimediaApplication",
                  "operatingSystem": "All",
                  "browserRequirements": "Requires JavaScript"
                }
              ]
            })
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&family=Nunito+Sans:ital,opsz,wght@0,6..12,400;0,6..12,500;0,6..12,600;0,6..12,700;1,6..12,400&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="canonical" href={siteUrl} />
      </head>
      <body className="min-h-screen bg-[#FFF9F2] text-[#3D2C24] antialiased">
        {children}
        <Analytics />
        <CookieConsent />
      </body>
    </html>
  );
}
