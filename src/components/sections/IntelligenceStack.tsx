"use client";
import { useState } from "react";
import ScrollReveal from "@/components/editorial/ScrollReveal";
import AlphaBox from "@/components/editorial/AlphaBox";

const layers = [
  { num: 9, name: "Distribution", desc: "Scale as a reliable public utility. Every student, everywhere, always-on.", color: "bg-emerald-500" },
  { num: 8, name: "Governance & Incentives", desc: "Payment tied to verified results. Compute Escrow: funds locked until LG/H benchmarks clear.", color: "bg-emerald-400" },
  { num: 7, name: "Verification & Red Teaming", desc: "Independent testing for fairness, safety, and bias. Blinded clears prevent gaming.", color: "bg-teal-500" },
  { num: 6, name: "Actuation", desc: "Delivering instruction via the best available interface: tablet, AR glasses, VR, voice.", color: "bg-cyan-500" },
  { num: 5, name: "Model Layer", desc: "AI tutor personalized to each learner's cognitive profile, interests, and language.", color: "bg-blue-500" },
  { num: 4, name: "Targeting System", desc: "LG/H + Retention Floors + Guardrails. The measurement harness that makes everything accountable.", color: "bg-accent", highlight: true },
  { num: 3, name: "Observability", desc: "Real-time student data streams showing progress, struggles, and breakthroughs as they happen.", color: "bg-indigo-500" },
  { num: 2, name: "Task Taxonomy", desc: "Breaking education into measurable micro-skills. Every concept becomes a testable unit.", color: "bg-violet-500" },
  { num: 1, name: "Purpose & Payoff", desc: "Quantified learning goals. Not vague mission statements — concrete, measurable outcomes.", color: "bg-purple-500" },
];

export default function IntelligenceStack() {
  const [expanded, setExpanded] = useState<number | null>(4);

  return (
    <section id="intelligence-stack" className="bg-background">
      <div className="max-w-3xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-chapter-num font-sans font-extralight text-border select-none">04</span>
            <h2 className="font-sans font-bold text-heading text-3xl md:text-4xl -mt-12">
              The Industrial Intelligence Stack
            </h2>
            <p className="text-muted mt-4 text-lg">
              Nine integrated layers required for AI to industrialize education.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="space-y-2">
            {layers.map((layer) => (
              <button
                key={layer.num}
                onClick={() => setExpanded(expanded === layer.num ? null : layer.num)}
                className={`stack-layer w-full text-left rounded-xl border transition-all ${
                  layer.highlight ? "border-accent" : "border-border"
                } ${expanded === layer.num ? "bg-white shadow-md" : "bg-white hover:bg-gray-50"}`}
              >
                <div className="flex items-center gap-4 px-6 py-4">
                  <div className={`w-10 h-10 rounded-lg ${layer.color} flex items-center justify-center font-sans font-bold text-white text-sm shrink-0`}>
                    {layer.num}
                  </div>
                  <div className="font-sans font-semibold text-heading text-base flex-1">
                    {layer.name}
                    {layer.highlight && (
                      <span className="ml-2 text-xs font-bold text-accent bg-blue-50 px-2 py-0.5 rounded-full">
                        CORE
                      </span>
                    )}
                  </div>
                  <svg
                    className={`w-5 h-5 text-muted transition-transform ${expanded === layer.num ? "rotate-180" : ""}`}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                {expanded === layer.num && (
                  <div className="px-6 pb-5 pl-20">
                    <p className="text-foreground text-base leading-relaxed font-serif">{layer.desc}</p>
                  </div>
                )}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <AlphaBox audience="Builders">
            You don&apos;t need to solve all 9 layers. Pick one, make it world-class, and plug into the
            stack. The stack is composable&nbsp;&mdash; like LEGO blocks. A great Observability layer
            benefits every Model Layer built on top of it.
          </AlphaBox>
        </ScrollReveal>
      </div>
    </section>
  );
}
