import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#fafbfc",
        foreground: "#1e293b",
        heading: "#0f172a",
        muted: "#64748b",
        border: "#e2e8f0",
        accent: "#3b82f6",
        cta: "#2563eb",
        past: "#94a3b8",
        transition: "#f59e0b",
        future: "#10b981",
        "alpha-bg": "#f8fafc",
        "alpha-border": "#334155",
        "lgh-high": "#10b981",
        "lgh-mid": "#f59e0b",
        "lgh-low": "#ef4444",
      },
      fontFamily: {
        serif: ["Lora", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      maxWidth: {
        reading: "720px",
      },
      fontSize: {
        "chapter-num": "7rem",
      },
    },
  },
  plugins: [],
};
export default config;
