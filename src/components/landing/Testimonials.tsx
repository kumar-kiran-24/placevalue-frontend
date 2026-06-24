import { SectionHeader } from "./Ecosystem";

const quotes = [
  { q: "PlaceValue rewired our placement strategy. Readiness scores gave us truth — and outcomes followed.", n: "Dr. Anita Rao", r: "Dean of Academics, NIT Region" },
  { q: "TASKVERSE is what I wish I had as a student. The Coding Agent is an unfair advantage.", n: "Rohit Mehta", r: "Final-year CSE, BITS" },
  { q: "We've hired 60+ candidates from PlaceValue pipelines. Quality is consistently top-tier.", n: "Sneha Kulkarni", r: "Head of Campus Hiring, Fintech Co." },
];

// export function Testimonials() {
//   return (
//     <section className="py-28 relative">
//       <div className="max-w-7xl mx-auto px-6">
//         <SectionHeader eyebrow="Voices" title="Built for institutions. Loved by students." />
//         <div className="mt-14 grid md:grid-cols-3 gap-4">
//           {quotes.map((t) => (
//             <figure key={t.n} className="glass rounded-2xl p-7 flex flex-col gap-6">
//               <blockquote className="text-base leading-relaxed">"{t.q}"</blockquote>
//               <figcaption className="mt-auto flex items-center gap-3">
//                 <div className="h-9 w-9 rounded-full bg-gradient-to-br from-[var(--brand-blue)] to-[var(--brand-orange)]" />
//                 <div>
//                   <div className="text-sm font-medium">{t.n}</div>
//                   <div className="text-xs text-muted-foreground">{t.r}</div>
//                 </div>
//               </figcaption>
//             </figure>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
