"use client";
import ScrollReveal from "@/components/editorial/ScrollReveal";
import AlphaBox from "@/components/editorial/AlphaBox";

const dashboardData = [
  { name: "AI Tutor Alpha", lgh: 2.4, retention30: 92, retention180: 78, trend: "up", region: "Global" },
  { name: "EduBot Pro", lgh: 2.1, retention30: 88, retention180: 71, trend: "up", region: "North America" },
  { name: "LearnEngine", lgh: 1.8, retention30: 85, retention180: 65, trend: "flat", region: "Europe" },
  { name: "Traditional Classroom", lgh: 1.0, retention30: 72, retention180: 45, trend: "flat", region: "Global Avg" },
  { name: "Self-Study (No AI)", lgh: 0.6, retention30: 55, retention180: 28, trend: "down", region: "Global Avg" },
];

const maxLgh = 2.4;

function TrendIcon({ trend }: { trend: string }) {
  if (trend === "up") return <span className="text-lgh-high text-lg">&#8593;</span>;
  if (trend === "down") return <span className="text-lgh-low text-lg">&#8595;</span>;
  return <span className="text-muted text-lg">&#8594;</span>;
}

function lghColor(lgh: number) {
  if (lgh >= 2.0) return "bg-lgh-high";
  if (lgh >= 1.5) return "bg-lgh-mid";
  return "bg-lgh-low";
}

export default function LiveDashboard() {
  return (
    <section id="live-dashboard" className="bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-chapter-num font-sans font-extralight text-border select-none">07</span>
            <h2 className="font-sans font-bold text-heading text-3xl md:text-4xl -mt-12">
              The Public LG/H Dashboard
            </h2>
            <p className="text-muted mt-4 text-lg">
              A tournament of ideas. The best teaching methods rise to the top.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="bg-gray-50 rounded-2xl border border-border overflow-hidden">
            {/* Dashboard header */}
            <div className="bg-heading px-6 py-4 flex items-center justify-between">
              <div className="font-sans text-white font-bold text-sm">
                Global LG/H Leaderboard
              </div>
              <div className="flex items-center gap-4 font-sans text-xs text-gray-400">
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-lgh-high inline-block" /> Live</span>
                <span>Updated: Real-time</span>
              </div>
            </div>

            {/* Table header */}
            <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-3 font-sans text-xs font-semibold text-muted uppercase tracking-wider border-b border-border bg-white">
              <div className="col-span-1">#</div>
              <div className="col-span-3">Method</div>
              <div className="col-span-2">LG/H Score</div>
              <div className="col-span-3">LG/H Bar</div>
              <div className="col-span-1">30d</div>
              <div className="col-span-1">180d</div>
              <div className="col-span-1">Trend</div>
            </div>

            {/* Rows */}
            {dashboardData.map((row, i) => (
              <div key={i} className={`grid grid-cols-12 gap-4 px-6 py-4 items-center font-sans text-sm border-b border-border last:border-0 ${
                i === 0 ? "bg-emerald-50" : "bg-white"
              }`}>
                <div className="col-span-1 font-bold text-muted">{i + 1}</div>
                <div className="col-span-3">
                  <div className="font-semibold text-heading">{row.name}</div>
                  <div className="text-xs text-muted">{row.region}</div>
                </div>
                <div className="col-span-2 font-bold text-lg text-heading">{row.lgh.toFixed(1)}</div>
                <div className="col-span-3">
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className={`h-3 rounded-full ${lghColor(row.lgh)} transition-all duration-1000`}
                      style={{ width: `${(row.lgh / maxLgh) * 100}%` }}
                    />
                  </div>
                </div>
                <div className="col-span-1 text-sm">{row.retention30}%</div>
                <div className="col-span-1 text-sm">{row.retention180}%</div>
                <div className="col-span-1"><TrendIcon trend={row.trend} /></div>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-muted font-sans mt-3">
            Mockup data for illustration. Real dashboards will use verified, blinded assessments.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <AlphaBox audience="Educators">
            Public dashboards create a tournament of ideas. The best teaching methods rise to the
            top&nbsp;&mdash; regardless of who invented them. This is how education goes from craft to science.
          </AlphaBox>
        </ScrollReveal>
      </div>
    </section>
  );
}
