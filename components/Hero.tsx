"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { owner } from "@/lib/data";

const lineVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.36, ease: "easeOut" },
  }),
};

export default function Hero() {
  return (
    <section
      id="about"
      className="relative flex min-h-screen scroll-mt-20 items-center overflow-hidden px-6 pb-16 pt-28 md:px-8"
    >
      <div className="pointer-events-none absolute left-[12%] top-[22%] h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(77,255,114,0.18)_0%,rgba(77,255,114,0.08)_40%,rgba(77,255,114,0)_75%)] blur-2xl" />

      <div className="relative mx-auto w-full max-w-6xl">
        <div className="max-w-3xl">
          <motion.p
            className="mb-4 text-xs uppercase tracking-[0.22em] text-accent"
            initial="hidden"
            animate="visible"
            custom={0.02}
            variants={lineVariants}
          >
            {owner.role}
          </motion.p>

          <motion.h1
            className="font-display text-5xl leading-[1.15] text-foreground sm:text-6xl md:text-7xl lg:text-[clamp(3rem,7vw,5rem)]"
            initial="hidden"
            animate="visible"
            custom={0.1}
            variants={lineVariants}
          >
            $ building AI-powered web applications
          </motion.h1>

          <motion.p
            className="mt-6 max-w-[520px] text-base leading-relaxed text-muted md:text-lg"
            initial="hidden"
            animate="visible"
            custom={0.28}
            variants={lineVariants}
          >
            {owner.subTagline}
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col gap-4 sm:flex-row"
            initial="hidden"
            animate="visible"
            custom={0.38}
            variants={lineVariants}
          >
            <a
              href="#projects"
              className="terminal-btn group relative inline-flex items-center justify-center overflow-hidden px-8 py-3 text-sm font-semibold"
            >
              <span className="relative z-10">cd ./projects</span>
            </a>

            <a
              href={owner.resumePath}
              download
              className="terminal-btn group relative inline-flex items-center justify-center overflow-hidden px-8 py-3 text-sm font-semibold"
            >
              <span className="relative z-10">cat resume.pdf</span>
            </a>
          </motion.div>
        </div>
      </div>

      <a
        href="#projects"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-foreground/70 transition-colors hover:text-accent"
        aria-label="Scroll to projects"
      >
        <ChevronDown className="animate-floatDown" />
      </a>
    </section>
  );
}
