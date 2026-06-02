export const dynamic = "force-static";

export default function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://aicoloringgenerator.com";

  const pages = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 1.0 },
    { url: `${baseUrl}/privacy-policy`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.3 },
    { url: `${baseUrl}/terms-of-service`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.3 },
    { url: `${baseUrl}/cookie-policy`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.3 },
    { url: `${baseUrl}/refund-policy`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.3 },
    { url: `${baseUrl}/ai-disclaimer`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.3 },
  ];

  return pages;
}
