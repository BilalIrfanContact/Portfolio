"use client";

import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";
import { FormEvent, useState } from "react";
import SectionReveal from "@/components/SectionReveal";
import { owner } from "@/lib/data";

type FormState = {
  name: string;
  email: string;
  message: string;
};

const initialForm: FormState = {
  name: "",
  email: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setError("EmailJS is not configured yet. Add keys in .env.local to enable sending.");
      return;
    }

    try {
      setLoading(true);
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          to_name: owner.name,
        },
        { publicKey },
      );

      setSent(true);
      setForm(initialForm);
    } catch {
      setError("Something went wrong while sending. Please try again in a moment.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <SectionReveal className="px-6 py-24 md:px-8 md:py-28">
      <div id="contact" className="mx-auto w-full max-w-6xl scroll-mt-24">
        <p className="text-xs uppercase tracking-[0.22em] text-accent">CONTACT</p>
        <h2 className="mt-3 font-display text-4xl text-foreground md:text-5xl">Let&apos;s work together</h2>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <div>
            <p className="max-w-[60ch] text-base leading-relaxed text-muted md:text-lg">
              Whether you&apos;re looking to hire, collaborate, or build something together - I&apos;d love to hear
              from you.
            </p>

            <div className="mt-7 space-y-4">
              <a
                href={`mailto:${owner.email}`}
                className="inline-flex items-center gap-3 text-foreground/85 transition-colors hover:text-accent"
              >
                <Mail size={18} />
                <span>{owner.email}</span>
              </a>
              <a
                href={owner.linkedIn}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 text-foreground/85 transition-colors hover:text-accent"
              >
                <Linkedin size={18} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6">
            {sent ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-xl border border-accent/40 bg-accent/5 p-5"
              >
                <h3 className="font-display text-2xl text-foreground">Message sent</h3>
                <p className="mt-2 text-sm text-muted">Thanks for reaching out. I&apos;ll get back to you shortly.</p>
              </motion.div>
            ) : (
              <form className="space-y-4" onSubmit={handleSubmit}>
                <label className="block">
                  <span className="mb-2 block text-sm text-foreground/80">Name</span>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
                    className="w-full rounded-xl border border-white/10 bg-background/70 px-4 py-2.5 text-foreground outline-none transition-colors placeholder:text-muted/60 focus:border-accent/45"
                    placeholder="Your name"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm text-foreground/80">Email</span>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
                    className="w-full rounded-xl border border-white/10 bg-background/70 px-4 py-2.5 text-foreground outline-none transition-colors placeholder:text-muted/60 focus:border-accent/45"
                    placeholder="you@example.com"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm text-foreground/80">Message</span>
                  <textarea
                    rows={4}
                    required
                    value={form.message}
                    onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
                    className="w-full rounded-xl border border-white/10 bg-background/70 px-4 py-2.5 text-foreground outline-none transition-colors placeholder:text-muted/60 focus:border-accent/45"
                    placeholder="Tell me about your project"
                  />
                </label>

                {error && <p className="text-sm text-red-300">{error}</p>}

                <button
                  type="submit"
                  disabled={loading}
                  className="group relative inline-flex w-full items-center justify-center overflow-hidden rounded-full bg-accent px-6 py-3 text-sm font-semibold text-background transition-opacity hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <span className="relative z-10">{loading ? "Sending..." : "Send Message"}</span>
                  <span className="pointer-events-none absolute inset-0 -translate-x-[120%] bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.28),transparent)] transition-transform duration-500 group-hover:translate-x-[120%]" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}
