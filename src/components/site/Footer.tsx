import { Link } from "react-router-dom";
import { Logo } from "./Logo";

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
              head="Programs"
              items={[
            
                { to: "/taskverse", label: "TASKVERSE" },
              ]}
            />
            <FCol
              head="Institutions"
              items={[
                { to: "/institutions", label: "Partner With Us" },
                { to: "/programs", label: "Our Programs" },
                { to: "/contact", label: "Get In Touch" },
              ]}
            />
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
          <p>© {new Date().getFullYear()} PlaceValue.</p>
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
