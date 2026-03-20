"use client";

import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

const Projects = dynamic(() => import("@/components/Projects"), { ssr: false });
const Skills = dynamic(() => import("@/components/Skills"), { ssr: false });
const Experience = dynamic(() => import("@/components/Experience"), { ssr: false });
const Certifications = dynamic(() => import("@/components/Certifications"), { ssr: false });
const Contact = dynamic(() => import("@/components/Contact"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="relative overflow-x-hidden">
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
