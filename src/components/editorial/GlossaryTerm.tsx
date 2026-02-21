"use client";
import { glossary } from "@/lib/glossary";

export default function GlossaryTerm({ term, children }: { term: string; children?: React.ReactNode }) {
  const definition = glossary[term];
  if (!definition) return <span>{children || term}</span>;

  return (
    <span className="glossary-term">
      {children || term}
      <span className="tooltip">{definition}</span>
    </span>
  );
}
