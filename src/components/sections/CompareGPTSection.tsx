import ScrollReveal from "@/components/editorial/ScrollReveal";

export default function CompareGPTSection() {
  return (
    <section id="comparegpt" className="bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="text-chapter-num font-sans font-extralight text-border select-none">08</span>
            <h2 className="font-sans font-bold text-heading text-3xl md:text-4xl -mt-12">
              CompareGPT Education
            </h2>
            <p className="text-muted mt-4 text-lg max-w-2xl mx-auto">
              Experience AI-powered education. Compare AI models, use Smart Recitation, and see
              personalized learning in action.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="bg-white rounded-2xl shadow-lg border border-border overflow-hidden">
            {/* Toolbar */}
            <div className="bg-heading px-6 py-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <span className="font-sans text-xs text-gray-400 ml-2">comparegpt.io/education</span>
              </div>
              <a
                href="/practice"
                className="font-sans text-xs text-accent hover:text-blue-400 transition-colors"
              >
                Open Full Screen &#8599;
              </a>
            </div>

            {/* Iframe */}
            <div className="relative" style={{ height: "70vh", minHeight: "500px" }}>
              <iframe
                src="https://comparegpt.io/education"
                className="w-full h-full border-0"
                allow="clipboard-write"
                loading="lazy"
                title="CompareGPT Education"
              />
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {[
              {
                title: "Smart Recitation",
                desc: "AI-supervised quizzing and Q&A on uploaded study materials. Spaced repetition built in.",
              },
              {
                title: "Model Comparison",
                desc: "Side-by-side AI model comparison. Find which model explains concepts best for your brain.",
              },
              {
                title: "Progress Tracking",
                desc: "Track your study progress across sessions. See your LG/H improve over time.",
              },
            ].map((card, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-border text-center">
                <h3 className="font-sans font-bold text-heading text-base mb-2">{card.title}</h3>
                <p className="font-sans text-sm text-muted">{card.desc}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
