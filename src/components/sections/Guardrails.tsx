import ScrollReveal from "@/components/editorial/ScrollReveal";
import AlphaBox from "@/components/editorial/AlphaBox";
import GlossaryTerm from "@/components/editorial/GlossaryTerm";

const guardrails = [
  {
    title: "Right of Abstention",
    icon: "M15.75 5.25v13.5m-7.5-13.5v13.5",
    desc: "The student can pause or opt out of AI instruction at any time. No lock-in. No pressure. The human always has the final say over their own learning.",
    color: "border-t-accent",
  },
  {
    title: "Human-in-the-Loop Override",
    icon: "M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0",
    desc: "Teachers remain final decision-makers for placement, advancement, and intervention. AI recommends; humans decide. The teacher's role shifts from instructor to mentor and guardian.",
    color: "border-t-lgh-high",
  },
  {
    title: "Parental Transparency",
    icon: "M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z M15 12a3 3 0 11-6 0 3 3 0 016 0z",
    desc: "Real-time dashboards showing parents exactly what the AI taught, what it observed about their child, and what it recommended. No black boxes. Full visibility.",
    color: "border-t-transition",
  },
];

export default function Guardrails() {
  return (
    <section id="guardrails" className="bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-chapter-num font-sans font-extralight text-border select-none">09</span>
            <h2 className="font-sans font-bold text-heading text-3xl md:text-4xl -mt-12">
              Guardrails & Safety
            </h2>
            <p className="text-muted mt-4 text-lg">
              Power without accountability is dangerous. Every system needs brakes.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6 my-12">
          {guardrails.map((g, i) => (
            <ScrollReveal key={i}>
              <div className={`bg-white rounded-xl p-8 border border-border border-t-4 ${g.color} shadow-sm h-full`}>
                <div className="w-14 h-14 bg-gray-50 rounded-xl flex items-center justify-center mb-5">
                  <svg className="w-7 h-7 text-heading" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={g.icon} />
                  </svg>
                </div>
                <h3 className="font-sans font-bold text-heading text-lg mb-3">{g.title}</h3>
                <p className="text-muted font-sans text-sm leading-relaxed">{g.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="max-w-reading mx-auto">
            <h3 className="font-sans font-bold text-heading text-xl mb-4 mt-12">
              <GlossaryTerm term="DR-AIS">Decision Records for AI Systems</GlossaryTerm>
            </h3>
            <p className="mb-4">
              Every decision the AI makes about a student&nbsp;&mdash; from selecting a lesson to recommending
              advancement&nbsp;&mdash; is recorded in a permanent, immutable log. These <GlossaryTerm term="DR-AIS" />
              {" "}records ensure that:
            </p>
            <ul className="space-y-3 font-sans text-base ml-4">
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1.5 shrink-0">&#9679;</span>
                <span>Every algorithmic decision can be audited after the fact</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1.5 shrink-0">&#9679;</span>
                <span>Bias can be detected and corrected through retrospective analysis</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1.5 shrink-0">&#9679;</span>
                <span>Parents and regulators have a verifiable trail of AI behavior</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1.5 shrink-0">&#9679;</span>
                <span>The system can be held accountable to the outcomes it produces</span>
              </li>
            </ul>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <AlphaBox audience="Parents">
            You will always see exactly what the AI taught, what it observed, and what it
            recommended for your child. No black boxes. No hidden algorithms. Full transparency
            is not optional&nbsp;&mdash; it is a design requirement.
          </AlphaBox>
        </ScrollReveal>
      </div>
    </section>
  );
}
