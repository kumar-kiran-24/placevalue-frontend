export function Eyebrow({ children, color = "blue" }: { children: React.ReactNode; color?: "blue" | "orange" | "green" | "violet" }) {
  const map = {
    blue: "text-brand-blue-hi bg-brand-blue/10 border-brand-blue/25",
    orange: "text-brand-orange-hi bg-brand-orange/10 border-brand-orange/25",
    green: "text-signal-green bg-signal-green/10 border-signal-green/25",
    violet: "text-signal-violet bg-signal-violet/10 border-signal-violet/25",
  } as const;
  return (
    <span className={`inline-flex items-center gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.16em] px-3 py-1.5 rounded-full border ${map[color]}`}>
      <span className="size-1.5 rounded-full bg-current animate-pulse-soft" />
      {children}
    </span>
  );
}
