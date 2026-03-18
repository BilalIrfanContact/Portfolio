import type { Metadata } from "next";
import { DM_Sans, Syne } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Bilal Irfan | Full-Stack Developer & AI Engineer",
  description:
    "Bilal Irfan builds AI-powered web applications, specializing in RAG pipelines, AI integrations, and full-stack development.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${syne.variable} ${dmSans.variable} bg-background font-body text-foreground antialiased`}>
        {children}
      </body>
    </html>
  );
}
