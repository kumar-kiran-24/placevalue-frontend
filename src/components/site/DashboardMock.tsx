import { Activity, Cpu, Sparkles, Trophy, GraduationCap, LineChart } from "lucide-react";

export function DashboardMock() {
  return (
    <div className="relative rounded-2xl border border-border bg-surface/80 backdrop-blur-xl overflow-hidden shadow-2xl">
      {/* top chrome */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-border bg-background/40">
        <div className="flex items-center gap-2">
          <span className="size-2.5 rounded-full bg-destructive/70" />
          <span className="size-2.5 rounded-full bg-brand-orange/70" />
          <span className="size-2.5 rounded-full bg-signal-green/70" />
          <span className="ml-3 text-[0.7rem] font-mono text-mid">taskverse.placevalue.io / institution / dashboard</span>
        </div>
        <span className="text-[0.65rem] font-mono text-mid">Live · 14:32 IST</span>
      </div>

      <div className="grid grid-cols-12 gap-4 p-5">
        {/* Readiness score - big */}
        <div className="col-span-12 md:col-span-4 rounded-xl border border-brand-blue/25 bg-brand-blue/[0.04] p-5">
          <div className="flex items-center gap-2 text-[0.68rem] uppercase tracking-[0.14em] text-brand-blue-hi font-semibold">
            <Activity className="size-3.5" /> Readiness Index
          </div>
          <div className="mt-4 flex items-end gap-2">
            <div className="text-5xl font-extrabold tracking-tighter text-foreground">82</div>
            <div className="text-sm text-mid pb-1.5">/ 100</div>
            <div className="ml-auto text-[0.7rem] text-signal-green font-mono">▲ +6.4</div>
          </div>
          <ScoreBar value={82} />
          <div className="mt-3 text-[0.72rem] text-mid">Cohort '25 · 1,284 students tracked</div>
        </div>

        {/* Capability radar / loop */}
        <div className="col-span-12 md:col-span-5 rounded-xl border border-border bg-background/50 p-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-[0.68rem] uppercase tracking-[0.14em] text-brand-orange-hi font-semibold">
              <LineChart className="size-3.5" /> Capability Signal · last 30d
            </div>
            <span className="text-[0.65rem] font-mono text-mid">+18.2% MoM</span>
          </div>
          <Sparkline />
          <div className="grid grid-cols-4 gap-2 mt-3">
            {[
              { l: "Code", v: 88 },
              { l: "DSA", v: 74 },
              { l: "Comms", v: 69 },
              { l: "Projects", v: 81 },
            ].map((x) => (
              <div key={x.l} className="rounded-md border border-border bg-surface px-2 py-2">
                <div className="text-[0.6rem] uppercase tracking-wider text-muted-foreground">{x.l}</div>
                <div className="text-sm font-bold text-foreground">{x.v}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right column stacked */}
        <div className="col-span-12 md:col-span-3 space-y-4">
          <div className="rounded-xl border border-signal-green/25 bg-signal-green/[0.05] p-4">
            <div className="flex items-center gap-2 text-[0.65rem] uppercase tracking-[0.14em] text-signal-green font-semibold">
              <Trophy className="size-3.5" /> Placement-Ready
            </div>
            <div className="mt-2 text-3xl font-extrabold text-foreground">714</div>
            <div className="text-[0.7rem] text-mid">students · auto-verified</div>
          </div>
          <div className="rounded-xl border border-border bg-background/50 p-4">
            <div className="flex items-center gap-2 text-[0.65rem] uppercase tracking-[0.14em] text-signal-violet font-semibold">
              <Sparkles className="size-3.5" /> AI Recommendations
            </div>
            <ul className="mt-2 space-y-1.5 text-[0.72rem] text-light">
              <li className="flex gap-2"><span className="text-brand-orange">↗</span> 38 students need DSA reinforcement</li>
              <li className="flex gap-2"><span className="text-brand-blue">⬢</span> Promote 12 to interview pool</li>
            </ul>
          </div>
        </div>

        {/* Bottom — tasks ribbon */}
        <div className="col-span-12 rounded-xl border border-border bg-background/40 p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2 text-[0.68rem] uppercase tracking-[0.14em] text-mid font-semibold">
              <Cpu className="size-3.5" /> Live Capability Signals
            </div>
            <span className="text-[0.65rem] font-mono text-mid">streaming</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
            {[
              { who: "@ar.priya", what: "Solved · Graphs · Hard", c: "text-signal-green" },
              { who: "@k.rohit", what: "Project shipped · Auth API", c: "text-brand-blue-hi" },
              { who: "@s.meera", what: "Mock interview · 92%", c: "text-brand-orange-hi" },
              { who: "@d.vivek", what: "Assessment · Cloud 101", c: "text-signal-violet" },
              { who: "@n.tara", what: "Industry task · IoT sim", c: "text-signal-green" },
            ].map((s) => (
              <div key={s.who} className="rounded-md border border-border bg-surface px-2.5 py-2">
                <div className={`text-[0.65rem] font-mono ${s.c}`}>{s.who}</div>
                <div className="text-[0.7rem] text-light truncate">{s.what}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-12 flex items-center gap-2 px-1 text-[0.65rem] font-mono text-muted-foreground">
          <GraduationCap className="size-3.5" />
          institution: <span className="text-light">Heritage Institute of Technology</span>
          <span className="ml-auto">TASKVERSE engine · v4.2</span>
        </div>
      </div>
    </div>
  );
}

function ScoreBar({ value }: { value: number }) {
  return (
    <div className="mt-3 h-1.5 rounded-full bg-border overflow-hidden">
      <div className="h-full bg-gradient-brand" style={{ width: `${value}%` }} />
    </div>
  );
}

function Sparkline() {
  const pts = [22, 28, 25, 34, 31, 40, 38, 48, 52, 49, 58, 64, 60, 70, 78];
  const w = 320, h = 80;
  const max = Math.max(...pts);
  const d = pts
    .map((p, i) => {
      const x = (i / (pts.length - 1)) * w;
      const y = h - (p / max) * h * 0.9 - 4;
      return `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(" ");
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-20 mt-3">
      <defs>
        <linearGradient id="sg" x1="0" x2="1">
          <stop offset="0%" stopColor="oklch(0.68 0.16 230)" />
          <stop offset="100%" stopColor="oklch(0.72 0.17 55)" />
        </linearGradient>
        <linearGradient id="sgf" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.68 0.16 230 / 0.3)" />
          <stop offset="100%" stopColor="oklch(0.72 0.17 55 / 0)" />
        </linearGradient>
      </defs>
      <path d={`${d} L${w},${h} L0,${h} Z`} fill="url(#sgf)" />
      <path d={d} stroke="url(#sg)" strokeWidth="2" fill="none" strokeLinecap="round" />
    </svg>
  );
}
