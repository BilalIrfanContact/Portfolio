"use client";

import { Github, Linkedin, Twitter } from "lucide-react";
import RedditIcon from "@/components/RedditIcon";
import { owner } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-border px-6 py-6 md:px-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>(c) 2026 Bilal Irfan. All rights reserved.</p>
        <div className="flex items-center gap-3">
          <a
            href={owner.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="terminal-btn p-2 text-foreground/75"
          >
            <Github size={16} />
          </a>
          <a
            href={owner.linkedIn}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="terminal-btn p-2 text-foreground/75"
          >
            <Linkedin size={16} />
          </a>
          <a
            href={owner.reddit}
            target="_blank"
            rel="noreferrer"
            aria-label="Reddit"
            className="terminal-btn p-2 text-foreground/75"
          >
            <RedditIcon size={16} />
          </a>
          <a
            href={owner.x}
            target="_blank"
            rel="noreferrer"
            aria-label="X"
            className="terminal-btn p-2 text-foreground/75"
          >
            <Twitter size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
