import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logoAsset from "../../assets/logo-main.png";
import { useState } from "react";

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    { label: "Home", href: "/" },
    { label: "TASKVERSE", href: "/taskverse" },
    // { label: "Ecosystem", href: "/ecosystem" },
    // { label: "Institutions", href: "/institutions" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];
  return (
    <header className="fixed top-0 inset-x-0 z-50 flex justify-center px-4 py-4">
      <nav className="glass-strong w-full max-w-6xl rounded-full px-6 py-3.5 flex items-center justify-between backdrop-blur-md">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img src={logoAsset} alt="PlaceValue" className="h-9 w-auto" />
        </Link>
        <div className="hidden md:flex items-center gap-4">
          {links.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              className="px-4 py-2 text-[0.95rem] text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-white/5"
            >
              {l.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-2">

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>

          {/* Desktop Sign In */}
          <a
            href="https://taskverse.placevalue.in/login"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block text-sm font-medium px-4 py-2 rounded-full bg-gradient-to-r from-[var(--brand-blue)] to-[var(--brand-orange)] text-background shadow-glow-blue hover:shadow-glow-orange transition-shadow"
          >
            Sign In
          </a>

        </div>
      </nav>
      {menuOpen && (
        <div className="md:hidden absolute top-20 left-4 right-4 rounded-3xl border border-white/10 bg-black/95 backdrop-blur-xl p-6">
          <div className="flex flex-col gap-4">

            {links.map((l) => (
              <Link
                key={l.href}
                to={l.href}
                onClick={() => setMenuOpen(false)}
                className="py-3 text-center text-white border-b border-white/10"
              >
                {l.label}
              </Link>
            ))}

            <a
              href="https://taskverse.placevalue.in/login"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="mt-3 text-center py-3 rounded-full bg-gradient-to-r from-[var(--brand-blue)] to-[var(--brand-orange)] text-black font-medium"
            >
              Sign In
            </a>

          </div>
        </div>
      )}
    </header>
  );
}
