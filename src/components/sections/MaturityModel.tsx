"use client";
import { useState } from "react";
import ScrollReveal from "@/components/editorial/ScrollReveal";

const levels = [
  {
    level: "L0",
    name: "Ill-Posed",
    color: "bg-gray-200",
    accent: "text-gray-500",
    description: "No agreement on what 'good teaching' means. Decisions made by anecdote, intuition, and tradition. No standardized way to measure if a student learned.",
  },
  {
    level: "L1",
    name: "Measurable",
    color: "bg-gray-300",
    accent: "text-gray-600",
    description: "Standardized tests exist. Baselines are visible but not acted upon in real-time. We know how students perform annually, but can't intervene daily.",
  },
  {
    level: "L2",
    name: "Repeatable",
    color: "bg-lgh-mid",
    accent: "text-amber-700",
    current: true,
    description: "SOPs for lesson plans. Teacher training standardized. Consistent quality within top schools, but wildly uneven globally. Still dependent on individual teacher skill.",
  },
  {
    level: "L3",
    name: "Automated",
    color: "bg-blue-400",
    accent: "text-blue-700",
    description: "AI handles 80% of personalized instruction. Teachers manage exceptions, provide mentorship, and handle emotional/social development. Real-time LG/H tracking active.",
  },
  {
    level: "L4",
    name: "Industrialized",
    color: "bg-accent",
    accent: "text-blue-700",
    description: "The market re-aligns overnight. Schools buy 'Learning Gain per Hour,' not software licenses. AI tutors that beat the LG/H floor are procured automatically. Those that fail are downshifted.",
  },
  {
    level: "L5",
    name: "Commoditized",
    color: "bg-lgh-high",
    accent: "text-emerald-700",
    description: "World-class personalized tutoring at zero marginal cost for every human on Earth. Multiple providers, open competition, compute-bound only. Education as a reliable public utility.",
  },
];

export default function MaturityModel() {
  const [active, setActive] = useState(2);

  return (
    <section id="maturity-model" className="bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-chapter-num font-sans font-extralight text-border select-none">03</span>
            <h2 className="font-sans font-bold text-heading text-3xl md:text-4xl -mt-12">
              The Maturity Model
            </h2>
            <p className="text-muted mt-4 text-lg">
              Education&apos;s path from craft to commodity. Click each level to explore.
            </p>
          </div>
        </ScrollReveal>

        {/* Progress bar */}
        <ScrollReveal>
          <div className="flex items-center gap-1 mb-10">
            {levels.map((l, i) => (
              <button
                key={l.level}
                onClick={() => setActive(i)}
                className={`maturity-level flex-1 h-12 rounded-lg flex items-center justify-center font-sans font-bold text-sm text-white relative ${l.color} ${
                  active === i ? "active ring-2 ring-offset-2 ring-accent" : ""
                }`}
              >
                {l.level}
                {l.current && (
                  <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-sans font-bold text-lgh-mid whitespace-nowrap">
                    MOST SCHOOLS
                  </span>
                )}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Active level detail */}
        <ScrollReveal>
          <div className="bg-gray-50 rounded-2xl p-8 border border-border">
            <div className="flex items-center gap-3 mb-4">
              <span className={`font-sans font-bold text-2xl ${levels[active].accent}`}>
                {levels[active].level}
              </span>
              <h3 className="font-sans font-bold text-heading text-xl">{levels[active].name}</h3>
              {levels[active].current && (
                <span className="font-sans text-xs font-bold bg-lgh-mid text-white px-2 py-0.5 rounded-full">
                  CURRENT
                </span>
              )}
            </div>
            <p className="text-foreground leading-relaxed">{levels[active].description}</p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <p className="mt-8 text-muted text-center font-sans text-sm">
            The gap between L2 and L5 is not decades. With the right infrastructure&nbsp;&mdash;
            Targeting Systems, Data Trusts, and Outcome-Based Procurement&nbsp;&mdash; it is years.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
