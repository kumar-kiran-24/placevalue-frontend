import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Logo } from "../../components/landing/Logo";
import favicon from "../../assets/favicon.png";

export function FinalCta() {
  return (
    <section id="cta" className="py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative glass-strong rounded-3xl p-10 sm:p-16 text-center overflow-hidden">
          <div className="absolute inset-0 bg-mesh opacity-70" />
          <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
          <div className="relative">
            <h2 className="text-4xl sm:text-6xl font-bold tracking-tight max-w-3xl mx-auto">
              The future of placement <span className="text-gradient-brand">starts here.</span>
            </h2>
            <p className="mt-5 text-lg text-muted-foreground max-w-xl mx-auto">
              Whether you're an institution, enterprise, or training partner, we'll help you transform ideas into measurable outcomes.            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href="/contact" className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[var(--brand-blue)] to-[var(--brand-orange)] text-background font-medium shadow-glow-blue">
                Contact Us<ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

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
