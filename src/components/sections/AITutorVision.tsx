import ScrollReveal from "@/components/editorial/ScrollReveal";

const capabilities = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    title: "Cognitive Profiling",
    desc: "Understands each student's unique cognitive profile: language skills, interests, and preferred learning style.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
    title: "Contextual Analogies",
    desc: "Soccer analogies for sports fans. Anime illustrations for visual learners. Music theory for musicians. Every explanation is bespoke.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" />
      </svg>
    ),
    title: "Global Research Lab",
    desc: "A/B tests teaching methods in real-time across millions of learners to discover exactly what works best for each type of brain.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.331 0 4.512.89 6.042 2.36M12 6.042a8.967 8.967 0 0112-2.28c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18c-2.331 0-4.512.89-6.042 2.36" />
      </svg>
    ),
    title: "Bespoke Content Generation",
    desc: "Generates millions of custom explanations, practice problems, lesson plans, and exams — for a billion students simultaneously.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582" />
      </svg>
    ),
    title: "Zero Marginal Cost",
    desc: "Makes a world-class personalized tutor available to every human on Earth for essentially zero cost. Education as a public utility.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    title: "Continuous Improvement",
    desc: "Every interaction feeds back into the system. The AI gets better at teaching every student, every day, automatically.",
  },
];

export default function AITutorVision() {
  return (
    <section id="vision" className="bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-chapter-num font-sans font-extralight text-border select-none">05</span>
            <h2 className="font-sans font-bold text-heading text-3xl md:text-4xl -mt-12">
              The AI Tutor
            </h2>
            <p className="text-muted mt-4 text-lg">
              Not a chatbot. A personalized, predictive, world-class teaching agent.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <blockquote className="border-l-4 border-accent pl-6 py-2 my-10 italic text-muted text-lg">
            &ldquo;The AI tutor is not a simple Q&A bot. It is an agent that acts as a personalized
            and predictive academic and life-skills teacher for every student.&rdquo;
            <span className="block mt-2 not-italic text-sm font-sans font-medium">
              &mdash; <a href="https://solveeverything.org" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">SolveEverything.org</a>
            </span>
          </blockquote>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6 my-12">
          {capabilities.map((cap, i) => (
            <ScrollReveal key={i}>
              <div className="bg-gray-50 rounded-xl p-6 border border-border h-full">
                <div className="text-accent mb-4">{cap.icon}</div>
                <h3 className="font-sans font-bold text-heading text-base mb-2">{cap.title}</h3>
                <p className="text-sm text-muted font-sans leading-relaxed">{cap.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="bg-gradient-to-r from-blue-50 to-emerald-50 rounded-2xl p-8 text-center my-12">
            <p className="font-serif text-lg text-foreground">
              Think: Neal Stephenson&apos;s <em>&ldquo;The Diamond Age: A Young Lady&apos;s Illustrated Primer&rdquo;</em>&nbsp;&mdash;
              a book that teaches, adapts, and grows with its reader. Except this one is real,
              and it&apos;s for every child on Earth.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
