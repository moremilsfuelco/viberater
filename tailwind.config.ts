import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx,mdx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#050507",
        paper: "#f7f2e8",
        ember: "#ff6a3d",
        acid: "#b7ff2a",
        pool: "#19c7d3",
        wine: "#d946ef",
        line: "rgba(255,255,255,0.12)"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Inter", "system-ui", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(255,255,255,0.08), 0 24px 70px rgba(0,0,0,0.45)"
      }
    },
  },
  plugins: [],
};

export default config;
