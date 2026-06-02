import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Disclaimer",
  description: "Important disclaimers about AI-generated coloring pages — quality, copyright, safety, and appropriate use.",
};

export default function AIDisclaimerPage() {
  return (
    <div className="min-h-screen bg-[#FFF9F2]">
      <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <a href="/" className="inline-flex items-center gap-2 font-display text-[#FF6B4A] font-semibold mb-8 no-underline hover:text-[#E55A3A] transition-colors">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back to Home
        </a>

        <h1 className="font-display text-[32px] sm:text-[40px] font-semibold text-[#3D2C24] mb-8">
          AI Disclaimer
        </h1>
        <p className="text-[#8C7A6E] mb-8">Last updated: June 2026</p>

        <div className="prose prose-lg max-w-none text-[#3D2C24] space-y-6">
          <h2 className="font-display text-2xl font-semibold mt-10 mb-4">AI-Generated Content</h2>
          <p>
            The coloring pages produced by the AI Coloring Page Generator are created
            using artificial intelligence models. Please be aware of the following:
          </p>

          <h3 className="font-display text-xl font-semibold mt-6 mb-2">Quality and Accuracy</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>AI-generated line art may contain imperfections, artifacts, or unexpected elements.</li>
            <li>Not every prompt will produce a usable coloring page. You may need to refine or retry prompts.</li>
            <li>Complex prompts may produce simpler-than-expected results.</li>
          </ul>

          <h3 className="font-display text-xl font-semibold mt-6 mb-2">Copyright and Ownership</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>AI models are trained on large datasets. Generated content may inadvertently resemble existing copyrighted works.</li>
            <li>Generated coloring pages are for personal, non-commercial use. Do not sell or distribute them as stock content.</li>
            <li>If you believe generated content infringes your copyright, contact us immediately.</li>
          </ul>

          <h3 className="font-display text-xl font-semibold mt-6 mb-2">Content Safety</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>We use content filters to prevent generation of inappropriate or harmful content.</li>
            <li>Filters are not perfect. Adult supervision is recommended when generating pages for children.</li>
            <li>We do not intentionally generate violent, sexual, or hateful content. Report issues to us.</li>
          </ul>

          <h3 className="font-display text-xl font-semibold mt-6 mb-2">No Professional Advice</h3>
          <p>
            This tool is for entertainment and creative purposes. It is not a substitute for professional art supplies, educational curriculum, or therapeutic treatment.
          </p>

          <h3 className="font-display text-xl font-semibold mt-6 mb-2">Transparency</h3>
          <p>
            We are transparent that our coloring pages are AI-generated. We encourage users to understand and embrace
            AI as a creative tool while being mindful of its limitations.
          </p>

          <h2 className="font-display text-2xl font-semibold mt-10 mb-4">Contact</h2>
          <p>
            Concerns about AI-generated content?{" "}
            <a href="mailto:hello@aicoloringgenerator.com" className="text-[#FF6B4A] underline">hello@aicoloringgenerator.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
