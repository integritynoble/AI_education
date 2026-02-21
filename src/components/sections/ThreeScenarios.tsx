import ScrollReveal from "@/components/editorial/ScrollReveal";
import ScenarioBlock from "@/components/editorial/ScenarioBlock";

export default function ThreeScenarios() {
  return (
    <section id="scenarios" className="bg-white">
      <div className="max-w-reading mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-chapter-num font-sans font-extralight text-border select-none">01</span>
            <h2 className="font-sans font-bold text-heading text-3xl md:text-4xl -mt-12">
              Three Futures
            </h2>
            <p className="text-muted mt-4 text-lg">
              The same classroom. Three different decades. Three different realities.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <ScenarioBlock year="2024 — The Craft Era" variant="past">
            A classroom of 30 students. One teacher. She knows Maria learns visually, but has no time
            to make a custom diagram. She knows Jamal needs the soccer analogy, but the textbook
            doesn&apos;t have one. She grades 120 papers every weekend. The best teacher in the world
            still can&apos;t personalize at scale. Education remains a craft: dependent on the skill of
            individual practitioners, impossible to replicate, impossible to scale.
          </ScenarioBlock>
        </ScrollReveal>

        <ScrollReveal>
          <ScenarioBlock year="2027 — The Transition" variant="transition">
            Maria opens her tablet. The AI tutor generates a visual explanation of photosynthesis
            using the anime art style she loves. Jamal gets the same concept explained through a
            Premier League match simulation. Both master the concept in 12 minutes&nbsp;&mdash; half the classroom
            average. The teacher&apos;s dashboard shows real-time progress: <strong>+0.3 skill points/hour
            above baseline</strong>. She no longer grades papers. She mentors. The AI handles
            instruction; she handles inspiration.
          </ScenarioBlock>
        </ScrollReveal>

        <ScrollReveal>
          <ScenarioBlock year="2032 — The Industrial Era" variant="future">
            Education is a utility. Every child on Earth has a personalized world-class tutor that
            understands their cognitive profile, their interests, their language. Schools no longer
            buy software licenses&nbsp;&mdash; they buy verified <strong>Learning Gain per Hour</strong>. A
            student in rural Kenya receives the same quality instruction as one at an elite private
            school in London. The cost: essentially zero. The result: the largest expansion of human
            capability in history.
          </ScenarioBlock>
        </ScrollReveal>
      </div>
    </section>
  );
}
