"use client";

import { ExternalLink } from "lucide-react";
import SectionReveal from "@/components/SectionReveal";
import { certifications } from "@/lib/data";

export default function Certifications() {
  return (
    <SectionReveal className="px-6 py-24 md:px-8 md:py-28">
      <div id="certifications" className="mx-auto w-full max-w-6xl scroll-mt-24">
        <p className="text-xs uppercase tracking-[0.22em] text-accent">CERTIFICATIONS</p>
        <h2 className="mt-3 font-display text-4xl text-foreground md:text-5xl">Verified learning</h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {certifications.map((cert) => (
            <a
              key={`${cert.title}-${cert.issuer}`}
              href={cert.credentialUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-border bg-card p-6 transition-colors duration-200 hover:border-accent/35"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-display text-2xl text-foreground">{cert.title}</h3>
                  <p className="mt-2 text-sm text-accent">{cert.issuer}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.1em] text-muted">{cert.issued}</p>
                </div>
                <ExternalLink className="mt-1 text-accent/75" size={16} />
              </div>

              <ul className="mt-5 list-disc space-y-1 pl-5 text-sm leading-relaxed text-muted">
                {cert.learnings.map((learning) => (
                  <li key={learning}>{learning}</li>
                ))}
              </ul>
            </a>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}
