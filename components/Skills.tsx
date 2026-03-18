"use client";

import { Bot, Monitor, Settings, Wrench } from "lucide-react";
import { skills } from "@/lib/data";
import SectionReveal from "@/components/SectionReveal";

const iconMap = {
  bot: Bot,
  settings: Settings,
  monitor: Monitor,
  wrench: Wrench,
};

export default function Skills() {
  return (
    <SectionReveal className="px-6 py-24 md:px-8 md:py-28">
      <div id="skills" className="mx-auto w-full max-w-6xl scroll-mt-24">
        <p className="text-xs uppercase tracking-[0.22em] text-accent">SKILLS</p>
        <h2 className="mt-3 font-display text-4xl text-foreground md:text-5xl">What I work with</h2>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {skills.map((group) => {
            const Icon = iconMap[group.icon];
            return (
              <article
                key={group.category}
                className="rounded-2xl border border-border bg-card p-6 transition-all duration-200 hover:border-accent/30"
              >
                <div className="mb-5 flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-accent/35 bg-background/80 text-accent">
                    <Icon size={18} />
                  </span>
                  <h3 className="font-display text-2xl text-foreground">{group.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/12 bg-background/70 px-3 py-1 text-xs text-foreground/80 transition-colors hover:border-accent/40 hover:text-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </SectionReveal>
  );
}
