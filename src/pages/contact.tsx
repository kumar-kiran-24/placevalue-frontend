
import { useState } from "react";
import { SiteShell } from "../components/site/SiteShell";
import { Reveal } from "../components/site/Reveal";
import { Eyebrow } from "../components/site/Eyebrow";
import { Building2, GraduationCap, Briefcase, Mail, ArrowRight, CheckCircle2 } from "lucide-react";



export default function ContactPage() {
  const [audience, setAudience] = useState<"institution" | "student" | "recruiter">("institution");
  const [sent, setSent] = useState(false);

  return (
    <SiteShell>
      <div className="relative overflow-hidden w-full">
        {/* Background Elements spanning the entire page */}
        <div className="absolute inset-0 bg-mesh opacity-90 pointer-events-none" />
        <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)] pointer-events-none" />
        <div className="absolute top-10 -left-20 w-80 h-80 rounded-full bg-[var(--brand-blue)]/30 blur-3xl animate-pulse-glow pointer-events-none" />
        <div className="absolute bottom-10 -right-20 w-96 h-96 rounded-full bg-[var(--brand-orange)]/25 blur-3xl animate-pulse-glow pointer-events-none" style={{ animationDelay: "2s" }} />

        <section className="relative pt-10 md:pt-14 pb-16 px-6 md:px-12">
          <div className="relative max-w-7xl mx-auto text-center">
            <Reveal delay={100}>
              <h1 className="mt-6 text-5xl sm:text-6xl md:text-[5.5rem] lg:text-[6.5rem] xl:text-[7rem] font-normal tracking-tight leading-[1.1] animate-fade-up whitespace-normal sm:whitespace-nowrap max-w-5xl mx-auto" style={{ fontFamily: 'var(--font-hero)', fontWeight: 300, animationDelay: "0.1s", opacity: 0.9 }}>
                <span className="block">Let's bring TASKVERSE</span>
                <span className="block mt-1">to your <span className="text-gradient">organisation.</span></span>
              </h1>
            </Reveal>
          </div>
        </section>

        <section className="relative px-6 md:px-12 pb-28">
          <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-8 items-start">
            <Reveal className="md:col-span-5">
              <div className="space-y-3">
                {[
                  { id: "institution", icon: Building2, t: "I'm an institution", d: "Universities, colleges, training arms." },
                  { id: "student", icon: GraduationCap, t: "I'm a student", d: "Join a PlaceValue program." },
                  { id: "recruiter", icon: Briefcase, t: "I'm a recruiter", d: "Hire from verified-ready talent pools." },
                ].map((o) => {
                  const Ic = o.icon;
                  const active = audience === o.id;
                  return (
                    <button
                      key={o.id}
                      type="button"
                      onClick={() => setAudience(o.id as typeof audience)}
                      className={`w-full text-left rounded-xl border px-5 py-4 flex items-start gap-3 transition-all ${active ? "border-brand-blue/40 bg-brand-blue/[0.06]" : "border-border bg-surface/40 hover:border-mid"
                        }`}
                    >
                      <Ic className={`size-5 mt-0.5 ${active ? "text-brand-blue-hi" : "text-mid"}`} />
                      <div className="min-w-0">
                        <div className={`text-[0.95rem] font-bold tracking-tight ${active ? "text-foreground" : "text-light"}`}>{o.t}</div>
                        <div className="text-[0.78rem] text-mid mt-0.5">{o.d}</div>
                      </div>
                      {active && <CheckCircle2 className="size-4 text-brand-blue-hi ml-auto mt-1 shrink-0" />}
                    </button>
                  );
                })}
              </div>

              <div className="mt-10 rounded-xl border border-border bg-surface/40 p-5">
                <div className="flex items-center gap-2 text-[0.7rem] font-mono text-mid">
                  <Mail className="size-3.5" /> direct
                </div>
                <a href="mailto:hello@placevalue.io" className="mt-2 block text-[1.1rem] font-semibold text-foreground hover:text-brand-blue-hi transition-colors">
                  hello@placevalue.io
                </a>
                <p className="mt-1 text-[0.78rem] text-mid">Responses within one business day.</p>
              </div>
            </Reveal>

            <Reveal delay={120} className="md:col-span-7">
              <form
                onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                className="rounded-2xl border border-border bg-surface/60 p-7 md:p-9"
              >
                {sent ? (
                  <div className="text-center py-12">
                    <CheckCircle2 className="size-10 text-signal-green mx-auto" />
                    <div className="mt-4 text-2xl font-extrabold tracking-tight">Thank you.</div>
                    <p className="mt-2 text-mid">We'll be in touch within one business day.</p>
                  </div>
                ) : (
                  <>
                    <div className="grid md:grid-cols-2 gap-4">
                      <Field label="Full name" name="name" required />
                      <Field label="Work email" name="email" type="email" required />
                      {audience === "institution" && <Field label="Institution" name="org" required />}
                      {audience === "recruiter" && <Field label="Company" name="org" required />}
                      {audience === "student" && <Field label="College / University" name="org" required />}
                      <Field label="Role" name="role" />
                    </div>
                    <div className="mt-4">
                      <label className="block text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-muted-foreground mb-2">
                        How can we help?
                      </label>
                      <textarea
                        name="msg"
                        rows={5}
                        className="w-full rounded-lg border border-border bg-background/60 px-4 py-3 text-[0.9rem] text-foreground placeholder:text-muted-foreground focus:border-brand-blue/60 focus:outline-none transition-colors resize-none"
                        placeholder="Tell us what you're trying to solve."
                      />
                    </div>
                    <button
                      type="submit"
                      className="mt-6 inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-gradient-brand text-white text-[0.92rem] font-semibold hover:opacity-90 transition-opacity"
                    >
                      Send message <ArrowRight className="size-4" />
                    </button>
                    <p className="mt-4 text-[0.72rem] text-muted-foreground">
                      By submitting you agree to our terms. We never share your data.
                    </p>
                  </>
                )}
              </form>
            </Reveal>
          </div>
        </section>
      </div>
    </SiteShell>
  );
}

function Field({
  label, name, type = "text", required = false,
}: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-muted-foreground mb-2">
        {label}{required && <span className="text-brand-orange-hi"> *</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full rounded-lg border border-border bg-background/60 px-4 py-3 text-[0.9rem] text-foreground placeholder:text-muted-foreground focus:border-brand-blue/60 focus:outline-none transition-colors"
      />
    </div>
  );
}
