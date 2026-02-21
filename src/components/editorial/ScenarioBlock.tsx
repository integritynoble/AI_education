const colorMap: Record<string, { bg: string; border: string; label: string }> = {
  past: { bg: "bg-slate-50", border: "border-l-past", label: "text-past" },
  transition: { bg: "bg-amber-50", border: "border-l-transition", label: "text-transition" },
  future: { bg: "bg-emerald-50", border: "border-l-future", label: "text-future" },
};

export default function ScenarioBlock({
  year,
  variant,
  children,
}: {
  year: string;
  variant: "past" | "transition" | "future";
  children: React.ReactNode;
}) {
  const c = colorMap[variant];
  return (
    <div className={`scenario-block ${c.bg} border-l-4 ${c.border}`}>
      <div className={`year-label ${c.label}`}>{year}</div>
      <div className="font-serif text-foreground leading-relaxed">{children}</div>
    </div>
  );
}
