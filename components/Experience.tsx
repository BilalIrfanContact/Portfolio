"use client";

import { experience } from "@/lib/data";
import SectionReveal from "@/components/SectionReveal";

export default function Experience() {
  return (
    <SectionReveal className="px-6 py-24 md:px-8 md:py-28">
      <div id="experience" className="mx-auto w-full max-w-6xl scroll-mt-24">
        <p className="text-xs uppercase tracking-[0.22em] text-accent">EXPERIENCE</p>
        <h2 className="mt-3 font-display text-4xl text-foreground md:text-5xl">Background</h2>

        <div className="relative mt-12 space-y-10 pl-8 md:pl-12">
          <span className="absolute left-1.5 top-2 h-[calc(100%-16px)] w-px bg-white/10 md:left-2" />

          {experience.map((item) => (
            <article key={`${item.role}-${item.period}`} className="relative">
              <span className="absolute -left-[1.92rem] top-1 h-3.5 w-3.5 rounded-full border border-accent/80 bg-accent/70 md:-left-[2.45rem]" />
              <h3 className="font-display text-2xl text-foreground">{item.role}</h3>
              <p className="mt-1 text-sm text-accent">{item.company}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.1em] text-muted">{item.period}</p>
              <p className="mt-3 max-w-[68ch] text-sm leading-relaxed text-muted">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}
