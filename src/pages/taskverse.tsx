
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  Activity, Brain, Code2, GraduationCap, LineChart, Users, Building2, Briefcase,
  Sparkles, BarChart3, Target, FileText, ArrowRight, Cpu, Database, Network,
  Shield, Zap, Layers, CheckCircle2, Quote, Fingerprint, ScanSearch, Radar, Orbit, Gauge, ScrollText
} from "lucide-react";
// import { TrendingUp, Brain, Code2, Sparkles, Target, FileText } from 'lucide-react';
import { Link } from "react-router-dom";
import { Logo } from "../components/landing/Logo";
import favicon from "../assets/favicon.png";


// import icon1 from "@/assets/icons/taskverse/1.png";
// import icon2 from "@/assets/icons/taskverse/2.png";
// import icon3 from "@/assets/icons/taskverse/3.png";
// import icon4 from "@/assets/icons/taskverse/4.png";
// import icon5 from "@/assets/icons/taskverse/5.png";
// import icon6 from "@/assets/icons/taskverse/6.png";

// import agent1 from "@/assets/taskverse/agent1.png";
// import agent2 from "@/assets/taskverse/agent2.png";
// import agent3 from "@/assets/taskverse/agent3.png";
// import agent4 from "@/assets/taskverse/agent4.png";
// import agent5 from "@/assets/taskverse/agent5.png";
// import agent6 from "@/assets/taskverse/agent6.png";

import { TrendingUp } from 'lucide-react';
import { Nav } from "../components/site/Nav";
import { IntelligenceSphere } from "../components/taskverse/IntelligenceSphere";
import { Particles } from "../components/taskverse/Particles";
import { Reveal } from "../components/taskverse/Reveal";

