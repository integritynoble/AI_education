"use client";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-background" />

      {/* Decorative grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(#1e293b 1px, transparent 1px), linear-gradient(90deg, #1e293b 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="font-sans text-sm font-semibold text-accent tracking-widest uppercase mb-6 opacity-0 animate-[fadeInUp_0.6s_0.2s_forwards]">
          Moonshot 4
        </div>

        <h1 className="font-sans font-bold text-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-8 opacity-0 animate-[fadeInUp_0.8s_0.4s_forwards]">
          AI-Empowered<br />
          <span className="text-accent">Education for All</span>
        </h1>

        <p className="font-serif text-xl md:text-2xl text-muted max-w-2xl mx-auto mb-12 opacity-0 animate-[fadeInUp_0.8s_0.6s_forwards]">
          Industrialize and personalize pedagogy to democratize access to world-class teaching.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-[fadeInUp_0.8s_0.8s_forwards]">
          <a
            href="#targeting-system"
            className="font-sans px-8 py-4 bg-cta text-white font-semibold rounded-full hover:bg-blue-700 transition-colors text-base"
          >
            Explore the Framework
          </a>
          <a
            href="#comparegpt"
            className="font-sans px-8 py-4 border-2 border-heading text-heading font-semibold rounded-full hover:bg-heading hover:text-white transition-colors text-base"
          >
            Try It Live
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-[fadeInUp_0.8s_1.2s_forwards]">
          <div className="w-6 h-10 border-2 border-muted rounded-full flex items-start justify-center p-1.5">
            <div className="w-1.5 h-3 bg-muted rounded-full animate-bounce" />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
