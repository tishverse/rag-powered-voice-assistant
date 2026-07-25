import { Link } from "@tanstack/react-router";
import { Zap, Twitter, Instagram, Youtube, Linkedin, Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 font-display font-bold text-lg">
            <span className="grid place-items-center h-9 w-9 rounded-xl btn-electric">
              <Zap className="h-5 w-5" strokeWidth={2.5} />
            </span>
            Aetherix
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-xs">
            Smart Technology. Smarter Living. Designed for the way you live tomorrow.
          </p>
          <div className="mt-6 flex gap-3">
            {[Twitter, Instagram, Youtube, Linkedin, Github].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="grid place-items-center h-9 w-9 rounded-full bg-card border border-border hover:text-electric hover:border-electric transition-colors"
                aria-label="Social"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-4">Products</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/products" className="hover:text-electric">AeroBook X14</Link></li>
            <li><Link to="/products" className="hover:text-electric">PulseWatch Pro</Link></li>
            <li><Link to="/products" className="hover:text-electric">EchoBuds Max</Link></li>
            <li><Link to="/products" className="hover:text-electric">VisionPad 11</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-electric">About Us</Link></li>
            <li><Link to="/support" className="hover:text-electric">Support</Link></li>
            <li><Link to="/contact" className="hover:text-electric">Contact</Link></li>
            <li><Link to="/ai-voice" className="hover:text-electric">AI Assistant</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-4">Newsletter</h4>
          <p className="text-sm text-muted-foreground mb-3">Get updates on new launches.</p>
          <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="you@email.com"
              className="flex-1 rounded-full px-4 py-2 text-sm bg-card border border-border focus:outline-none focus:border-electric"
            />
            <button className="rounded-full px-4 py-2 text-sm font-semibold btn-electric">Join</button>
          </form>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Aetherix Technologies. All rights reserved.</p>
          <p>Designed in California. Built for the world.</p>
        </div>
      </div>
    </footer>
  );
}
