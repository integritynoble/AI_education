export default function AlphaBox({ audience, children }: { audience: string; children: React.ReactNode }) {
  return (
    <div className="alpha-box">
      <div className="alpha-label">Alpha for {audience}</div>
      <div className="font-serif text-foreground">{children}</div>
    </div>
  );
}
