import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Practice | CompareGPT Education",
  description: "Full-screen CompareGPT Education experience. Smart Recitation, Model Comparison, and AI-powered study tools.",
};

export default function PracticePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Minimal header */}
      <header className="bg-heading px-6 py-3 flex items-center justify-between">
        <a href="/" className="font-sans font-bold text-white text-sm hover:text-gray-300 transition-colors">
          &#8592; edu.platformai.org
        </a>
        <span className="font-sans text-xs text-gray-400">CompareGPT Education</span>
      </header>

      {/* Full-screen iframe */}
      <iframe
        src="https://comparegpt.io/education"
        className="w-full border-0"
        style={{ height: "calc(100vh - 48px)" }}
        allow="clipboard-write"
        title="CompareGPT Education - Full Experience"
      />
    </div>
  );
}
