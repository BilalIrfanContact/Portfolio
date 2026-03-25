"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { useRouter } from "next/navigation";
import { projects } from "@/lib/data";
import SectionReveal from "@/components/SectionReveal";

export default function Projects() {
  const router = useRouter();

  return (
    <SectionReveal className="px-6 py-24 md:px-8 md:py-28">
      <div id="projects" className="mx-auto w-full max-w-6xl scroll-mt-24">
        <p className="text-xs uppercase tracking-[0.22em] text-accent">WORK</p>
        <h2 className="mt-3 font-display text-4xl text-foreground md:text-5xl">Projects</h2>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <motion.article
              key={project.id}
              className="group relative flex h-full cursor-pointer flex-col rounded-2xl border border-border bg-card p-6 transition-colors"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              onClick={() => router.push(`/projects/${project.slug}`)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  router.push(`/projects/${project.slug}`);
                }
              }}
              role="link"
              tabIndex={0}
            >
              <div className="mb-5 h-[3px] w-20 rounded-full bg-accent/70 transition-all duration-300 group-hover:w-28" />
              <p className="mb-3 text-xs uppercase tracking-[0.2em] text-accent/90">{project.category}</p>

              <h3 className="font-display text-3xl text-foreground">{project.name}</h3>
              <p className="mt-2 text-base text-foreground/85">{project.tagline}</p>
              <p className="mt-4 max-w-[56ch] text-sm leading-relaxed text-muted">{project.description}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-accent/40 bg-background/70 px-3 py-1 text-xs text-accent"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex items-center gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${project.name} GitHub`}
                  className="rounded-lg border border-white/15 p-2.5 text-foreground/85 transition-colors hover:border-accent/50 hover:text-accent"
                  onClick={(event) => event.stopPropagation()}
                >
                  <Github size={18} />
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${project.name} demo`}
                  className="rounded-lg border border-white/15 p-2.5 text-foreground/85 transition-colors hover:border-accent/50 hover:text-accent"
                  onClick={(event) => event.stopPropagation()}
                >
                  <ExternalLink size={18} />
                </a>
              </div>

              <span className="pointer-events-none absolute inset-0 rounded-2xl border border-transparent transition-all duration-200 group-hover:border-accent/40 group-hover:shadow-accent" />
            </motion.article>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}
