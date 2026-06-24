import { Activity, BookOpen, Code2, Sparkles, Target, FileText } from "lucide-react";
import { SectionHeader } from "./Ecosystem";

const agents = [
  { name: "Performance Analysis", desc: "Continuously evaluates skill velocity, weakness clusters, and improvement deltas.", icon: Activity, tint: "blue" },
  { name: "Educational Reasoning", desc: "Explains concepts with first-principles depth tailored to each learner.", icon: BookOpen, tint: "orange" },
  { name: "Coding Intelligence", desc: "Reviews code, runs test rubrics, and benchmarks against industry standards.", icon: Code2, tint: "blue" },
  { name: "Recommendation", desc: "Suggests next-best tracks, projects, and certifications in real-time.", icon: Sparkles, tint: "orange" },
  { name: "Placement Readiness", desc: "Computes a live readiness score across 24 employability dimensions.", icon: Target, tint: "blue" },
  { name: "Report Generation", desc: "Produces recruiter-grade dossiers and institutional analytics in one click.", icon: FileText, tint: "orange" },
] as const;

export function Taskverse() {
  return (
    <section id="taskverse" className="py-16 relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6">
        <SectionHeader eyebrow="TASKVERSE" title="Six AI agents working in concert." subtitle="A coordinated intelligence layer that thinks, teaches, and ships outcomes — purpose-built for higher education." />
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {agents.map((a) => (
            <div key={a.name} className="group glass rounded-2xl p-6 hover:border-white/15 transition-all hover:-translate-y-0.5 duration-300">
              <div className={`inline-flex items-center justify-center h-11 w-11 rounded-xl ${a.tint === 'blue' ? 'bg-[var(--brand-blue)]/15 text-[var(--brand-blue-glow)] group-hover:shadow-glow-blue' : 'bg-[var(--brand-orange)]/15 text-[var(--brand-orange-glow)] group-hover:shadow-glow-orange'} transition-shadow`}>
                <a.icon className="h-5 w-5" />
              </div>
              <div className="mt-5 flex items-center gap-2">
                <h3 className="text-lg font-semibold">{a.name} Agent</h3>
              </div>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
              <div className="mt-5 flex items-center gap-2 text-[11px] font-mono text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
                online · processing
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
