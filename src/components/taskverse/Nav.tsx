import { motion } from "framer-motion";

export function Nav() {
  const links = ["Platform", "Agents", "Architecture", "Dashboards", "Impact"];
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="fixed top-4 left-1/2 z-50 -translate-x-1/2 w-[min(1200px,calc(100%-2rem))]"
    >
      <div className="glass-strong flex items-center justify-between px-5 py-3 rounded-2xl">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="relative inline-flex h-7 w-7 items-center justify-center rounded-lg bg-[var(--cyan)]/15 glow-cyan">
            <span className="h-2 w-2 rounded-full bg-[var(--cyan)] animate-pulse-glow" />
          </span>
          <span className="text-[15px] font-bold tracking-tight">TASKVERSE</span>
        </a>
        <nav className="hidden md:flex items-center gap-7 text-sm text-[var(--slate-1)]">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="hover:text-white transition-colors">{l}</a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button className="hidden sm:inline-flex h-9 px-3.5 text-sm rounded-lg text-[var(--slate-2)] hover:text-white transition">Sign in</button>
          <button className="h-9 px-4 text-sm rounded-lg bg-white text-[var(--bg-deep)] font-medium hover:bg-[var(--cyan-soft)] transition">Request Demo</button>
        </div>
      </div>
    </motion.header>
  );
}