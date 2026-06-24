// import { SectionHeader } from "./Ecosystem";

// export function Analytics() {
//   return (
//     <section id="analytics" className="py-28 relative">
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           <div>
//             <SectionHeader eyebrow="Live Analytics" title="Decisions, in real-time." subtitle="Institutional dashboards stream cohort-level intelligence — readiness, gaps, projected placements — all the moment they happen." />
//             <ul className="mt-8 space-y-4">
//               {[
//                 "Cohort readiness modeling across 24 axes",
//                 "Recruiter-grade student dossiers on demand",
//                 "Predictive placement outcomes by stream",
//                 "Skill-gap heatmaps with prescriptive actions",
//               ].map((f) => (
//                 <li key={f} className="flex items-start gap-3 text-sm">
//                   <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-[var(--brand-blue)] to-[var(--brand-orange)]" />
//                   <span className="text-muted-foreground">{f}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//           <div className="glass-strong rounded-2xl p-5 shadow-elevated">
//             <div className="flex justify-between items-center mb-4">
//               <div>
//                 <div className="text-xs text-muted-foreground">Institution Overview</div>
//                 <div className="text-base font-semibold">Q3 · Engineering & Sciences</div>
//               </div>
//               <div className="text-[11px] font-mono text-green-400 flex items-center gap-1.5">
//                 <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" /> live
//               </div>
//             </div>
//             <Bars />
//             <div className="mt-4 grid grid-cols-3 gap-2">
//               {[
//                 { l: "Avg Readiness", v: "82%" },
//                 { l: "At Risk", v: "11%" },
//                 { l: "Top Tier", v: "27%" },
//               ].map((s) => (
//                 <div key={s.l} className="glass rounded-xl p-3">
//                   <div className="text-lg font-semibold">{s.v}</div>
//                   <div className="text-[11px] text-muted-foreground">{s.l}</div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function Bars() {
//   const data = [40, 62, 55, 78, 70, 85, 72, 90, 82, 95, 88, 92];
//   return (
//     <div className="h-44 flex items-end gap-2">
//       {data.map((v, i) => (
//         <div key={i} className="flex-1 flex flex-col items-center gap-1.5">
//           <div className="w-full rounded-t-md bg-gradient-to-t from-[var(--brand-blue)] to-[var(--brand-orange)] opacity-80 hover:opacity-100 transition-opacity" style={{ height: `${v}%` }} />
//         </div>
//       ))}
//     </div>
//   );
// }
