import { motion } from "framer-motion";
import  {useState , useEffect } from "react";

/**
 * Large animated intelligence sphere — used in the hero AND in the capability core section.
 */
export function IntelligenceSphere({
  size = 560,
  labels,
  centerLabel = "TASKVERSE",
  centerSub = "Capability Core",
}: {
  size?: number;
  labels?: string[];
  centerLabel?: string;
  centerSub?: string;
}) {
 const [isMobile, setIsMobile] = useState(false);
 const [currentSize, setCurrentSize] = useState(size);

  useEffect(() => {
    const checkScreen = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (mobile) {
        setCurrentSize(Math.min(340, window.innerWidth - 32));
      } else {
        setCurrentSize(size);
      }
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, [size]);
  const orbitLabels = isMobile
    ? [
      "AI",
      "Coding",
      "Cloud",
      "Data Science",
      "Leadership",
      "Aptitude",
    ]
    : [
      "AI",
      "Coding",
      "Communication",
      "Leadership",
      "Cloud",
      "Problem Solving",
      "Data Science",
      "Reasoning",
      "Collaboration",
      "Aptitude",
    ];

  return (
    <div
      className="relative mx-auto"
      style={{ width: currentSize, height: currentSize, maxWidth: "100%" }}
    >
      {/* outer halo */}
      <div
        className="absolute inset-0 rounded-full animate-pulse-glow"
        style={{
          background:
            "radial-gradient(closest-side, rgba(0,194,255,0.35), rgba(0,194,255,0.05) 60%, transparent 75%)",
          filter: "blur(8px)",
        }}
      />
      {/* faint grid sphere */}
      <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full opacity-60 animate-spin-slow" style={{ animationDuration: '100s' }}>
        <defs>
          <radialGradient id="sphereFill" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#0A1628" stopOpacity="0.95" />
            <stop offset="60%" stopColor="#050816" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#050816" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="ringStroke" x1="0" x2="1">
            <stop offset="0%" stopColor="#00C2FF" stopOpacity="0.0" />
            <stop offset="50%" stopColor="#4CC9FF" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#00C2FF" stopOpacity="0.0" />
          </linearGradient>
        </defs>
        <circle cx="200" cy="200" r="160" fill="url(#sphereFill)" />
        {/* latitude lines */}
        {[0, 1, 2, 3, 4].map((i) => (
          <ellipse
            key={`lat-${i}`}
            cx="200"
            cy="200"
            rx="160"
            ry={20 + i * 30}
            fill="none"
            stroke="rgba(148,163,184,0.18)"
            strokeWidth="0.6"
          />
        ))}
        {/* longitude lines */}
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <ellipse
            key={`lon-${i}`}
            cx="200"
            cy="200"
            rx={20 + i * 26}
            ry="160"
            fill="none"
            stroke="rgba(148,163,184,0.14)"
            strokeWidth="0.6"
          />
        ))}
      </svg>

      {/* rotating ring 1 */}
      <div className={`absolute ${isMobile ? 'inset-3' : 'inset-6'} rounded-full animate-spin-slow`}
        style={{
          background:
            "conic-gradient(from 0deg, transparent 0 70%, rgba(0,194,255,0.9) 78%, transparent 88%)",
          WebkitMask: "radial-gradient(closest-side, transparent calc(100% - 2px), #000 calc(100% - 1px))",
                mask: "radial-gradient(closest-side, transparent calc(100% - 2px), #000 calc(100% - 1px))",
        }}
      />
      {/* rotating ring 2 (reverse, orange) */}
      <div className={`absolute ${isMobile ? 'inset-8' : 'inset-16'} rounded-full animate-spin-rev`}
        style={{
          background:
            "conic-gradient(from 0deg, transparent 0 80%, rgba(255,159,67,0.85) 86%, transparent 94%)",
          WebkitMask: "radial-gradient(closest-side, transparent calc(100% - 2px), #000 calc(100% - 1px))",
                mask: "radial-gradient(closest-side, transparent calc(100% - 2px), #000 calc(100% - 1px))",
        }}
      />

      {/* orbiting nodes + labels */}
      <div className="absolute inset-0 animate-spin-slow" style={{ animationDuration: "44s" }}>
        {orbitLabels.map((label, i) => {
          const angle = (i / orbitLabels.length) * Math.PI * 2;
          const r = currentSize / 2 - (isMobile ? 12 : 18);
          const x = Math.cos(angle) * r + currentSize / 2;
          const y = Math.sin(angle) * r + currentSize / 2;
          return (
            <div
              key={label}
              className="absolute"
              style={{ left: x, top: y, transform: "translate(-50%, -50%)" }}
            >
              <div
                className="flex items-center gap-1 md:gap-1.5 rounded-full px-2 md:px-2.5 py-1 text-[10px] md:text-[14px] tracking-wider uppercase glass animate-spin-rev"
                style={{ animationDuration: "44s" }}
              >
                <span className="h-1 md:h-1.5 w-1 md:w-1.5 rounded-full bg-[var(--cyan)] animate-blink" />
                <span className="text-[var(--slate-2)] whitespace-nowrap">{label}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* glowing core */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div 
          className="relative rounded-full glass-strong glow-cyan flex items-center justify-center text-center"
          style={{ width: currentSize * 0.45, height: currentSize * 0.45 }}
        >
          <div
            className="absolute inset-0 rounded-full animate-pulse-glow"
            style={{
              background:
                "radial-gradient(closest-side, rgba(0,194,255,0.55), transparent 70%)",
            }}
          />
          <div className="relative px-2">
            <div className="text-[12px] md:text-[20px] tracking-[0.25em] text-[var(--cyan-soft)]">CORE</div>
            <div className="mt-0.5 md:mt-1 text-[13px] md:text-base font-bold tracking-tight leading-tight">{centerLabel}</div>
            <div className="text-[10px] md:text-[15px] text-[var(--slate-1)] mt-0.5 leading-tight">{centerSub}</div>
          </div>
        </div>
      </motion.div>

      {/* floating particles */}
      {Array.from({ length: 14 }).map((_, i) => {
        const top = (i * 53) % 100;
        const left = (i * 37) % 100;
        const delay = (i % 7) * 0.5;
        return (
          <span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-[var(--cyan-soft)] animate-float"
            style={{
              top: `${top}%`,
              left: `${left}%`,
              opacity: 0.55,
              animationDelay: `${delay}s`,
              boxShadow: "0 0 12px rgba(76,201,255,0.8)",
            }}
          />
        );
      })}
    </div>
  );
}