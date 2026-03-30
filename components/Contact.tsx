"use client";

import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { FormEvent, ReactNode, useState } from "react";
import RedditIcon from "@/components/RedditIcon";
import SectionReveal from "@/components/SectionReveal";
import { owner } from "@/lib/data";

type ContactLinkProps = {
  href: string;
  label: string;
  icon: ReactNode;
  external?: boolean;
};

const contactLinkClasses =
  "terminal-panel flex items-center gap-3 px-4 py-3 text-foreground/85 transition-colors hover:border-accent/35 hover:text-accent";

const fieldClasses =
  "w-full border border-border bg-[#071007] px-4 py-2.5 text-foreground outline-none transition-colors placeholder:text-muted/80 focus:border-accent/80 focus:bg-[#091409]";

function ContactLink({ href, label, icon, external = false }: ContactLinkProps) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      className={contactLinkClasses}
    >
      {icon}
      <span>{label}</span>
    </a>
  );
}

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    if (!name || !email || !message) {
      setError("Please fill in all fields before sending.");
      return;
    }

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
          name,
          from_name: name,
          email,
          from_email: email,
          reply_to: email,
          message,
          to_name: owner.name,
        },
        { publicKey },
      );

      setSent(true);
      event.currentTarget.reset();
    } catch {
      setError("Something went wrong while sending. Please try again in a moment.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <SectionReveal className="px-6 py-24 md:px-8 md:py-28">
      <div id="contact" className="mx-auto w-full max-w-6xl scroll-mt-24">
        <p className="text-xs tracking-[0.12em] text-accent">$ ./contact --open</p>
        <h2 className="mt-3 font-display text-4xl text-foreground md:text-5xl">Let&apos;s work together</h2>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <div>
            <p className="max-w-[60ch] text-base leading-relaxed text-muted md:text-lg">
              Whether you&apos;re looking to hire, collaborate, or build something together - I&apos;d love to hear
              from you.
            </p>

            <div className="mt-7 grid gap-3">
              <ContactLink href={`mailto:${owner.email}`} label={owner.email} icon={<Mail size={18} />} />
              <ContactLink href={owner.linkedIn} label="LinkedIn" icon={<Linkedin size={18} />} external />
              <ContactLink href={owner.github} label="GitHub" icon={<Github size={18} />} external />
              <ContactLink href={owner.reddit} label="Reddit" icon={<RedditIcon size={18} />} external />
              <ContactLink href={owner.x} label="X" icon={<Twitter size={18} />} external />
            </div>
          </div>

          <div className="terminal-panel p-6">
            {sent ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="terminal-panel border-accent/40 bg-accent/5 p-5"
              >
                <h3 className="font-display text-2xl text-foreground">Message sent</h3>
                <p className="mt-2 text-sm text-muted">Thanks for reaching out. I&apos;ll get back to you shortly.</p>
              </motion.div>
            ) : (
              <form className="space-y-4" onSubmit={handleSubmit}>
                <label className="block">
                  <span className="mb-2 block text-sm text-foreground/80">Name</span>
                  <input
                    name="name"
                    type="text"
                    required
                    className={fieldClasses}
                    placeholder="Your name"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm text-foreground/80">Email</span>
                  <input
                    name="email"
                    type="email"
                    required
                    className={fieldClasses}
                    placeholder="you@example.com"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm text-foreground/80">Message</span>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    className={fieldClasses}
                    placeholder="Share your thoughts"
                  />
                </label>

                {error && <p className="text-sm text-red-300">{error}</p>}

                <button
                  type="submit"
                  disabled={loading}
                  className="terminal-btn inline-flex w-full items-center justify-center px-6 py-3 text-sm font-semibold disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <span className="relative z-10">{loading ? "sending..." : "./send-message"}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}
