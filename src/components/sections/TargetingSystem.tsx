"use client";
import ScrollReveal from "@/components/editorial/ScrollReveal";
import AlphaBox from "@/components/editorial/AlphaBox";
import GlossaryTerm from "@/components/editorial/GlossaryTerm";
import { useEffect, useRef, useState } from "react";

function AnimatedCounter({ end, suffix = "" }: { end: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [val, setVal] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started) {
        setStarted(true);
        observer.unobserve(el);
      }
    }, { threshold: 0.5 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const duration = 1500;
    const steps = 60;
    const increment = end / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setVal(end);
        clearInterval(timer);
      } else {
        setVal(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [started, end]);

  return <span ref={ref} className="counter-animate">{val}{suffix}</span>;
}

const frameworkPillars = [
  {
    label: "LG/H",
    title: "Learning Gain per Hour",
    desc: "The primary metric. Measures actual skill increase per hour of study.",
    anchor: "#targeting-system",
    color: "bg-accent",
  },
  {
    label: "Retention",
    title: "Retention Floors",
    desc: "Students must retain 80/70/60% at 30/60/180 days.",
    anchor: "#targeting-system",
    color: "bg-lgh-high",
  },
  {
    label: "Guardrails",
    title: "Safety & Oversight",
    desc: "Abstention rights, human-in-the-loop, parental transparency, DR-AIS.",
    anchor: "#guardrails",
    color: "bg-lgh-mid",
  },
  {
    label: "RoCS",
    title: "Return on Cognitive Spend",
    desc: "Value created per million AI tokens. Efficiency of compute.",
    anchor: "#targeting-system",
    color: "bg-purple-500",
  },
];

