"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import SectionReveal from "@/components/SectionReveal";
import { certifications } from "@/lib/data";

export default function Certifications() {
  return (
    <SectionReveal className="px-6 py-24 md:px-8 md:py-28">
      <div id="certifications" className="mx-auto w-full max-w-6xl scroll-mt-24">
        <p className="text-xs uppercase tracking-[0.22em] text-accent">CERTIFICATIONS</p>
        <h2 className="mt-3 font-display text-4xl text-foreground md:text-5xl">Verified Learning</h2>

        <div className="mt-12 grid items-start gap-6 md:grid-cols-2">
          {certifications.map((cert) => (
            <motion.article
              key={`${cert.title}-${cert.issuer}`}
              className="group relative rounded-2xl border border-border bg-card p-6 transition-colors"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="font-display text-2xl text-foreground">{cert.title}</h3>
              <p className="mt-2 text-sm text-accent">{cert.issuer}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.1em] text-muted">{cert.issued}</p>

              <ul className="mt-5 list-disc space-y-1 pl-5 text-sm leading-relaxed text-muted">
                {cert.learnings.map((learning) => (
                  <li key={learning}>{learning}</li>
                ))}
              </ul>

              <div className="mt-6 flex items-center gap-4">
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${cert.title} credential`}
                  className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-3 py-2 text-sm text-foreground/85 transition-colors hover:border-accent/50 hover:text-accent"
                >
                  <span>Show credential</span>
                  <ExternalLink size={16} />
                </a>
              </div>

              <span className="pointer-events-none absolute inset-0 rounded-2xl border border-transparent transition-all duration-200 group-hover:border-accent/35 group-hover:shadow-accent" />
            </motion.article>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}
