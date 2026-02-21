export default function Footer() {
  return (
    <footer className="bg-heading text-gray-400 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-sans font-bold text-white text-lg mb-4">edu.platformai.org</h3>
            <p className="text-sm leading-relaxed font-sans">
              Industrialize and personalize pedagogy to democratize access to world-class teaching.
            </p>
          </div>
          <div>
            <h4 className="font-sans font-semibold text-white text-sm mb-4 uppercase tracking-wider">Links</h4>
            <div className="flex flex-col gap-2 font-sans text-sm">
              <a href="https://solveeverything.org" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">SolveEverything.org</a>
              <a href="https://comparegpt.io/education" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">CompareGPT Education</a>
              <a href="https://platformai.org" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">PlatformAI</a>
            </div>
          </div>
          <div>
            <h4 className="font-sans font-semibold text-white text-sm mb-4 uppercase tracking-wider">The Framework</h4>
            <div className="flex flex-col gap-2 font-sans text-sm">
              <a href="#targeting-system" className="hover:text-white transition-colors">Targeting System</a>
              <a href="#maturity-model" className="hover:text-white transition-colors">Maturity Model</a>
              <a href="#guardrails" className="hover:text-white transition-colors">Guardrails</a>
              <a href="#comparegpt" className="hover:text-white transition-colors">Try CompareGPT</a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center font-sans text-xs text-gray-500">
          &copy; {new Date().getFullYear()} PlatformAI. The future of education is measurable, personalized, and free.
        </div>
      </div>
    </footer>
  );
}
