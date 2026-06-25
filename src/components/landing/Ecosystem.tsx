

import icon2 from "../../assets/icons/discover/d.png";
import icon3 from "../../assets/icons/discover/c.png";
import icon4 from "../../assets/icons/discover/b.png";
import icon5 from "../../assets/icons/discover/a.png";
const items = [
      {
      title: "TASKVERSE",
      desc: "AI Assessments • Coding Evaluations • Placement Readiness • Learning Analytics",
      icon: icon2,
      span: "md:col-span-2",
      tint: "orange" as const,
      },
      {
      title: "Student Portal",
      desc: "Skill Tracking • AI Learning Paths • Practice Tests • Career Insights",
      icon: icon3,
      span: "md:col-span-1",
      tint: "blue" as const,
      },
      {
      title: "Explore PlaceValue",
      desc: "Software Development • Web Applications • AI Solutions • Business Automation • Industry Training",
      icon: icon4,
      span: "md:col-span-1",
      tint: "orange" as const,
      },
      {
      title: "Institution Analytics",
      desc: "Student Performance • Department Analytics • Placement Reports • Outcome Tracking",
      icon: icon5,
      span: "md:col-span-2",
      tint: "blue" as const,
      },
];


import { motion } from "framer-motion";

export function Ecosystem() {
  return (
    <section id="ecosystem" className="py-24 relative">
      <div className="relative max-w-7xl mx-auto px-6">
        <SectionHeader 
          title="A Connected Ecosystem for Learning, Innovation, and Growth."
          subtitle="Explore AI-powered assessments, student success platforms, institutional analytics, and digital transformation solutions."
        />
        <div className="flex flex-wrap justify-center gap-20 md:gap-28 lg:gap-36 mt-20">
          {items.map((it, index) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={it.title}
              className="perspective-container"
            >
              <div className="box-card">
                {/* Glowing Core */}
                <div className="inner-orb" />

                {/* Front Face: Icon and Title */}
                <div className="face front">
                    <img
                      src={it.icon}
                      alt={it.title}
                      className="w-32 h-32 mb-6 object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]"                   
                    />                  
                    <h3 className="text-lg font-bold leading-tight">{it.title}</h3>
                </div>

                {/* Back Face: Description */}
                <div className="face back">
                  <p className="text-sm px-2 text-center text-white/90">{it.desc}</p>
                </div>

                {/* Right Face: Branding */}
               <div className="face right">
                  <span className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-br from-[var(--brand-blue)] to-[var(--brand-orange)] tracking-widest -rotate-90">
                    CAPABILITIES
                  </span>
                </div>

                {/* Left Face: Giant Icon */}
                <div className="face left">
                  <img
                    src={it.icon}
                    alt={it.title}
                    className="w-40 h-40 object-contain opacity-70"
                  />                </div>

                {/* Top Face: Title */}
                <div className="face top">
                  <h3 className="text-xl font-bold">{it.title}</h3>
                </div>

                {/* Bottom Face: Branding */}
                <div className="face bottom">
                  <span className="text-sm tracking-[0.2em] uppercase text-[var(--brand-orange)]">
                    PlaceValue
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <div className="max-w-6xl mx-auto text-center">
        {eyebrow && (
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-orange)]" />
          {eyebrow}
        </div>
      )}
      <h2 className={`${eyebrow ? 'mt-5' : ''} text-4xl sm:text-5xl font-bold tracking-tight`}>
        <span className="text-gradient">{title}</span>
      </h2>
      {subtitle && <p className="mt-4 text-lg text-muted-foreground">{subtitle}</p>}
    </div>
  );
}
