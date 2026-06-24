// const metrics = [
//   { v: "5,000+", l: "Students upskilled", sub: "Across 18 states" },
//   { v: "120+", l: "Partner institutions", sub: "Tier-1 and emerging" },
//   { v: "89%", l: "Placement readiness", sub: "Average cohort score" },
//   { v: "400+", l: "Recruiting partners", sub: "Hiring on platform" },
// ];

// export function Metrics() {
//   return (
//     <section className="py-14 relative">
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="glass-strong rounded-3xl p-8 sm:p-12 relative overflow-hidden">
//           <div className="absolute -top-32 -left-20 w-96 h-96 rounded-full bg-[var(--brand-blue)]/20 blur-3xl" />
//           <div className="absolute -bottom-32 -right-20 w-96 h-96 rounded-full bg-[var(--brand-orange)]/20 blur-3xl" />
//           <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-8">
//             {metrics.map((m) => (
//               <div key={m.l}>
//                 <div className="text-4xl sm:text-5xl font-bold tracking-tight text-gradient-brand">{m.v}</div>
//                 <div className="mt-2 text-sm font-medium">{m.l}</div>
//                 <div className="text-xs text-muted-foreground mt-0.5">{m.sub}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
