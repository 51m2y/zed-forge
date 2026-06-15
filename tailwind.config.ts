import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ff: {
          bg: "#0A0A0F",
          surface: "#111118",
          "surface-2": "#18181F",
          border: "#23232D",
          text: "#F0F0F5",
          muted: "#6B6B80",
          blue: "#3B82F6",
          cyan: "#06B6D4",
          "blue-glow": "rgba(59,130,246,0.15)",
          green: "#22C55E",
          "light-bg": "#FAFAFA",
          "light-surface": "#FFFFFF",
          "light-surface-2": "#F4F4F5",
          "light-border": "#E4E4E7",
          "light-text": "#09090B",
          "light-muted": "#71717A"
        }
      },
      fontFamily: {
        heading: ["var(--font-geist)", "Inter", "sans-serif"],
        body: ["var(--font-inter, Inter)", "Inter", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"]
      },
      boxShadow: {
        glow: "0 0 60px rgba(59,130,246,0.18)"
      }
    }
  },
  plugins: []
};

export default config;
