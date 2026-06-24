import { ArrowRight, Sparkles, TrendingUp, Brain, Target, GraduationCap, Activity } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative pt-36 pb-10 sm:pt-44 sm:pb-12 overflow-hidden">
      <div className="absolute inset-0 bg-mesh opacity-90 pointer-events-none" />
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)] pointer-events-none" />
      {/* floating orbs */}
      <div className="absolute top-40 -left-20 w-80 h-80 rounded-full bg-[var(--brand-blue)]/30 blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-10 -right-20 w-96 h-96 rounded-full bg-[var(--brand-orange)]/25 blur-3xl animate-pulse-glow" style={{ animationDelay: "2s" }} />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center max-w-5xl xl:max-w-6xl mx-auto">
          {/* <div className="glass inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs text-muted-foreground mb-8 animate-fade-up">
            <Sparkles className="h-3.5 w-3.5 text-[var(--brand-orange)]" />
            <span>Introducing TASKVERSE AI Agents</span>
            <span className="h-1 w-1 rounded-full bg-muted-foreground/40" />
            <span className="text-foreground">v3.0</span>
          </div> */}

          <h1 className="text-5xl sm:text-6xl md:text-[5.5rem] lg:text-[6.5rem] xl:text-[7rem] font-normal tracking-tight leading-[1.1] animate-fade-up whitespace-nowrap" style={{ fontFamily: 'var(--font-hero)', fontWeight: 300, animationDelay: "0.1s", opacity: 0.9 }}>
            <span className="block">Transform Students Into</span>
            <span className="block text-gradient-brand mt-1">Industry Ready</span>
            <span className="block mt-1">Professionals</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl animate-fade-up" style={{ animationDelay: "0.2s", opacity: 0 }}>
            AI-powered platform connecting education, capability, and employability built for the next generation of institutions.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3 animate-fade-up" style={{ animationDelay: "0.3s", opacity: 0 }}>
            <a href="/contact" className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[var(--brand-blue)] to-[var(--brand-orange)] text-background font-medium shadow-glow-blue hover:shadow-glow-orange transition-all">
              Contact <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a href="/taskverse" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl glass-strong text-foreground font-medium hover:bg-white/10 transition-colors">
              Explore TASKVERSE
            </a>
          </div>
        </div>

        {/* Dashboard mockup */}
        <div className="relative mt-20 mx-auto max-w-6xl animate-fade-up" style={{ animationDelay: "0.5s", opacity: 0 }}>
          <div className="absolute -inset-x-20 -inset-y-10 bg-gradient-to-tr from-[var(--brand-blue)]/30 via-transparent to-[var(--brand-orange)]/30 blur-3xl -z-10" />

        </div>
      </div>
    </section>
  );
}

function DashboardMockup() {
  return (
    <div className="glass-strong rounded-2xl p-3 sm:p-4 shadow-elevated">
      <div className="flex items-center gap-1.5 px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
        <div className="ml-3 flex-1 text-[11px] text-muted-foreground font-mono truncate">placevalue.app / dashboard / students</div>
      </div>
      <div className="grid grid-cols-12 gap-3 p-2">
        {/* Sidebar */}
        <div className="hidden md:block col-span-2 glass rounded-xl p-3 space-y-1.5">
          {["Overview", "Students", "TASKVERSE", "Analytics", "Recruiters", "Reports"].map((i, idx) => (
            <div key={i} className={`text-xs px-2.5 py-1.5 rounded-md flex items-center gap-2 ${idx === 2 ? "bg-[var(--brand-blue)]/15 text-[var(--brand-blue-glow)]" : "text-muted-foreground"}`}>
              <span className="h-1.5 w-1.5 rounded-full bg-current opacity-60" />{i}
            </div>
          ))}
        </div>
        <div className="col-span-12 md:col-span-10 space-y-3">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            <StatCard icon={<Target className="h-4 w-4" />} label="Readiness Score" value="89%" delta="+12%" tint="blue" />
            <StatCard icon={<GraduationCap className="h-4 w-4" />} label="Active Students" value="5,247" delta="+318" tint="orange" />
            <StatCard icon={<Brain className="h-4 w-4" />} label="AI Insights" value="1.2M" delta="+24%" tint="blue" />
            <StatCard icon={<TrendingUp className="h-4 w-4" />} label="Placements" value="2,891" delta="+9.3%" tint="orange" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
            <div className="lg:col-span-2 glass rounded-xl p-4">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <div className="text-xs text-muted-foreground">Placement Readiness</div>
                  <div className="text-sm font-semibold">Cohort 2026 · Engineering</div>
                </div>
                <Activity className="h-4 w-4 text-[var(--brand-blue-glow)]" />
              </div>
              <MockChart />
            </div>
            <div className="glass rounded-xl p-4 space-y-3">
              <div className="text-xs text-muted-foreground">TASKVERSE Agents</div>
              {[
                { n: "Performance", v: 94, t: "blue" },
                { n: "Coding Intelligence", v: 87, t: "orange" },
                { n: "Recommendation", v: 91, t: "blue" },
                { n: "Reasoning", v: 82, t: "orange" },
              ].map((a) => (
                <div key={a.n}>
                  <div className="flex justify-between text-[11px] mb-1">
                    <span className="text-muted-foreground">{a.n} Agent</span>
                    <span className="font-mono text-foreground">{a.v}</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                    <div className={`h-full rounded-full ${a.t === 'blue' ? 'bg-gradient-to-r from-[var(--brand-blue)] to-[var(--brand-blue-glow)]' : 'bg-gradient-to-r from-[var(--brand-orange)] to-[var(--brand-orange-glow)]'}`} style={{ width: `${a.v}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ icon, label, value, delta, tint }: { icon: React.ReactNode; label: string; value: string; delta: string; tint: "blue" | "orange" }) {
  const color = tint === "blue" ? "text-[var(--brand-blue-glow)]" : "text-[var(--brand-orange-glow)]";
  return (
    <div className="glass rounded-xl p-4">
      <div className={`flex items-center justify-between ${color}`}>
        {icon}
        <span className="text-[10px] font-mono">{delta}</span>
      </div>
      <div className="mt-3 text-2xl font-semibold">{value}</div>
      <div className="text-[11px] text-muted-foreground">{label}</div>
    </div>
  );
}

function MockChart() {
  const points = [22, 38, 30, 52, 48, 64, 58, 76, 70, 84, 80, 92];
  const max = 100;
  const w = 100, h = 40;
  const path = points.map((p, i) => `${(i / (points.length - 1)) * w},${h - (p / max) * h}`).join(" ");
  return (
    <div className="relative h-40">
      <svg viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
        <defs>
          <linearGradient id="g1" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="oklch(0.72 0.16 235)" />
            <stop offset="100%" stopColor="oklch(0.74 0.17 55)" />
          </linearGradient>
          <linearGradient id="g2" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="oklch(0.72 0.16 235 / 0.4)" />
            <stop offset="100%" stopColor="oklch(0.72 0.16 235 / 0)" />
          </linearGradient>
        </defs>
        <polyline points={`0,${h} ${path} ${w},${h}`} fill="url(#g2)" />
        <polyline points={path} fill="none" stroke="url(#g1)" strokeWidth="0.6" />
      </svg>
    </div>
  );
}
