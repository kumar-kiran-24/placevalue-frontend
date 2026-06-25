
import { SiteShell } from "../components/site/SiteShell";
import { Reveal } from "../components/site/Reveal";



export default function AboutPage() {
  return (
    <SiteShell>
      <div className="relative overflow-hidden w-full">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-mesh opacity-90 pointer-events-none" />
        <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)] pointer-events-none" />
        <div className="absolute top-10 -left-20 w-80 h-80 rounded-full bg-[var(--brand-blue)]/30 blur-3xl animate-pulse-glow pointer-events-none" />
        <div className="absolute top-60 -right-20 w-96 h-96 rounded-full bg-[var(--brand-orange)]/25 blur-3xl animate-pulse-glow pointer-events-none" style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-40 left-10 w-[500px] h-[500px] rounded-full bg-[var(--brand-blue)]/15 blur-3xl animate-pulse-glow pointer-events-none" />

        <section className="relative pt-24 md:pt-36 pb-20 px-6 md:px-12">
          <div className="relative max-w-7xl mx-auto text-center">
            <Reveal delay={100}>
              <h1 className="mt-6 text-5xl sm:text-6xl md:text-[5.5rem] lg:text-[6.5rem] xl:text-[7rem] font-normal tracking-tight leading-[1.1] animate-fade-up whitespace-normal sm:whitespace-nowrap max-w-5xl mx-auto" style={{ fontFamily: 'var(--font-hero)', fontWeight: 300, animationDelay: "0.1s", opacity: 0.9 }}>
                <span className="block">We're closing the</span>
                <span className="block mt-1">last mile between</span>
                <span className="block mt-1 text-gradient">education and</span>
                <span className="block mt-1 text-gradient">employment.</span>
              </h1>
            </Reveal>
          </div>
        </section>

        {/* MISSION VISION VALUES */}
        <section className="relative px-6 md:px-12 py-24 border-t border-border/20 bg-surface/5">
          <div className="relative max-w-7xl mx-auto grid md:grid-cols-3 gap-5">
            <Reveal>
              <Card eyebrow="Mission" title="Make every graduate verifiably ready.">
                Convert classroom potential into measurable, recruiter-grade capability — at the
                scale of institutions, not individuals.
              </Card>
            </Reveal>
            <Reveal delay={100}>
              <Card eyebrow="Vision" title="The capability layer of higher education.">
                A world where readiness is continuous, transparent and portable — the way credit
                scores work for financial trust.
              </Card>
            </Reveal>
            <Reveal delay={200}>
              <Card eyebrow="Story" title="Built where industry meets institutions.">
                PlaceValue started inside the gap between syllabus and stand-up — and grew into
                the ecosystem that closes it.
              </Card>
            </Reveal>
          </div>
        </section>

        {/* VALUES */}
        <section className="relative px-6 md:px-12 py-24">
          <div className="relative max-w-7xl mx-auto">
            <Reveal>
              <h2 className="text-[clamp(2rem,4.2vw,3.6rem)] font-normal tracking-tight leading-[1.1] animate-fade-up whitespace-normal sm:whitespace-nowrap max-w-3xl" style={{ fontFamily: 'var(--font-hero)', fontWeight: 300, animationDelay: "0.1s", opacity: 0.9 }}>
                <span className="block">What we <span className="text-gradient">operate by.</span></span>
              </h2>
            </Reveal>
            <div className="mt-12 grid md:grid-cols-3 gap-4">
              {[
                { t: "Evidence over claims", d: "Capability is what we can measure — not what we can market." },
                { t: "Systems over efforts", d: "Outcomes scale only if the system does." },
                { t: "Students at the center", d: "Every signal serves the student first." },
              ].map((v, i) => {
                return (
                  <Reveal key={v.t} delay={i * 80}>
                    <div className="rounded-xl border border-border bg-surface/60 p-6 h-full">
                      <div className="text-[1.1rem] font-extrabold tracking-tight">{v.t}</div>
                      <p className="mt-1.5 text-[0.85rem] text-mid leading-relaxed">{v.d}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </SiteShell>
  );
}

function Card({
  eyebrow, title, children,
}: { eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-border bg-background/60 p-7 h-full hover:border-brand-blue/40 transition-colors">
      <div className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground">{eyebrow}</div>
      <div className="mt-2 text-[1.4rem] font-extrabold tracking-tight leading-tight">{title}</div>
      <p className="mt-4 text-[0.88rem] text-mid leading-relaxed">{children}</p>
    </div>
  );
}
