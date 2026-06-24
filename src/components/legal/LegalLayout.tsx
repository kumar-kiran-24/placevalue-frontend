import { useEffect, useState, type ReactNode } from "react";
import { Footer } from "../site/Footer";


export interface LegalSection {
  id: string;
  title: string;
  content: ReactNode;
}

interface LegalLayoutProps {
  title: string;
  subtitle: string;
  lastUpdated: string;
  sections: LegalSection[];
} 

export function LegalLayout({ title, subtitle, lastUpdated, sections }: LegalLayoutProps) {
  const [activeId, setActiveId] = useState(sections[0]?.id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveId(e.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 },
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [sections]);

  return (
    <div className="min-h-screen pv-bg-glow text-[#E6EAF2]">
      {/* Header */}
      {/* <header className="sticky top-0 z-40 backdrop-blur-xl bg-[#06080F]/70 border-b border-white/5">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="PlaceValue" className="h-9 w-auto" />
          </Link>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-white/70">
            <Link to="/privacy" className="hover:text-white transition-colors" activeProps={{ className: "text-white" }}>
              Privacy
            </Link>
            <Link to="/terms-and-conditions" className="hover:text-white transition-colors" activeProps={{ className: "text-white" }}>
              Terms
            </Link>
          </nav>
        </div>
      </header> */}

      {/* Hero */}
      <section className="mx-auto max-w-[1100px] px-6 pt-16 pb-10 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-[#00B2F7] mb-4"></p>
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
          <span className="pv-text-gradient">{title}</span>
        </h1>
        <p className="mt-4 text-base md:text-lg text-white/65 max-w-2xl mx-auto">{subtitle}</p>
        <p className="mt-3 text-xs text-white/40">Last updated: {lastUpdated}</p>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-[1200px] px-6 pb-24 grid grid-cols-1 lg:grid-cols-[260px_minmax(0,900px)] gap-10 justify-center">
        {/* TOC */}
        <aside className="hidden lg:block">
          <div className="sticky top-24 pv-glass p-5">
            <p className="text-xs uppercase tracking-widest text-white/40 mb-3">On this page</p>
            <ul className="space-y-2 text-sm">
              {sections.map((s, i) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className={`block py-1 border-l-2 pl-3 transition-colors ${
                      activeId === s.id
                        ? "border-[#00B2F7] text-white"
                        : "border-white/10 text-white/55 hover:text-white hover:border-white/30"
                    }`}
                  >
                    <span className="text-white/40 mr-2">{String(i + 1).padStart(2, "0")}</span>
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Sections */}
        <article className="space-y-6 scroll-smooth">
          {sections.map((s, i) => (
            <section key={s.id} id={s.id} className="pv-glass p-7 md:p-9 scroll-mt-28">
              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-sm font-mono text-[#FA8927]">{String(i + 1).padStart(2, "0")}</span>
                <h2 className="text-xl md:text-2xl font-semibold text-white">{s.title}</h2>
              </div>
              <div className="prose-legal text-white/75 leading-relaxed space-y-3 text-[15px]">
                {s.content}
              </div>
            </section>
          ))}
        </article>
      </section>
          <Footer />
    </div>
  );
}