export default function Index() {
  return (
    <main id="top" className="relative min-h-screen overflow-x-clip" style={{ fontFamily: 'var(--font-body)' }}>

      <Nav />

      {/* Hero keeps its own background */}
      {/* <Hero /> */}

      {/* Container with a smooth gradient merging the deep navy and black backgrounds */}
      <div
        className="relative"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.03) 1px, transparent 1px),
            linear-gradient(to bottom, #0a1628 0%, #040914 40%, #000101 80%)
          `,
          backgroundSize: "60px 60px, 60px 60px, 100% 100%",
          color: "#E6EEF7",
        }}
      >
        <PlatformOverview />
        <Agents />
        <CapabilityCore />
        <WhyTaskverse />
        {/* <Impact /> */}
        {/* <Testimonials /> */}
        <FinalCTA />
        <Footer />
      </div>
    </main>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-lg font-semibold text-white tracking-tight">{value}</div>
      <div className="text-[11px] uppercase tracking-[0.18em] text-[var(--slate-1)]">{label}</div>
    </div>
  );
}
function Divider() { return <span className="h-8 w-px bg-white/10" />; }

/* ====================== MAGNETIC BUTTON ====================== */
function MagneticButton({
  children, variant = "primary", className = "",
}: { children: ReactNode; variant?: "primary" | "ghost"; className?: string }) {
  const ref = useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 15 });
  const sy = useSpring(y, { stiffness: 200, damping: 15 });

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * 0.25);
    y.set((e.clientY - (r.top + r.height / 2)) * 0.25);
  };
  const onLeave = () => { x.set(0); y.set(0); };

  const base = "relative inline-flex items-center gap-2 h-12 px-6 rounded-xl text-[14px] font-medium transition-colors";
  const styles = variant === "primary"
    ? "bg-white text-[var(--bg-deep)] hover:bg-[var(--cyan-soft)] glow-cyan"
    : "text-white hover:bg-white/[0.06]";

  const glassStyle = variant === "ghost" ? {
    background: "linear-gradient(180deg,rgba(255,255,255,.04) 0%,rgba(255,255,255,.015) 100%)",
    border: "1px solid rgba(148,163,184,.14)",
    backdropFilter: "blur(18px) saturate(140%)",
    borderRadius: "1.25rem",
  } : {};
  return (
    <motion.button
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ x: sx, y: sy, ...glassStyle }}
      className={`${base} ${styles} ${className}`}
    >
      {children}
    </motion.button>
  );
}


/* ====================== SECTION HEADING ====================== */

const titleGradient = {
  fontFamily: "var(--font-hero)",
  background: "linear-gradient(90deg, #38bdf8 0%, #0ea5e9 40%, #bae6fd 60%, #38bdf8 100%)",
  backgroundSize: "300% auto",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  WebkitTextFillColor: "transparent",
  animation: "shimmer 15s ease-in-out infinite",
};

const titleGradientOriginal = {
  fontFamily: "var(--font-hero)",
  background: "linear-gradient(90deg, var(--brand-blue-glow) 0%, var(--brand-orange-glow) 40%, var(--brand-blue-glow) 60%, var(--brand-orange-glow) 100%)",
  backgroundSize: "300% auto",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  WebkitTextFillColor: "transparent",
  animation: "shimmer 15s ease-in-out infinite",
};

const glassBadge = {
  background:
    "linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.015) 100%)",
  border: "1px solid rgba(148,163,184,0.14)",
  backdropFilter: "blur(18px) saturate(140%)",
  borderRadius: "999px",
};



function SectionHead({
          title,
          sub,
          titleStyle,
        }: {
          title: ReactNode;
          sub?: string;
          titleStyle?: React.CSSProperties;
        }) {
          return (
            <div className="mx-auto max-w-4xl text-center">
              {/* Heading */}
              <Reveal delay={0.05}>
                <h2
                  className="mt-6 pb-2 text-3xl font-normal leading-[1.1] tracking-[-0.03em]
                            md:text-5xl lg:text-6xl"
                  style={{
                    fontFamily: "var(--font-hero)",
                    fontWeight: 500,
                    ...(titleStyle || titleGradient),
                  }}
                >
                  {title}
                </h2>
              </Reveal>

              {/* Subtitle */}
              {sub && (
                <Reveal delay={0.9}>
                  <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[var(--slate-1)] md:text-lg">
                    {sub}
                  </p>
                </Reveal>
              )}
            </div>
          );
        }

/* ====================== PLATFORM OVERVIEW (BENTO) ====================== */

function PlatformOverview() {
  const cards = [
    {
      
      title: "Student Intelligence",
      desc: "Unified profile of every learner — skills, activity, momentum.",
      size: "lg",
    },
    {
      title: "Assessment Intelligence",
      desc: "Real-time parsing of coding tests and assignments.",
      size: "md",
    },
    {
      title: "Placement Intelligence",
      desc: "Live pipeline mapping to corporate requirements.",
      size: "md",
    },
    {
      title: "Curriculum Intelligence",
      desc: "Syllabus mapping against live industry needs.",
      size: "lg",
    },
    {
      title: "Institution Intelligence",
      desc: "Live cohort analytics, curriculum impact, and outcome tracking.",
      size: "lg",
    },
    {
      title: "Placement Intelligence",
      desc: "Match candidates to recruiters, roles, and hiring cycles.",
      size: "md",
    },
  ];
  return (
    <section
      id="platform"
      className="relative py-16"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0" style={{
          background: "radial-gradient(900px 500px at 20% 30%, rgba(56,189,248,0.2), transparent 60%), radial-gradient(900px 500px at 80% 60%, rgba(14,165,233,0.15), transparent 60%)"
        }} />
        <Particles density={45} />
      </div>

      <div className="flex flex-col items-center text-center max-w-5xl xl:max-w-6xl mx-auto mt-28 px-6">
        <h1 className="text-5xl sm:text-6xl md:text-[5.5rem] lg:text-[6.5rem] xl:text-[7rem] font-normal tracking-tight leading-[1.1] animate-fade-up whitespace-nowrap" style={{ fontFamily: 'var(--font-hero)', fontWeight: 300, animationDelay: "0.1s", opacity: 0.9 }}>
          <span className="block">TASKVERSE</span>
          <span className="block mt-1">The Intelligence Layer</span>
          <span className="block mt-1">For Higher Education</span>
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-[var(--slate-1)] max-w-2xl animate-fade-up" style={{ animationDelay: "0.2s", opacity: 0 }}>
          A unified intelligence fabric that transforms every student signal into measurable institutional outcomes.
        </p>
      </div>
      <div className="mx-auto mt-20 max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 auto-rows-[220px]">
          {cards.map((c, i) => (
            <Reveal
              key={c.title}
              delay={i * 0.05}
              className={
                c.size === "lg"
                  ? "md:col-span-2"
                  : ""
              }
            >
              <div
                className="
              h-full rounded-3xl
              border border-[rgba(56,189,248,0.15)]
              bg-[#112133]
              backdrop-blur-xl
              p-8
              transition-all duration-500
              hover:-translate-y-2
              hover:border-[#38bdf8]/40
              hover:shadow-[0_0_60px_rgba(56,189,248,0.2)]
            "
              >
                <h3 className="text-2xl font-bold text-white">
                  {c.title}
                </h3>

                <p className="mt-3 text-[15px] leading-relaxed text-slate-400">
                  {c.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

  );
}



/* ====================== AGENTS ====================== */


function Agents() {
  const agents = [
  {
    // image: agent1,
    title: "AI Assessments",
    desc: "Conduct objective, coding, and adaptive assessments with automated evaluation.",
    accent: "#38bdf8",
    glow: "rgba(56,189,248,0.4)",
  },
  {
    // image: agent2,
    title: "Learning Analytics",
    desc: "Track student performance, skill progression, and topic-wise mastery in real time.",
    accent: "#a78bfa",
    glow: "rgba(167,139,250,0.4)",
  },
  {
    // image: agent3,
    title: "Coding Evaluations",
    desc: "Evaluate coding skills using test cases, execution analysis, and performance metrics.",
    accent: "#34d399",
    glow: "rgba(52,211,153,0.4)",
  },
  {
    // image: agent4,
    title: "Personalized Guidance",
    desc: "Deliver targeted recommendations and learning pathways for every student.",
    accent: "#fbbf24",
    glow: "rgba(251,191,36,0.4)",
  },
  {
    // image: agent5,
    title: "Placement Intelligence",
    desc: "Measure employability readiness and identify strengths, gaps, and career opportunities.",
    accent: "#f472b6",
    glow: "rgba(244,114,182,0.4)",
  },
  {
    // image: agent6,
    title: "Institutional Reporting",
    desc: "Generate department, batch, and institution-level insights through automated reports.",
    accent: "#fb923c",
    glow: "rgba(251,146,60,0.4)",
  },
];
  return (
    <section id="agents" className="relative py-16">
             <SectionHead
  title={
    <>
      Everything Institutions Need.<br />
      One Unified Platform.
    </>
  }
  sub="AI-powered assessments, coding evaluations, learning analytics, placement intelligence, and institutional reporting—built for modern educational institutions."
/>
      <div className="mx-auto mt-16 max-w-7xl px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {agents.map((a, i) => (
          <Reveal key={a.title} delay={i * 0.05}>
            <AgentCard {...a} index={i} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}




function AgentCard({
  
  title,
  desc,
  accent,
  glow,
  index = 0,
}: {
  // image: string;
  title: string;
  desc: string;
  accent: string;
  glow: string;
  index?: number;
}) {
  return (
    <div
      className="group relative overflow-hidden p-7 transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02]"
      style={{
        background: "#112133",
        border: `1px solid ${accent}22`,
        backdropFilter: "blur(18px) saturate(140%)",
        borderRadius: "1.25rem",
      }}
    >
      {/* Hover glow — uses per-card accent */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        style={{
          background: `radial-gradient(circle at top right, ${glow}, transparent 60%)`,
        }}
      />

      {/* Bottom-edge accent line on hover */}
      <div
        className="absolute bottom-0 left-[10%] right-[10%] h-[2px] opacity-0 group-hover:opacity-100 transition-all duration-500"
        style={{
          background: `linear-gradient(90deg, transparent, ${accent}, transparent)`,
          boxShadow: `0 0 12px ${glow}`,
        }}
      />

      <div className="relative">
        <h3 className="text-xl font-semibold mb-2 transition-colors duration-300 group-hover:text-white">
          {title}
        </h3>

        <p className="text-sm leading-relaxed text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
          {desc}
        </p>
      </div>
    </div>
  );
}



function CapabilityCore() {
  return (
    <section className="relative py-20">
      {/* Grid Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.03) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(circle at center, black 40%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, black 40%, transparent 80%)",
        }}
      />

      {/* Blue Glow */}
      <div
        className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(0,178,247,.12) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* Orange Glow */}
      <div
        className="absolute right-0 top-1/3 h-[400px] w-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(250,137,39,.08) 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
      />

      <SectionHead
        title={<>The engine behind every decision.</>}
        titleStyle={titleGradientOriginal}
        sub="Ten capability dimensions, continuously updated, fused into a single intelligence signal."
      />

      <div className="relative mt-16 flex justify-center px-6">
        <Reveal>
          <div
            className="relative"
            style={{
              filter:
                "drop-shadow(0 0 40px rgba(0,178,247,.15)) drop-shadow(0 0 80px rgba(250,137,39,.08))",
            }}
          >
            <IntelligenceSphere
              size={typeof window !== "undefined" && window.innerWidth < 768 ? 340 : 620}

              centerLabel="TASKVERSE"
              centerSub="Student Success Engine"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}


/* ====================== WHY TASKVERSE ====================== */
function WhyTaskverse() {
  const left = [
    "Periodic examinations",
    "One-dimensional grading",
    "Delayed feedback cycles",
    "Generic learning pathways",
    "Reactive placement preparation",
  ];

  const right = [
    "Continuous AI assessment",
    "Multi-dimensional skill intelligence",
    "Real-time performance analytics",
    "Personalized learning journeys",
    "Predictive placement readiness",
  ];

  return (
    <section className="relative py-20">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(900px 500px at 20% 50%, rgba(239,68,68,0.15), transparent 60%), radial-gradient(900px 500px at 80% 50%, rgba(0,194,255,0.18), transparent 60%), radial-gradient(700px 400px at 90% 50%, rgba(255,159,67,0.12), transparent 60%)",
            maskImage:
              "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
          }}
        />
        <Particles density={45} />
      </div>

      <SectionHead
        
        title={
          <>
            From Traditional Assessment to
            <br />
            <span style={{ ...titleGradientOriginal }}>
              Outcome Intelligence
            </span>
          </>
        }
        sub="See how TASKVERSE transforms fragmented academic signals into measurable student and institutional outcomes."
      />

      <div className="mx-auto mt-16 max-w-6xl px-6 grid md:grid-cols-2 gap-6">
        
        {/* Traditional Education */}
        <Reveal>
          <div
            className="p-8 h-full relative overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, rgba(127,29,29,.22) 0%, rgba(15,23,42,.95) 55%, rgba(2,6,23,.98) 100%)",
              border: "1px solid rgba(239,68,68,.15)",
              backdropFilter: "blur(20px) saturate(140%)",
              borderRadius: "1.5rem",
              boxShadow:
                "0 0 60px rgba(239,68,68,.08), inset 0 0 40px rgba(239,68,68,.03)",
            }}
          >
            <div
              className="absolute -top-24 -left-24 h-64 w-64 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(239,68,68,.18), transparent 70%)",
              }}
            />

            <div className="relative">
              <div className="text-[11px] tracking-[0.25em] uppercase text-red-300 font-medium">
                Traditional Education
              </div>

              <h3 className="mt-3 text-3xl font-bold tracking-tight">
                Limited Visibility Into Student Growth
              </h3>

              <p className="mt-3 text-sm text-[var(--slate-1)] leading-relaxed">
                Static assessments and delayed feedback create gaps between
                learning outcomes and employability.
              </p>

              <ul className="mt-8 space-y-4">
                {left.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-[15px] text-[var(--slate-1)]"
                  >
                    <span className="h-2 w-2 rounded-full bg-red-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        {/* TASKVERSE Intelligence */}
        <Reveal delay={0.08}>
          <div
            className="p-8 h-full relative overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, rgba(0,178,247,.12) 0%, rgba(10,22,40,.95) 45%, rgba(250,137,39,.10) 100%)",
              border: "1px solid rgba(0,178,247,.18)",
              backdropFilter: "blur(24px) saturate(170%)",
              borderRadius: "1.5rem",
              boxShadow:
                "0 0 80px rgba(0,178,247,.12), 0 0 120px rgba(250,137,39,.06)",
            }}
          >
            <div
              className="absolute -top-20 -right-20 h-64 w-64 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(0,178,247,.25), transparent 70%)",
              }}
            />

            <div
              className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(250,137,39,.18), transparent 70%)",
              }}
            />

            <div className="relative">
              <div className="text-[11px] tracking-[0.25em] uppercase text-cyan-300 font-medium">
                TASKVERSE Intelligence
              </div>

              <h3 className="mt-3 text-3xl font-bold tracking-tight">
                Outcomes Engineered Through AI
              </h3>

              <p className="mt-3 text-sm text-[var(--slate-2)] leading-relaxed">
                Continuous assessment, capability intelligence, and predictive
                analytics drive measurable student and institutional outcomes.
              </p>

              <ul className="mt-8 space-y-4">
                {right.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-[15px]"
                  >
                    <CheckCircle2 className="h-5 w-5 text-[var(--cyan)]" />
                    <span className="text-[var(--slate-2)]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}

/* ====================== FINAL CTA ====================== */
function FinalCTA() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(900px 500px at 20% 50%, rgba(0,194,255,0.25), transparent 60%), radial-gradient(900px 500px at 80% 50%, rgba(255,159,67,0.22), transparent 60%)",
            maskImage:
              "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
          }}
        />
        <Particles density={40} />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-6xl px-6 text-center">
        <Reveal>
          <h2
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-[-0.04em] leading-[0.95]"
            style={titleGradientOriginal}
          >
            Engineering Better Outcomes.
            <br />
            Empowering Future-Ready Talent.
          </h2>
        </Reveal>

        <Reveal delay={0.08}>
          <p className="mt-8 text-[var(--slate-1)] text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            From AI-powered assessments and institutional analytics to software
            development, business automation, and industry-aligned training,
            PlaceValue helps organizations transform data into measurable
            impact.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <MagneticButton variant="ghost">
                Talk to Team
                <ArrowRight className="h-4 w-4" />
              </MagneticButton>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
/* ====================== FOOTER ====================== */
export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] bg-background overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-x-0 -top-px h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, oklch(0.68 0.16 230 / 0.5), oklch(0.72 0.17 55 / 0.5), transparent)",
        }}
      />
      <div
        aria-hidden
        className="absolute -bottom-40 left-1/2 -translate-x-1/2 size-[700px] rounded-full pointer-events-none opacity-40"
        style={{
          background:
            "radial-gradient(circle, oklch(0.68 0.16 230 / 0.12), transparent 60%)",
          filter: "blur(60px)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Columns (Left on Desktop) */}
          <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-10">
            <FCol
              head="Ecosystem"
              items={[
                { to: "/home", label: "Overview" },
                { to: "/home", label: "Students" },
                { to: "/home", label: "Institutions" },
                { to: "/home", label: "Industry" },
              ]}
            />
            <FCol
              head="TASKVERSE"
              items={[
                { to: "/taskverse", label: "AI Agents" },
                { to: "/taskverse", label: "Readiness Engine" },
                { to: "/taskverse", label: "Analytics" },
                { to: "/taskverse", label: "Reports" },
              ]}
            />
            {/* <FCol
              head="Institutions"
              items={[
                { to: "/institutions", label: "Partner With Us" },
                { to: "/institutions", label: "Solutions" },
                { to: "/contact", label: "Get In Touch" },
              ]}
            /> */}
            <FCol
              head="Company"
              items={[
                { to: "/about", label: "About" },
                { to: "/contact", label: "Contact" },
                { to: "/privacy", label: "Privacy" },
                { to: "/terms-and-conditions", label: "Terms" },
              ]}
            />
          </div>

          {/* Logo & Tagline (Right on Desktop) */}
          <div className="md:col-span-4 md:pl-8">
            <Logo size={32} withWordmark />
            <p className="mt-6 text-[0.92rem] leading-relaxed text-light max-w-xs">
              The last mile of education.
            </p>
            <p className="mt-2 text-[0.85rem] leading-relaxed text-mid max-w-xs">
              Building capability.
            </p>
            <p className="mt-2 text-[0.85rem] leading-relaxed text-mid max-w-xs">
              Strengthening institutions.
            </p>
          </div>
        </div>

        <div className="mt-20 hairline" />

        <div className="mt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-[0.78rem] text-mid">
          <p>© {new Date().getFullYear()} <img src={favicon} alt="logo" width={24} height={24} style={{ verticalAlign: "middle" }} /> PlaceValue.</p>
          <p className="font-mono tracking-tight text-mid/80">
            The Industry Readiness Ecosystem.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FCol({
  head,
  items,
}: {
  head: string;
  items: { to: string; label: string }[];
}) {
  return (
    <div>
      <div className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground mb-5">
        {head}
      </div>
      <ul className="space-y-3">
        {items.map((i) => (
          <li key={i.label}>
            <Link
              to={i.to}
              className="text-[0.9rem] text-light hover:text-foreground transition-colors"
            >
              {i.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FooterCol({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <div className="text-[11px] tracking-[0.2em] uppercase text-[var(--slate-1)]">{title}</div>
      <ul className="mt-3 space-y-2">
        {items.map(i => <li key={i}><a href="#" className="text-[var(--slate-2)] hover:text-white transition-colors">{i}</a></li>)}
      </ul>
    </div>
  );
}

// keep unused imports happy
void Network; void Shield; void LineChart;
