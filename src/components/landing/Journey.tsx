import { SectionHeader } from "./Ecosystem";
import { motion } from "framer-motion";
import discoverIcon from "../../assets/icons/homepage/discover.png";
import learnIcon from "../../assets/icons/homepage/learn.png";
import buildIcon from "../../assets/icons/homepage/build.png";
import assessIcon from "../../assets/icons/homepage/assess.png";
import getHiredIcon from "../../assets/icons/homepage/get_hired.png";

const steps = [
  {
    n: "01",
    title: "Discover",
    desc: "Aptitude mapping and career exploration powered by AI.",
    image: discoverIcon,
  },
  {
    n: "02",
    title: "Learn",
    desc: "Industry-aligned tracks with mentor-led cohorts.",
    image: learnIcon,
  },
  {
    n: "03",
    title: "Build",
    desc: "Ship real-world projects reviewed by TASKVERSE agents.",
    image: buildIcon,
  },
  {
    n: "04",
    title: "Assess",
    desc: "Adaptive evaluations across 24 employability axes.",
    image: assessIcon,
  },
  {
    n: "05",
    title: "Get Hired",
    desc: "Verified profiles surfaced to 400+ recruiting partners.",
    image: getHiredIcon,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};
export function Journey() {
  return (
    <section id="journey" className="py-16 relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader title="From curious to career-ready." />
        <div className="relative mt-12">
          <div className="absolute top-10 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent hidden lg:block" />
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
          >
            {steps.map((s, i) => (
              <motion.div key={s.n} variants={itemVariants} className="relative group">
                <div className="relative glass rounded-3xl p-6 hover:border-white/20 transition-all duration-500 hover:bg-white/[0.04] hover:-translate-y-2 hover:shadow-[0_15px_35px_rgba(0,0,0,0.5)] cursor-pointer">
                  <motion.div 
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
                    className="inline-flex items-center justify-center h-24 w-24 rounded-2xl overflow-hidden bg-black border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.4)] transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] group-hover:border-white/20"
                  >
                    <img
                      src={s.image}
                      alt={s.title}
                      className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-[1.08]"
                    />
                  </motion.div>
                  <div className="mt-6 text-[11px] font-mono text-[var(--brand-orange)] tracking-widest uppercase">{s.n}</div>
                  <h3 className="text-xl font-bold mt-1 tracking-tight text-foreground/90 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/60 transition-all">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
