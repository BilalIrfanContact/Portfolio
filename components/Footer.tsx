"use client";

import { Github, Linkedin } from "lucide-react";
import { owner } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-6 md:px-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>(c) 2026 Bilal Irfan. All rights reserved.</p>
        <div className="flex items-center gap-3">
          <a
            href={owner.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="rounded-md border border-white/10 p-2 text-foreground/75 transition-colors hover:border-accent/45 hover:text-accent"
          >
            <Github size={16} />
          </a>
          <a
            href={owner.linkedIn}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="rounded-md border border-white/10 p-2 text-foreground/75 transition-colors hover:border-accent/45 hover:text-accent"
          >
            <Linkedin size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
