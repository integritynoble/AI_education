import ScrollReveal from "@/components/editorial/ScrollReveal";

const steps = [
  {
    num: "01",
    title: "Student Opens the Platform",
    desc: "A new student arrives. The AI begins with a warm, low-pressure conversation to understand their background, interests, and goals.",
    icon: "M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0",
  },
  {
    num: "02",
    title: "AI Assesses Current Knowledge",
    desc: "A short, adaptive pre-test maps the student's existing skills. No trick questions — just honest, calibrated measurement to establish a baseline.",
    icon: "M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25",
  },
  {
    num: "03",
    title: "Personalized Lesson Generated",
    desc: "Based on the cognitive profile, the AI generates a custom lesson plan. Soccer analogies for Jamal. Anime visuals for Maria. Each explanation is bespoke.",
    icon: "M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z",
  },
  {
    num: "04",
    title: "Smart Recitation & Practice",
    desc: "The student enters Smart Recitation mode — AI-supervised quizzing, spaced repetition, and real-time feedback. Powered by CompareGPT's study engine.",
    icon: "M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342",
  },
  {
    num: "05",
    title: "LG/H Tracked in Real-Time",
    desc: "Every session's Learning Gain per Hour is calculated. The teacher's dashboard shows skill gains, not just time spent. The AI optimizes relentlessly.",
    icon: "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z",
  },
  {
    num: "06",
    title: "Retention Floor Tests",
    desc: "Automated re-assessments at 30, 60, and 180 days verify the student still knows the material. The system intervenes if retention drops below the floor.",
    icon: "M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-background">
      <div className="max-w-3xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-chapter-num font-sans font-extralight text-border select-none">06</span>
            <h2 className="font-sans font-bold text-heading text-3xl md:text-4xl -mt-12">
              How It Works
            </h2>
            <p className="text-muted mt-4 text-lg">
              From first visit to verified mastery in six steps.
            </p>
          </div>
        </ScrollReveal>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

          <div className="space-y-8">
            {steps.map((step, i) => (
              <ScrollReveal key={i}>
                <div className="flex gap-6 items-start">
                  <div className="shrink-0 w-12 h-12 bg-white rounded-full border-2 border-accent flex items-center justify-center relative z-10">
                    <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={step.icon} />
                    </svg>
                  </div>
                  <div className="flex-1 bg-white rounded-xl p-6 border border-border shadow-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-sans text-xs font-bold text-accent">{step.num}</span>
                      <h3 className="font-sans font-bold text-heading text-base">{step.title}</h3>
                    </div>
                    <p className="text-muted font-sans text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <ScrollReveal>
          <div className="text-center mt-12">
            <a
              href="#comparegpt"
              className="inline-flex items-center gap-2 font-sans px-8 py-4 bg-cta text-white font-semibold rounded-full hover:bg-blue-700 transition-colors text-base"
            >
              Try It Now
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
              </svg>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
