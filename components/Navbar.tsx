"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { navLinks, owner } from "@/lib/data";

const sectionIds = navLinks.map((link) => link.href.replace("#", ""));

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [menuOpen, setMenuOpen] = useState(false);

  const navClasses = useMemo(
    () =>
      scrolled
        ? "border-b border-white/10 bg-[rgba(8,8,16,0.85)] backdrop-blur-xl"
        : "border-b border-transparent bg-transparent",
    [scrolled],
  );

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const updateActiveSection = () => {
      const probe = window.innerHeight * 0.35;

      setActiveSection((prev) => {
        let current = prev;
        let foundAny = false;

        for (const id of sectionIds) {
          const el = document.getElementById(id);
          if (!el) continue;
          foundAny = true;

          if (el.getBoundingClientRect().top <= probe) {
            current = id;
          } else {
            break;
          }
        }

        return foundAny ? current : prev;
      });
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", onEscape);
    return () => window.removeEventListener("keydown", onEscape);
  }, [menuOpen]);

  return (
    <>
      <motion.header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${navClasses}`}
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-6 md:px-8">
          <a
            href="#about"
            className="font-display text-xl font-semibold tracking-tight text-foreground transition-colors hover:text-accent"
          >
            {owner.name}
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setActiveSection(link.href.replace("#", ""))}
                  className={`group relative text-sm transition-colors ${
                    isActive ? "text-accent" : "text-foreground/80 hover:text-foreground"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-px w-full bg-accent transition-transform duration-200 ${
                      isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    } origin-left`}
                  />
                </a>
              );
            })}
            <a
              href={owner.resumePath}
              download
              className="rounded-full border border-accent px-4 py-2 text-sm font-medium text-accent transition-all duration-200 hover:bg-accent hover:text-background"
            >
              Resume
            </a>
          </nav>

          <button
            type="button"
            className="rounded-lg p-2 text-foreground md:hidden"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-[rgba(8,8,16,0.96)] pt-24 md:hidden"
            initial={{ y: -24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -16, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="mx-auto flex h-full w-full max-w-6xl flex-col gap-6 px-6 py-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="border-b border-white/10 pb-4 font-display text-3xl text-foreground"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href={owner.resumePath}
                download
                className="mt-2 inline-flex w-fit rounded-full border border-accent px-5 py-2.5 text-accent"
                onClick={() => setMenuOpen(false)}
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
