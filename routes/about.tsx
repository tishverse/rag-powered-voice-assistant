import { createFileRoute } from "@tanstack/react-router";
import { Rocket, Eye, Lightbulb, Leaf } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Aetherix Technologies" },
      { name: "description", content: "The story, mission and philosophy behind Aetherix Technologies — a consumer electronics company designing the future of everyday tech." },
      { property: "og:title", content: "About Aetherix" },
      { property: "og:description", content: "Our story, mission and sustainability commitment." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div>
      <section className="relative overflow-hidden text-white" style={{ background: "var(--gradient-hero)" }}>
        <div className="mx-auto max-w-5xl px-6 py-24 text-center">
          <div className="text-sm text-electric-glow font-semibold uppercase tracking-wider">About Us</div>
          <h1 className="mt-3 text-5xl md:text-6xl font-bold">Technology, made human.</h1>
          <p className="mt-6 text-white/70 max-w-2xl mx-auto text-lg">
            Founded in 2016 in Palo Alto, Aetherix Technologies started with a simple belief:
            the best tech disappears into your life.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 space-y-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-sm text-electric font-semibold uppercase tracking-wider">Our Story</div>
            <h2 className="mt-2 text-3xl font-bold">From a garage to global.</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              What began as three engineers sketching circuit boards in a Palo Alto garage has grown
              into a company shipping devices to over 120 countries. We started by asking one question:
              why does most consumer tech still feel so complicated?
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Every Aetherix product is our answer — thoughtful, tactile, and quietly powerful.
            </p>
          </div>
          <div className="card-premium aspect-square grid place-items-center text-8xl font-bold gradient-text">2016</div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            { icon: Rocket, title: "Mission", desc: "Build the world's most delightful and dependable everyday devices — accessible to everyone, everywhere." },
            { icon: Eye, title: "Vision", desc: "A world where technology enhances human potential without demanding attention." },
            { icon: Lightbulb, title: "Innovation Philosophy", desc: "We invest 22% of revenue into R&D, obsessing over the last 5% of every product." },
            { icon: Leaf, title: "Sustainability", desc: "Carbon-neutral by 2028. 100% recycled aluminum. Plastic-free packaging across the entire lineup." },
          ].map((v) => (
            <div key={v.title} className="card-premium p-8">
              <div className="grid place-items-center h-14 w-14 rounded-2xl bg-electric/10 text-electric">
                <v.icon className="h-7 w-7" />
              </div>
              <h3 className="mt-5 text-2xl font-bold">{v.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>

        <div className="rounded-3xl p-10 md:p-16 text-white text-center" style={{ background: "var(--gradient-hero)" }}>
          <h2 className="text-3xl md:text-4xl font-bold">"The best technology is invisible."</h2>
          <p className="mt-4 text-white/60">— Emil Chen, Co-founder & CEO</p>
        </div>
      </section>
    </div>
  );
}
