export function Logos() {
  const names = ["Embedded Systems", "✦", "IoT Engineering", "✦", "Oracle Fusion", "✦", "Execution-First Learning", "✦", "Institutional Partnerships", "✦", "Industry Alignment", "✦", "Professional Readiness", "✦", "Capability Over Certificates"];
  const row = [...names, ...names];
  return (
    <section className="py-6 border-y border-white/5 bg-[var(--surface)]/40">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground mb-8">
          Trusted By leading institutions
        </p>
        <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
          <div className="flex gap-12 animate-marquee whitespace-nowrap">
            {row.map((n, i) => (
              <div key={i} className="text-xl sm:text-1xl font-display font-semibold text-muted-foreground/50 hover:text-foreground transition-colors">
                {n}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
