"use client";
import ScrollReveal from "@/components/editorial/ScrollReveal";

export default function JoinCTA() {
  return (
    <section id="join" className="bg-gradient-to-b from-background to-blue-50">
      <div className="max-w-3xl mx-auto px-6 text-center py-20">
        <ScrollReveal>
          <span className="text-chapter-num font-sans font-extralight text-border select-none">11</span>
          <h2 className="font-sans font-bold text-heading text-3xl md:text-5xl -mt-12 mb-6">
            The future of education is<br />
            <span className="text-accent">measurable, personalized, and free.</span>
          </h2>
          <p className="text-muted text-lg mb-12 max-w-xl mx-auto">
            We are building the infrastructure to make world-class tutoring available to every
            human on Earth. Join the mission.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="#comparegpt"
              className="font-sans px-8 py-4 bg-cta text-white font-semibold rounded-full hover:bg-blue-700 transition-colors text-base shadow-lg shadow-blue-200"
            >
              Try CompareGPT Education
            </a>
            <a
              href="https://solveeverything.org"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans px-8 py-4 border-2 border-heading text-heading font-semibold rounded-full hover:bg-heading hover:text-white transition-colors text-base"
            >
              Read the Full Framework
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="bg-white rounded-2xl p-10 border border-border shadow-sm max-w-lg mx-auto">
            <h3 className="font-sans font-bold text-heading text-lg mb-2">Stay Updated</h3>
            <p className="font-sans text-sm text-muted mb-6">
              Get notified when we launch new features and publish research.
            </p>
            <form
              className="flex gap-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-3 border border-border rounded-lg font-sans text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-heading text-white font-sans font-semibold text-sm rounded-lg hover:bg-gray-800 transition-colors shrink-0"
              >
                Subscribe
              </button>
            </form>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm font-sans text-muted">
            <a href="https://comparegpt.io/education" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">CompareGPT</a>
            <span className="text-border">|</span>
            <a href="https://solveeverything.org" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">SolveEverything</a>
            <span className="text-border">|</span>
            <a href="https://platformai.org" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">PlatformAI</a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
