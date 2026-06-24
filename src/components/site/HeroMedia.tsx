import { GraduationCap, BookOpen, Code2, ClipboardCheck, BarChart3, Sparkles, Briefcase } from "lucide-react";

const STAGES = [
  { i: GraduationCap, label: "Student", tone: "blue" },
  { i: BookOpen, label: "Learn", tone: "blue" },
  { i: Code2, label: "Practice", tone: "blue" },
  { i: ClipboardCheck, label: "Assess", tone: "mix" },
  { i: BarChart3, label: "Analyze", tone: "orange" },
  { i: Sparkles, label: "Improve", tone: "orange" },
  { i: Briefcase, label: "Get Hired", tone: "orange" },
] as const;

/**
 * HeroMedia
 * A premium glass container reserved for the capability intelligence visualization.
 * Currently renders a lightweight animated capability flow. The inner
 * `data-hero-media-slot` div is the future mount point for Spline / Three.js / video.
 */
export function HeroMedia() {
  return (
    <div className="relative w-full">
      {/* Ambient glow */}
      <div
        aria-hidden
        className="absolute -inset-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 25% 30%, oklch(0.68 0.16 230 / 0.35), transparent 55%), radial-gradient(ellipse at 80% 75%, oklch(0.72 0.17 55 / 0.3), transparent 55%)",
          filter: "blur(40px)",
        }}
      />

      {/* Glass card */}
      <div className="relative rounded-[28px] border border-white/10 bg-white/[0.025] backdrop-blur-xl overflow-hidden shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]">
        {/* Top chrome */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-white/[0.06]">
          <div className="flex items-center gap-1.5">
            <span className="size-2 rounded-full bg-white/15" />
            <span className="size-2 rounded-full bg-white/15" />
            <span className="size-2 rounded-full bg-white/15" />
          </div>
          <div className="text-[0.62rem] font-mono uppercase tracking-[0.18em] text-white/40">
            taskverse · capability stream
          </div>
          <div className="flex items-center gap-1.5 text-[0.62rem] font-mono text-signal-green">
            <span className="size-1.5 rounded-full bg-signal-green animate-pulse" /> live
          </div>
        </div>

        {/* Media slot — drop a <video>, <Spline />, or <Canvas> here later */}
        <div
          data-hero-media-slot
          className="relative aspect-[5/4] md:aspect-[7/6] w-full overflow-hidden"
        >
          {/* Background grid */}
          <div aria-hidden className="absolute inset-0 grid-bg opacity-[0.25]" />
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 50% 55%, oklch(0.68 0.16 230 / 0.25), transparent 60%)",
            }}
          />

          {/* Orbiting ring */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="relative size-[78%] rounded-full border border-white/10"
              style={{
                background:
                  "conic-gradient(from 0deg, transparent 0deg, oklch(0.68 0.16 230 / 0.25) 90deg, transparent 180deg, oklch(0.72 0.17 55 / 0.25) 270deg, transparent 360deg)",
                animation: "spin 22s linear infinite",
                maskImage: "radial-gradient(circle, transparent 62%, black 63%, black 100%)",
                WebkitMaskImage:
                  "radial-gradient(circle, transparent 62%, black 63%, black 100%)",
              }}
            />
          </div>

          {/* Core */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative size-28 md:size-32 rounded-full bg-gradient-to-br from-brand-blue/40 to-brand-orange/40 backdrop-blur-md border border-white/15 flex items-center justify-center animate-pulse-soft">
              <div className="text-center">
                <div className="text-[0.6rem] font-mono uppercase tracking-[0.18em] text-white/60">
                  capability
                </div>
                <div className="text-2xl font-extrabold text-gradient-hi mt-0.5">
                  87.4
                </div>
              </div>
            </div>
          </div>

          {/* Floating stage chips */}
          {STAGES.map((s, idx) => {
            const angle = (idx / STAGES.length) * Math.PI * 2 - Math.PI / 2;
            const r = 42; // % of container
            const x = 50 + Math.cos(angle) * r;
            const y = 50 + Math.sin(angle) * r;
            const Ic = s.i;
            const toneClass =
              s.tone === "blue"
                ? "text-brand-blue-hi border-brand-blue/30 bg-brand-blue/10"
                : s.tone === "orange"
                  ? "text-brand-orange-hi border-brand-orange/30 bg-brand-orange/10"
                  : "text-white border-white/20 bg-white/10";
            return (
              <div
                key={s.label}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                  animation: `float 6s ease-in-out infinite`,
                  animationDelay: `${idx * 0.35}s`,
                }}
              >
                <div
                  className={`flex items-center gap-1.5 rounded-full border ${toneClass} backdrop-blur-md px-2.5 py-1 shadow-lg`}
                >
                  <Ic className="size-3" />
                  <span className="text-[0.62rem] font-medium tracking-tight">
                    {s.label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom signal bar */}
        <div className="grid grid-cols-3 divide-x divide-white/[0.06] border-t border-white/[0.06] text-[0.62rem] font-mono uppercase tracking-[0.14em]">
          <div className="px-4 py-3 text-white/50">
            signals · <span className="text-white/80">1.2M</span>
          </div>
          <div className="px-4 py-3 text-white/50">
            cohorts · <span className="text-white/80">312</span>
          </div>
          <div className="px-4 py-3 text-white/50">
            uplift · <span className="text-signal-green">+24%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
