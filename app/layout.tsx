import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bilal Irfan | Full-Stack Developer & AI Engineer",
  description:
    "Bilal Irfan builds AI-powered web applications, specializing in RAG pipelines, AI integrations, and full-stack development.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-background font-body text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
