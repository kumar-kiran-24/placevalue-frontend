import { BookOpen, Code2, ClipboardCheck, BarChart3, Sparkles, Briefcase } from "lucide-react";

const steps = [
  { icon: BookOpen, label: "Learn", desc: "Curated, role-aligned content" },
  { icon: Code2, label: "Practice", desc: "DSA, projects, industry tasks" },
  { icon: ClipboardCheck, label: "Assess", desc: "Automated, proctored signals" },
  { icon: BarChart3, label: "Analyze", desc: "Capability decomposition" },
  { icon: Sparkles, label: "Improve", desc: "AI-recommended next steps" },
  { icon: Briefcase, label: "Get Hired", desc: "Verified, ranked, surfaced" },
];

export function CapabilityLoop() {
  return (
    <div className="relative rounded-2xl border border-border bg-surface/40 p-6 md:p-10 overflow-hidden">
      <div aria-hidden className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="relative grid grid-cols-2 md:grid-cols-6 gap-3 md:gap-0">
        {steps.map((s, i) => {
          const Icon = s.icon;
          return (
            <div key={s.label} className="relative group">
              <div className="flex flex-col items-center text-center px-2 py-4">
                <div className="size-14 grid place-items-center rounded-xl border border-border bg-background/70 backdrop-blur transition-all group-hover:border-brand-blue/40 group-hover:bg-brand-blue/[0.06] group-hover:-translate-y-0.5">
                  <Icon className="size-5 text-brand-blue-hi" />
                </div>
                <div className="mt-3 text-[0.95rem] font-bold tracking-tight text-foreground">{s.label}</div>
                <div className="text-[0.72rem] text-mid mt-1 max-w-[14ch] leading-snug">{s.desc}</div>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-[42px] -right-2 w-4 h-px">
                  <svg viewBox="0 0 24 8" className="w-6 h-2 text-mid/60"><path d="M0 4 L20 4 M16 1 L20 4 L16 7" stroke="currentColor" fill="none" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div className="relative mt-8 flex items-center justify-center gap-3 text-[0.7rem] font-mono uppercase tracking-[0.14em] text-mid">
        <span className="size-1.5 rounded-full bg-signal-green animate-pulse-soft" />
        continuous · closed-loop · per-student
      </div>
    </div>
  );
}
