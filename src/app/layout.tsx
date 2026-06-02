import type { Metadata } from "next";
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
