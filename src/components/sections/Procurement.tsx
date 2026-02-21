import ScrollReveal from "@/components/editorial/ScrollReveal";
import AlphaBox from "@/components/editorial/AlphaBox";
import GlossaryTerm from "@/components/editorial/GlossaryTerm";

export default function Procurement() {
  return (
    <section id="procurement" className="bg-background">
      <div className="max-w-reading mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-chapter-num font-sans font-extralight text-border select-none">10</span>
            <h2 className="font-sans font-bold text-heading text-3xl md:text-4xl -mt-12">
              Outcome-Based Procurement
            </h2>
            <p className="text-muted mt-4 text-lg">
              The market will re-align overnight.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <p className="mb-8">
            Today, schools buy software licenses. They pay per seat, per year, regardless of whether
            students learn. This is like paying a hospital per patient visit rather than per patient
            cured. The incentives are misaligned.
          </p>
          <p className="mb-8">
            <GlossaryTerm term="Outcome-Based Procurement" /> flips this model. Schools buy verified
            <GlossaryTerm term="LG/H"> Learning Gain per Hour</GlossaryTerm>. AI Copilots that
            provably beat the LG/H floor are procured automatically. Those that drift or fail to
            teach are automatically &ldquo;downshifted&rdquo; (removed).
          </p>
        </ScrollReveal>

        {/* Old vs New */}
        <ScrollReveal>
          <div className="grid md:grid-cols-2 gap-6 my-12">
            <div className="bg-white rounded-2xl p-8 border border-border relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-lgh-low" />
              <div className="font-sans text-sm font-bold text-lgh-low uppercase tracking-wider mb-6">
                Old Model
              </div>
              <div className="space-y-4 font-sans text-sm">
                <div className="flex items-center gap-3 p-3 bg-red-50 rounded-lg">
                  <span className="text-lgh-low shrink-0">&#10005;</span>
                  <span>Pay per software license</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-red-50 rounded-lg">
                  <span className="text-lgh-low shrink-0">&#10005;</span>
                  <span>Measure engagement minutes</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-red-50 rounded-lg">
                  <span className="text-lgh-low shrink-0">&#10005;</span>
                  <span>Annual standardized tests</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-red-50 rounded-lg">
                  <span className="text-lgh-low shrink-0">&#10005;</span>
                  <span>Vendor paid regardless of results</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-border relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-lgh-high" />
              <div className="font-sans text-sm font-bold text-lgh-high uppercase tracking-wider mb-6">
                New Model
              </div>
              <div className="space-y-4 font-sans text-sm">
                <div className="flex items-center gap-3 p-3 bg-emerald-50 rounded-lg">
                  <span className="text-lgh-high shrink-0">&#10003;</span>
                  <span>Pay per verified Learning Gain</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-emerald-50 rounded-lg">
                  <span className="text-lgh-high shrink-0">&#10003;</span>
                  <span>Measure LG/H in real-time</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-emerald-50 rounded-lg">
                  <span className="text-lgh-high shrink-0">&#10003;</span>
                  <span>Continuous retention floor checks</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-emerald-50 rounded-lg">
                  <span className="text-lgh-high shrink-0">&#10003;</span>
                  <span>Compute Escrow: funds locked until results verified</span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <h3 className="font-sans font-bold text-heading text-xl mb-4 mt-8">
            <GlossaryTerm term="Compute Escrow" />
          </h3>
          <p className="mb-6">
            Funds are locked in escrow until verified benchmarks clear. If the AI tutor delivers
            the promised LG/H, payment releases automatically. If it doesn&apos;t, the funds return.
            This is not radical&nbsp;&mdash; it&apos;s how construction bonds have worked for centuries.
            We&apos;re simply applying the same accountability to education technology.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <AlphaBox audience="School Administrators">
            The first school district to adopt outcome-based AI procurement will trigger a
            global cascade. When parents see one district&apos;s students gaining 2.4 LG/H while
            theirs get 1.0, the pressure to adopt becomes irresistible. The market will re-align
            overnight.
          </AlphaBox>
        </ScrollReveal>
      </div>
    </section>
  );
}
