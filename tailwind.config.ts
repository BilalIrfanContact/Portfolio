import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        accent: "var(--accent)",
        muted: "var(--muted)",
        border: "var(--border)",
        card: "var(--card-bg)",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      boxShadow: {
        accent: "0 0 0 1px rgba(77, 255, 114, 0.45), 0 0 24px rgba(77, 255, 114, 0.14)",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
        floatDown: {
          "0%, 100%": { transform: "translateY(0px)", opacity: "0.55" },
          "50%": { transform: "translateY(6px)", opacity: "1" },
        },
        slideInUnderline: {
          "0%": { transform: "scaleX(0)", transformOrigin: "left" },
          "100%": { transform: "scaleX(1)", transformOrigin: "left" },
        },
      },
      animation: {
        shimmer: "shimmer 1.4s linear",
        floatDown: "floatDown 1.8s ease-in-out infinite",
        slideInUnderline: "slideInUnderline 220ms ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