export default function TargetingSystem() {
  return (
    <section id="targeting-system" className="bg-background">
      <div className="max-w-reading mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-chapter-num font-sans font-extralight text-border select-none">02</span>
            <h2 className="font-sans font-bold text-heading text-3xl md:text-4xl -mt-12">
              The Targeting System
            </h2>
            <p className="text-muted mt-4 text-lg">
              A field allows for industrial-scale progress only when we can state, with mathematical
              precision: &ldquo;This number is what success looks like.&rdquo;
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <p className="mb-8">
            A <GlossaryTerm term="Targeting System" /> does not care about abstract statistics like
            &ldquo;accuracy on a dataset.&rdquo; It optimizes for real-world value. For education, it
            measures one thing above all: did the student <em>actually learn faster?</em>
          </p>
        </ScrollReveal>

        {/* Framework Overview */}
        <ScrollReveal>
          <div className="bg-white rounded-2xl p-8 border border-border shadow-sm my-12">
            <h3 className="font-sans font-bold text-heading text-lg mb-2 text-center">
              Four Pillars of the Targeting System
            </h3>
            <p className="font-sans text-sm text-muted text-center mb-6">
              Every component works together to make education measurable, accountable, and improvable.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {frameworkPillars.map((p) => (
                <a
                  key={p.label}
                  href={p.anchor}
                  className="group block rounded-xl border border-border p-4 hover:bg-gray-50 transition-colors text-center"
                >
                  <div className={`w-10 h-10 ${p.color} rounded-lg flex items-center justify-center mx-auto mb-3`}>
                    <span className="font-sans font-bold text-white text-xs">{p.label}</span>
                  </div>
                  <div className="font-sans font-semibold text-heading text-sm mb-1">{p.title}</div>
                  <div className="font-sans text-xs text-muted leading-relaxed">{p.desc}</div>
                </a>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* LG/H Hero Metric */}
        <ScrollReveal>
          <div className="bg-white rounded-2xl p-10 shadow-sm border border-border text-center my-12">
            <div className="font-sans text-xs font-semibold text-accent uppercase tracking-widest mb-3">
              Primary Metric
            </div>
            <div className="font-sans font-bold text-heading text-5xl md:text-6xl mb-3">
              <AnimatedCounter end={100} suffix="%" />
            </div>
            <div className="font-sans text-lg text-muted">
              <GlossaryTerm term="LG/H">Learning Gain per Hour</GlossaryTerm>
            </div>
            <p className="text-sm text-muted mt-3 max-w-md mx-auto font-sans">
              The measurable increase in skill for every hour spent studying. Not engagement
              minutes. Not click-through rates. <em>Actual learning.</em>
            </p>
          </div>
        </ScrollReveal>

        {/* How LG/H is measured */}
        <ScrollReveal>
          <h3 className="font-sans font-bold text-heading text-xl mb-6 mt-12">How LG/H Is Measured</h3>
          <div className="flex flex-col sm:flex-row items-center gap-3 my-8">
            {[
              { step: "1", label: "Pre-Test", desc: "Baseline skill assessment" },
              { step: "", label: "", desc: "", arrow: true },
              { step: "2", label: "Study Session", desc: "AI-personalized instruction" },
              { step: "", label: "", desc: "", arrow: true },
              { step: "3", label: "Post-Test", desc: "Measure skill delta" },
              { step: "", label: "", desc: "", arrow: true },
              { step: "=", label: "LG/H", desc: "Delta / time spent" },
            ].map((s, i) =>
              s.arrow ? (
                <div key={i} className="text-border text-2xl font-bold hidden sm:block">&rarr;</div>
              ) : (
                <div key={i} className="flex-1 bg-white rounded-xl p-4 border border-border text-center shadow-sm">
                  <div className={`font-sans font-bold text-lg ${s.step === "=" ? "text-accent" : "text-heading"}`}>{s.step}</div>
                  <div className="font-sans font-semibold text-heading text-sm">{s.label}</div>
                  <div className="font-sans text-xs text-muted mt-1">{s.desc}</div>
                </div>
              )
            )}
          </div>
        </ScrollReveal>

        {/* Retention Floors */}
        <ScrollReveal>
          <h3 className="font-sans font-bold text-heading text-xl mb-6 mt-12">
            <GlossaryTerm term="Retention Floor">Retention Floors</GlossaryTerm>
          </h3>
          <p className="mb-6">
            It&apos;s not enough to learn something today. The Targeting System demands that students
            <em> still know the material</em> 30, 60, and 180 days later.
          </p>
          <div className="grid grid-cols-3 gap-4 my-8">
            {[
              { days: "30", floor: "80%", color: "bg-lgh-high" },
              { days: "60", floor: "70%", color: "bg-lgh-mid" },
              { days: "180", floor: "60%", color: "bg-lgh-low" },
            ].map((r) => (
              <div key={r.days} className="bg-white rounded-xl p-6 text-center border border-border shadow-sm">
                <div className="font-sans text-3xl font-bold text-heading">{r.floor}</div>
                <div className={`h-2 rounded-full ${r.color} mt-3 mb-2`} style={{ width: r.floor }} />
                <div className="font-sans text-sm text-muted">{r.days}-day floor</div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* RoCS */}
        <ScrollReveal>
          <h3 className="font-sans font-bold text-heading text-xl mb-6 mt-12">
            <GlossaryTerm term="RoCS">Return on Cognitive Spend (RoCS)</GlossaryTerm>
          </h3>
          <p className="mb-6">
            Raw intelligence is cheap. <em>Directed</em> intelligence is valuable. RoCS measures
            the learning value created per million AI tokens consumed. It answers:
            are we spending compute wisely, or burning tokens on low-value interactions?
          </p>
          <div className="bg-white rounded-xl p-6 border border-border shadow-sm my-8">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 font-sans text-center">
              <div>
                <div className="text-sm font-semibold text-muted uppercase tracking-wider mb-1">Formula</div>
                <div className="text-xl font-bold text-heading">
                  RoCS = <span className="text-accent">LG/H achieved</span> / <span className="text-muted">$ of AI compute</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="text-center p-3 bg-emerald-50 rounded-lg">
                <div className="font-sans font-bold text-lgh-high text-lg">High RoCS</div>
                <div className="font-sans text-xs text-muted">Maximum learning per token</div>
              </div>
              <div className="text-center p-3 bg-amber-50 rounded-lg">
                <div className="font-sans font-bold text-lgh-mid text-lg">Mid RoCS</div>
                <div className="font-sans text-xs text-muted">Room for optimization</div>
              </div>
              <div className="text-center p-3 bg-red-50 rounded-lg">
                <div className="font-sans font-bold text-lgh-low text-lg">Low RoCS</div>
                <div className="font-sans text-xs text-muted">Burning tokens, not teaching</div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Guardrails Preview */}
        <ScrollReveal>
          <h3 className="font-sans font-bold text-heading text-xl mb-6 mt-12">
            Guardrails: The Brakes on the System
          </h3>
          <p className="mb-6">
            A Targeting System without guardrails is a weapon. Every metric must be bounded by
            human rights and oversight. The four guardrails ensure that optimizing for LG/H never
            comes at the cost of student wellbeing.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-8">
            {[
              { name: "Right of Abstention", icon: "M15.75 5.25v13.5m-7.5-13.5v13.5", short: "Opt out anytime" },
              { name: "Human-in-the-Loop", icon: "M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0", short: "Teachers decide" },
              { name: "Parental Transparency", icon: "M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z", short: "Full visibility" },
              { name: "DR-AIS", icon: "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z", short: "Immutable audit logs" },
            ].map((g) => (
              <a
                key={g.name}
                href="#guardrails"
                className="bg-white rounded-xl p-4 border border-border shadow-sm text-center hover:bg-gray-50 transition-colors block"
              >
                <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <svg className="w-5 h-5 text-heading" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={g.icon} />
                  </svg>
                </div>
                <div className="font-sans font-semibold text-heading text-xs mb-1">{g.name}</div>
                <div className="font-sans text-xs text-muted">{g.short}</div>
              </a>
            ))}
          </div>
          <p className="text-center font-sans text-sm text-accent">
            <a href="#guardrails" className="hover:underline">Read more about Guardrails &amp; Safety &darr;</a>
          </p>
        </ScrollReveal>

        {/* Old vs New comparison */}
        <ScrollReveal>
          <h3 className="font-sans font-bold text-heading text-xl mb-6 mt-12">Old Metrics vs. Targeting System</h3>
          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="bg-red-50 rounded-xl p-6 border border-red-100">
              <div className="font-sans text-sm font-bold text-lgh-low uppercase tracking-wider mb-4">What schools measure today</div>
              <ul className="space-y-2 font-sans text-sm text-foreground">
                <li className="flex items-start gap-2"><span className="text-lgh-low mt-0.5">&#10005;</span> Engagement minutes</li>
                <li className="flex items-start gap-2"><span className="text-lgh-low mt-0.5">&#10005;</span> Software licenses purchased</li>
                <li className="flex items-start gap-2"><span className="text-lgh-low mt-0.5">&#10005;</span> Teacher hours logged</li>
                <li className="flex items-start gap-2"><span className="text-lgh-low mt-0.5">&#10005;</span> Standardized test scores (annual)</li>
                <li className="flex items-start gap-2"><span className="text-lgh-low mt-0.5">&#10005;</span> Student satisfaction surveys</li>
              </ul>
            </div>
            <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-100">
              <div className="font-sans text-sm font-bold text-lgh-high uppercase tracking-wider mb-4">What the Targeting System measures</div>
              <ul className="space-y-2 font-sans text-sm text-foreground">
                <li className="flex items-start gap-2"><span className="text-lgh-high mt-0.5">&#10003;</span> Learning Gain per Hour (LG/H)</li>
                <li className="flex items-start gap-2"><span className="text-lgh-high mt-0.5">&#10003;</span> Retention at 30/60/180 days</li>
                <li className="flex items-start gap-2"><span className="text-lgh-high mt-0.5">&#10003;</span> Return on Cognitive Spend (RoCS)</li>
                <li className="flex items-start gap-2"><span className="text-lgh-high mt-0.5">&#10003;</span> Personalization accuracy per student</li>
                <li className="flex items-start gap-2"><span className="text-lgh-high mt-0.5">&#10003;</span> Real-time skill gap closure rate</li>
              </ul>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <AlphaBox audience="Policymakers">
            Every dollar of education spend should be traced to a verified LG/H outcome. If the
            student doesn&apos;t learn, the vendor doesn&apos;t get paid. This is not a radical idea&nbsp;&mdash;
            it&apos;s how every other industry works. We pay for outcomes, not effort.
          </AlphaBox>
        </ScrollReveal>
      </div>
    </section>
  );
}
