import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { BookOpen, ShieldCheck, RotateCcw, Truck, LifeBuoy, Wrench, ChevronDown, Search } from "lucide-react";

export const Route = createFileRoute("/support")({
  head: () => ({
    meta: [
      { title: "Support Center — Aetherix" },
      { name: "description", content: "FAQs, product manuals, warranty, troubleshooting, returns and shipping for all Aetherix devices." },
      { property: "og:title", content: "Aetherix Support" },
      { property: "og:description", content: "Get help with your Aetherix device." },
    ],
  }),
  component: Support,
});

const categories = [
  { icon: BookOpen, title: "Product Manuals", desc: "Setup guides & user manuals for every device." },
  { icon: ShieldCheck, title: "Warranty", desc: "2-year limited warranty on all Aetherix products." },
  { icon: Wrench, title: "Troubleshooting", desc: "Step-by-step fixes for common issues." },
  { icon: RotateCcw, title: "Returns", desc: "30-day free returns, no questions asked." },
  { icon: Truck, title: "Shipping Info", desc: "Free worldwide shipping on orders over $50." },
  { icon: LifeBuoy, title: "Contact Support", desc: "Reach a real human — response within 4 hours." },
];

const faqs = [
  { q: "How long is the warranty on Aetherix products?", a: "All Aetherix devices include a 2-year limited warranty covering manufacturing defects. Extended AetherixCare+ coverage is available for up to 4 years." },
  { q: "What's your return policy?", a: "You can return any product within 30 days of delivery for a full refund. Returns are free — we cover shipping both ways." },
  { q: "Do you offer international shipping?", a: "Yes. We ship to 120+ countries with free shipping on orders over $50. Standard delivery is 3–7 business days." },
  { q: "How do I pair my PulseWatch with my phone?", a: "Download the Aetherix Life app, open it, and hold your watch near your phone. Setup takes under 60 seconds." },
  { q: "Are Aetherix products water resistant?", a: "PulseWatch Pro is 10ATM rated. EchoBuds Max is IP54. AeroBook and VisionPad are not water resistant — please avoid liquid contact." },
  { q: "How can I recycle my old device?", a: "Every Aetherix box includes a prepaid return label for your old electronics. We'll recycle them responsibly at no cost." },
];

function Support() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div>
      <section className="text-white" style={{ background: "var(--gradient-hero)" }}>
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <h1 className="text-5xl md:text-6xl font-bold">Support Center</h1>
          <p className="mt-4 text-white/70 text-lg">We're here to help you get the most out of every Aetherix device.</p>
          <div className="mt-8 glass-dark rounded-full p-2 pl-5 flex items-center gap-3 max-w-xl mx-auto">
            <Search className="h-4 w-4 text-white/60" />
            <input placeholder="Search articles, manuals, guides..." className="flex-1 bg-transparent outline-none placeholder:text-white/40 text-sm" />
            <button className="rounded-full px-5 py-2 text-sm font-semibold btn-electric">Search</button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => (
            <div key={c.title} className="card-premium p-6 cursor-pointer">
              <div className="grid place-items-center h-12 w-12 rounded-xl bg-electric/10 text-electric">
                <c.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-bold">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-20">
        <div className="text-center mb-10">
          <div className="text-sm text-electric font-semibold uppercase tracking-wider">FAQ</div>
          <h2 className="mt-2 text-4xl font-bold">Frequently asked questions</h2>
        </div>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div key={f.q} className="card-premium overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="font-semibold pr-4">{f.q}</span>
                <ChevronDown className={`h-5 w-5 shrink-0 transition-transform ${open === i ? "rotate-180 text-electric" : ""}`} />
              </button>
              {open === i && (
                <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed animate-fade-up">{f.a}</div>
              )}
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">Still need help?</p>
          <Link to="/contact" className="mt-4 inline-flex items-center rounded-full px-6 py-3 text-sm font-semibold btn-electric">Contact Support</Link>
        </div>
      </section>
    </div>
  );
}
