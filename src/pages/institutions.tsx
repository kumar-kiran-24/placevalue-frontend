import { Link } from "react-router-dom";
import { SiteShell } from "../components/site/SiteShell";
import { Reveal } from "../components/site/Reveal";
import { Eyebrow } from "../components/site/Eyebrow";
import { DashboardMock } from "../components/site/DashboardMock";
// import { CTASection } from "@/routes/index";
import { Activity, BarChart3, FileCheck2, GraduationCap, Layers, ShieldCheck, Users, Briefcase, ArrowRight } from "lucide-react";



export default function InstitutionsPage() {
  return (
    <SiteShell>
      <section className="relative pt-24 md:pt-32 pb-20 px-6 md:px-12 overflow-hidden">
        <div aria-hidden className="absolute inset-0 grid-bg opacity-[0.15]" />
        <div aria-hidden className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(ellipse, oklch(0.78 0.15 225 / 0.16), transparent 60%), radial-gradient(ellipse at 70% 50%, oklch(0.72 0.17 55 / 0.10), transparent 60%)" }} />
        <div className="relative max-w-7xl mx-auto">
          <Reveal><Eyebrow>For Institutions</Eyebrow></Reveal>
          <Reveal delay={100}>
            <h1 className="mt-6 text-[clamp(2.6rem,7vw,6rem)] font-extrabold leading-[0.96] tracking-[-0.045em] max-w-5xl">
              Run placements<br/>
              like a <span className="font-serif-italic text-gradient">control room.</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-7 max-w-2xl text-[1.05rem] text-mid leading-relaxed">
              PlaceValue gives universities a single operating layer for student capability —
              from assessment infrastructure to placement intelligence to board-grade reports.
            </p>
          </Reveal>
          <Reveal delay={350} className="mt-16"><DashboardMock /></Reveal>
        </div>
      </section>

      {/* CAPABILITIES BENTO */}
      <section className="px-6 md:px-12 py-28 border-t border-border bg-surface/40">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <Eyebrow color="orange">Capabilities</Eyebrow>
            <h2 className="mt-5 text-[clamp(2rem,4.2vw,3.6rem)] font-extrabold leading-[1.02] tracking-[-0.035em] max-w-3xl">
              Six surfaces.<br/><span className="font-serif-italic text-gradient">One placement engine.</span>
            </h2>
          </Reveal>
          <div className="mt-14 grid md:grid-cols-12 gap-4">
            <Bento col="md:col-span-6" icon={Users} t="Student Tracking" d="Per-student timeline of every learning, practice and assessment event — from day 0 of the program." />
            <Bento col="md:col-span-3" icon={FileCheck2} t="Assessment Infrastructure" d="Proctored, auto-graded, role-aligned." />
            <Bento col="md:col-span-3" icon={BarChart3} t="Analytics" d="Cohort, program, institution levels." />
            <Bento col="md:col-span-4" icon={Layers} t="Placement Readiness" d="Auto-curated recruiter-ready talent pools by role family." />
            <Bento col="md:col-span-4" icon={Activity} t="Institution Intelligence" d="Benchmark against peer institutions on readiness, conversion and outcomes." />
            <Bento col="md:col-span-4" icon={ShieldCheck} t="Reports & Compliance" d="NAAC/NBA-ready outputs, board summaries, employer scorecards." />
          </div>
        </div>
      </section>

      {/* TRUST METRICS */}
      <section className="px-6 md:px-12 py-24">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <Eyebrow>Why universities choose PlaceValue</Eyebrow>
          </Reveal>
          <div className="mt-10 grid md:grid-cols-4 gap-3">
            {[
              { k: "3.2×", l: "Placement throughput" },
              { k: "47%", l: "Reduction in time-to-offer" },
              { k: "92%", l: "Trainer adoption rate" },
              { k: "1 hr", l: "Setup per cohort" },
            ].map((s, i) => (
              <Reveal key={s.k} delay={i * 80}>
                <div className="rounded-xl border border-border bg-surface/60 p-6 h-full">
                  <div className="text-4xl font-extrabold tracking-tighter text-gradient">{s.k}</div>
                  <div className="mt-2 text-[0.78rem] text-mid">{s.l}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WORKFLOW */}
      <section className="px-6 md:px-12 py-24 border-t border-border bg-surface/40">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <Eyebrow color="orange">Onboarding</Eyebrow>
            <h2 className="mt-5 text-[clamp(2rem,4.2vw,3.6rem)] font-extrabold leading-[1.02] tracking-[-0.035em] max-w-3xl">
              From kick-off to <span className="font-serif-italic text-gradient">first signal</span> — in a week.
            </h2>
          </Reveal>
          <div className="mt-12 grid md:grid-cols-4 gap-3">
            {[
              { n: "01", t: "Discovery", d: "Map programs, cohorts, target roles." },
              { n: "02", t: "Provisioning", d: "Cohort imports, SSO, LMS bridges." },
              { n: "03", t: "Activation", d: "TASKVERSE goes live for students & faculty." },
              { n: "04", t: "Operate", d: "Weekly readiness reviews, placement pipelines." },
            ].map((s, i) => (
              <Reveal key={s.n} delay={i * 80}>
                <div className="rounded-xl border border-border bg-background/60 p-6 h-full hover:border-brand-blue/40 transition-colors">
                  <div className="text-[3rem] font-extrabold leading-none tracking-tighter text-border">{s.n}</div>
                  <div className="mt-4 text-lg font-extrabold tracking-tight">{s.t}</div>
                  <p className="mt-1 text-[0.85rem] text-mid leading-relaxed">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CONVERSATION */}
      <section className="px-6 md:px-12 py-24">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="rounded-2xl border border-border bg-surface/60 p-8 md:p-12">
              <Briefcase className="size-6 text-brand-orange-hi" />
              <p className="mt-6 text-[1.5rem] md:text-[1.9rem] font-serif-italic text-light leading-snug tracking-tight">
                "Within one semester we could see — per student, per skill — exactly who was
                placement-ready and who needed intervention. That visibility didn't exist before."
              </p>
              <div className="mt-6 flex items-center gap-3">
                <GraduationCap className="size-5 text-mid" />
                <div>
                  <div className="text-[0.85rem] text-light font-semibold">Dean, Engineering Program</div>
                  <div className="text-[0.75rem] text-mid">Tier-1 Indian University · 1,800 students on TASKVERSE</div>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={150} className="mt-10 text-center">
            <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-gradient-brand text-white text-[0.92rem] font-semibold hover:opacity-90">
              Book an institutional walkthrough <ArrowRight className="size-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* <CTASection /> */}
    </SiteShell>
  );
}

function Bento({
  col, icon: Icon, t, d,
}: { col: string; icon: React.ComponentType<{ className?: string }>; t: string; d: string }) {
  return (
    <Reveal className={`col-span-12 ${col}`}>
      <div className="rounded-2xl border border-border bg-background/60 p-6 h-full hover:border-brand-blue/40 transition-colors">
        <Icon className="size-5 text-brand-blue-hi" />
        <div className="mt-5 text-lg font-extrabold tracking-tight">{t}</div>
        <p className="mt-2 text-[0.85rem] text-mid leading-relaxed">{d}</p>
      </div>
    </Reveal>
  );
}
