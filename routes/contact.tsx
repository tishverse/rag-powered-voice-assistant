import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Clock, Twitter, Instagram, Youtube, Linkedin } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Aetherix Technologies" },
      { name: "description", content: "Get in touch with Aetherix Technologies. Email, phone, office address and support hours." },
      { property: "og:title", content: "Contact Aetherix" },
      { property: "og:description", content: "We'd love to hear from you." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <div className="text-center max-w-2xl mx-auto">
        <div className="text-sm text-electric font-semibold uppercase tracking-wider">Get in touch</div>
        <h1 className="mt-2 text-5xl font-bold">Let's talk.</h1>
        <p className="mt-4 text-muted-foreground">Have a question, an idea, or just want to say hi? We'd love to hear from you.</p>
      </div>

      <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.5fr]">
        {/* Contact info */}
        <div className="space-y-4">
          {[
            { icon: Mail, label: "Email", value: "hello@aetherix.tech" },
            { icon: Phone, label: "Phone", value: "+1 (415) 555-0142" },
            { icon: MapPin, label: "Office", value: "2450 Innovation Way, Palo Alto, CA 94304" },
            { icon: Clock, label: "Business Hours", value: "Mon–Fri: 9AM – 6PM PT · Sat: 10AM – 4PM PT" },
          ].map((i) => (
            <div key={i.label} className="card-premium p-5 flex gap-4">
              <div className="grid place-items-center h-11 w-11 rounded-xl bg-electric/10 text-electric shrink-0">
                <i.icon className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <div className="text-xs text-muted-foreground uppercase tracking-wider">{i.label}</div>
                <div className="mt-0.5 font-medium">{i.value}</div>
              </div>
            </div>
          ))}
          <div className="card-premium p-5">
            <div className="text-xs text-muted-foreground uppercase tracking-wider mb-3">Follow us</div>
            <div className="flex gap-2">
              {[Twitter, Instagram, Youtube, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="grid place-items-center h-10 w-10 rounded-full bg-muted hover:bg-electric hover:text-white transition-colors">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Form */}
        <form className="card-premium p-8" onSubmit={(e) => { e.preventDefault(); alert("Thanks! We'll be in touch."); }}>
          <h2 className="text-2xl font-bold">Send us a message</h2>
          <p className="mt-1 text-sm text-muted-foreground">We usually reply within 4 business hours.</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <Field label="First name" placeholder="Jane" />
            <Field label="Last name" placeholder="Doe" />
            <Field label="Email" type="email" placeholder="jane@email.com" className="md:col-span-2" />
            <Field label="Subject" placeholder="How can we help?" className="md:col-span-2" />
            <div className="md:col-span-2">
              <label className="text-sm font-medium">Message</label>
              <textarea rows={5} placeholder="Tell us more..." className="mt-1.5 w-full rounded-2xl bg-background border border-border px-4 py-3 text-sm focus:outline-none focus:border-electric" />
            </div>
          </div>
          <button className="mt-6 w-full rounded-full py-3 text-sm font-semibold btn-electric">Send Message</button>
        </form>
      </div>
    </div>
  );
}

function Field({ label, className = "", ...rest }: { label: string; className?: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className={className}>
      <label className="text-sm font-medium">{label}</label>
      <input {...rest} className="mt-1.5 w-full rounded-full bg-background border border-border px-4 py-2.5 text-sm focus:outline-none focus:border-electric" />
    </div>
  );
}
