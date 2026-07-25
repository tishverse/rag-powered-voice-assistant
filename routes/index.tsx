import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Shield, Leaf, Cpu, Star, Mic } from "lucide-react";
import hero from "@/assets/hero.jpg";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/site/ProductCard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aetherix Technologies — Smart Technology. Smarter Living." },
      { name: "description", content: "Discover premium laptops, smartwatches, earbuds, tablets and smart home devices from Aetherix Technologies." },
      { property: "og:title", content: "Aetherix — Smart Technology. Smarter Living." },
      { property: "og:description", content: "Premium consumer electronics designed for tomorrow." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 -z-10"
          style={{ background: "var(--gradient-hero)" }}
        />
        <div className="absolute inset-0 -z-10 opacity-30" style={{
          backgroundImage: "radial-gradient(circle at 20% 30%, oklch(0.62 0.24 258 / 0.5), transparent 60%), radial-gradient(circle at 80% 70%, oklch(0.75 0.18 250 / 0.4), transparent 60%)",
        }} />
        <div className="mx-auto max-w-7xl px-6 pt-20 pb-24 md:pt-32 md:pb-36 text-white">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <div className="inline-flex items-center gap-2 rounded-full glass-dark px-4 py-1.5 text-xs font-medium">
                <Sparkles className="h-3.5 w-3.5 text-electric-glow" />
                New: PulseWatch Pro is here
              </div>
              <h1 className="mt-6 text-5xl md:text-7xl font-bold leading-[1.05]">
                Smart Technology.
                <br />
                <span className="gradient-text">Smarter Living.</span>
              </h1>
              <p className="mt-6 text-lg text-white/70 max-w-lg">
                Aetherix builds premium consumer electronics that quietly disappear into your day —
                and elevate every moment of it.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/products" className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold btn-electric">
                  Explore Products <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/ai-voice" className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold glass-dark text-white hover:bg-white/10 transition-colors">
                  <Mic className="h-4 w-4" /> Meet Aetherix AI
                </Link>
              </div>
              <div className="mt-10 flex items-center gap-6 text-xs text-white/60">
                <div><div className="text-2xl font-bold text-white">2M+</div>Happy customers</div>
                <div><div className="text-2xl font-bold text-white">120+</div>Countries served</div>
                <div><div className="text-2xl font-bold text-white">4.9★</div>Average rating</div>
              </div>
            </div>
            <div className="relative animate-float">
              <img src={hero} alt="Aetherix devices" width={1600} height={1000} className="rounded-3xl shadow-2xl" />
              <div className="absolute -inset-4 -z-10 rounded-[2rem] blur-3xl opacity-40" style={{ background: "var(--gradient-electric)" }} />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <div>
            <div className="text-sm text-electric font-semibold uppercase tracking-wider">Featured</div>
            <h2 className="mt-2 text-4xl font-bold">Engineered to inspire.</h2>
          </div>
          <Link to="/products" className="text-sm font-semibold text-electric inline-flex items-center gap-1 hover:gap-2 transition-all">
            View all products <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.slice(0, 3).map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* WHY AETHERIX */}
      <section className="bg-surface py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-sm text-electric font-semibold uppercase tracking-wider">Why Aetherix</div>
            <h2 className="mt-2 text-4xl font-bold">Designed to earn your trust.</h2>
            <p className="mt-4 text-muted-foreground">Every product is engineered around four uncompromising principles.</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Cpu, title: "Cutting-Edge Silicon", desc: "In-house chips built for efficiency and raw performance." },
              { icon: Shield, title: "Private by Design", desc: "On-device intelligence keeps your data yours." },
              { icon: Leaf, title: "Sustainable Materials", desc: "100% recycled aluminum and plastic-free packaging." },
              { icon: Sparkles, title: "Seamless Ecosystem", desc: "All Aetherix devices speak the same language." },
            ].map((f) => (
              <div key={f.title} className="card-premium p-6">
                <div className="grid place-items-center h-12 w-12 rounded-xl bg-electric/10 text-electric">
                  <f.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-bold">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-sm text-electric font-semibold uppercase tracking-wider">Loved by millions</div>
          <h2 className="mt-2 text-4xl font-bold">The reviews are in.</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            { name: "Sarah L.", role: "Product Designer", quote: "The AeroBook X14 replaced my entire studio setup. It's absurdly light and the display is a dream." },
            { name: "Marcus T.", role: "Runner", quote: "PulseWatch Pro's health insights actually changed how I train. Best purchase this year." },
            { name: "Aisha K.", role: "Musician", quote: "EchoBuds Max sound better than headphones twice the price. The ANC is unreal." },
          ].map((t) => (
            <div key={t.name} className="card-premium p-6">
              <div className="flex text-electric mb-3">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="text-sm leading-relaxed">"{t.quote}"</p>
              <div className="mt-5 pt-5 border-t border-border">
                <div className="font-semibold text-sm">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* AI SUPPORT BANNER */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="relative overflow-hidden rounded-3xl p-10 md:p-16 text-white" style={{ background: "var(--gradient-hero)" }}>
          <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full blur-3xl opacity-60" style={{ background: "var(--gradient-electric)" }} />
          <div className="relative grid md:grid-cols-[1fr_auto] gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full glass-dark px-3 py-1 text-xs font-medium">
                <Mic className="h-3 w-3" /> Aetherix AI Assistant
              </div>
              <h2 className="mt-4 text-3xl md:text-5xl font-bold">Instant answers, 24/7.</h2>
              <p className="mt-4 text-white/70 max-w-xl">
                Talk to our AI assistant to get help with your device, track an order, or discover a new product — no waiting.
              </p>
            </div>
            <Link to="/ai-voice" className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold bg-white text-ink hover:bg-white/90 transition-colors">
              Try AI Voice <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-24 text-center">
        <h2 className="text-4xl md:text-5xl font-bold">Ready to upgrade your everyday?</h2>
        <p className="mt-4 text-muted-foreground max-w-xl mx-auto">Free shipping worldwide. 30-day returns. 2-year warranty.</p>
        <div className="mt-8 flex justify-center gap-3 flex-wrap">
          <Link to="/products" className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold btn-electric">
            Shop All Products <ArrowRight className="h-4 w-4" />
          </Link>
          <Link to="/about" className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold border border-border hover:border-electric hover:text-electric transition-colors">
            Our Story
          </Link>
        </div>
      </section>
    </>
  );
}
