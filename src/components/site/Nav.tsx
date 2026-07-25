import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Zap } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/about", label: "About" },
  { to: "/support", label: "Support" },
  { to: "/ai-voice", label: "AI Voice" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-display font-bold text-lg">
          <span className="grid place-items-center h-9 w-9 rounded-xl btn-electric">
            <Zap className="h-5 w-5" strokeWidth={2.5} />
          </span>
          <span>Aetherix</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm font-medium text-foreground/80 hover:text-electric transition-colors"
              activeProps={{ className: "text-electric" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <Link
          to="/products"
          className="hidden md:inline-flex items-center rounded-full px-5 py-2 text-sm font-semibold btn-electric"
        >
          Shop Now
        </Link>
        <button
          className="md:hidden p-2 rounded-lg hover:bg-muted"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden glass border-t border-border">
          <div className="px-6 py-4 flex flex-col gap-3">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="text-sm font-medium py-2"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
