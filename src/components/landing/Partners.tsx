import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeader } from "./Ecosystem";

const tiers = [
  {
    name: "Student",
    price: "Career Ready",
    desc: "AI-powered assessments, learning paths, and placement readiness for students.",
    features: [
      "Personalized skill assessments",
      "AI-generated learning roadmap",
      "Coding & aptitude practice",
      "Placement readiness reports",
      "Industry-aligned skill tracking",
    ],
    tint: "blue" as const,
  },

  {
    name: "Institution",
    price: "Campus Scale",
    desc: "Complete outcome-driven platform for colleges and universities.",
    features: [
      "TASKVERSE assessment platform",
      "Student analytics dashboard",
      "Department performance insights",
      "Co-branded student portal",
      "Placement tracking & reporting",
    ],
    tint: "orange" as const,
    featured: true,
  },

  {
    name: "Consultancy",
    price: "Custom Solutions",
    desc: "Software development, web solutions, automation, and AI transformation services.",
    features: [
      "Custom software development",
      "Web & mobile application development",
      "Business process automation",
      "AI & Generative AI solutions",
      "Dedicated consulting & support",
    ],
    tint: "blue" as const,
  },
];

export function Partners() {
  return (
    <section id="partners" className="py-16 relative"> <div className="max-w-7xl mx-auto px-6"> <SectionHeader
      title="Engineering Solutions. Empowering Talent."
      subtitle="Delivering software development, AI solutions, business automation, web applications, and industry-aligned training programs."
    />


      <div className="mt-14 grid md:grid-cols-3 gap-12 lg:gap-20">
        {tiers.map((t, index) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
            whileHover={{
              y: -12,
              scale: 1.03,
              rotateX: 4,
              rotateY: 4,
            }}
            className={`group relative overflow-hidden glass-strong rounded-2xl p-8 transition-all duration-500 cursor-pointer ${t.featured ? "shadow-glow-orange" : ""
              }`}
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 bg-gradient-to-br from-cyan-500/10 via-transparent to-orange-500/10 blur-2xl pointer-events-none" />

            {/* Border Animation */}
            <div className="absolute inset-0 rounded-2xl border border-white/0 group-hover:border-white/10 transition-all duration-500" />

            {/* {t.featured && (
            <div className="absolute -top-3 right-6 text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-full bg-gradient-to-r from-[var(--brand-blue)] to-[var(--brand-orange)] text-background">
              Most Chosen
            </div>
          )} */}

            <div className="text-sm text-muted-foreground">
              {t.name}
            </div>

            <div className="mt-1 text-3xl font-semibold transition-all duration-500 group-hover:tracking-wide">
              {t.price}
            </div>

            <p className="mt-3 text-sm text-muted-foreground transition-all duration-500 group-hover:text-white/90">
              {t.desc}
            </p>

            <ul className="mt-6 space-y-3">
              {t.features.map((f) => (
                <li
                  key={f}
                  className="flex items-center gap-2 text-sm transition-all duration-300 group-hover:translate-x-2"
                >
                  <Check
                    className={`h-4 w-4 ${t.tint === "blue"
                      ? "text-[var(--brand-blue-glow)]"
                      : "text-[var(--brand-orange-glow)]"
                      }`}
                  />
                  {f}
                </li>
              ))}
            </ul>

            <a
              href="/contact"
              className={`mt-8 inline-flex items-center justify-center w-full py-3 rounded-xl font-semibold tracking-wide transition-all duration-500 hover:scale-105 hover:brightness-110 ${
                t.featured
                  ? "bg-[#0a1628] text-[#ffb86c] border border-[#ff8a00]/50 shadow-[0_0_18px_rgba(255,138,0,0.25)] hover:border-[#ff8a00]/90 hover:shadow-[0_0_28px_rgba(255,138,0,0.45)] hover:text-white hover:bg-[#0d1f3c]"
                  : "bg-[#0a1628] text-[#7dd3fc] border border-[#38bdf8]/40 shadow-[0_0_18px_rgba(56,189,248,0.25)] hover:border-[#38bdf8]/80 hover:shadow-[0_0_28px_rgba(56,189,248,0.45)] hover:text-white hover:bg-[#0d1f3c]"
              }`}
              style={{
                background: "linear-gradient(135deg, #0a1628 0%, #0d2137 100%)",
                letterSpacing: "0.04em",
              }}
            >
              Talk to us
            </a>
          </motion.div>
        ))}
      </div>
    </div>
    </section>


  );
}
