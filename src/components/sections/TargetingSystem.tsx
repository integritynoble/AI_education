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
