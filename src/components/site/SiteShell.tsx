import type { ReactNode } from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground" style={{ fontFamily: 'var(--font-body)' }}>
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
