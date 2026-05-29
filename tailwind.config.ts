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
        steel: {
          50:  "#f0f4f8",
          100: "#d9e2ec",
          200: "#bcccdc",
          300: "#9fb3c8",
          400: "#829ab1",
          500: "#627d98",
          600: "#486581",
          700: "#334e68",
          800: "#243b53",
          900: "#102a43",
          950: "#0a1929",
        },
        gunmetal: {
          50:  "#f5f5f6",
          100: "#e5e6e9",
          200: "#caccd2",
          300: "#a4a8b0",
          400: "#787e8a",
          500: "#5e6470",
          600: "#4e535e",
          700: "#43474f",
          800: "#3a3d44",
          900: "#23252b",
          950: "#141518",
        },
        orange: {
          400: "#fb923c",
          500: "#f97316",
          600: "#ea6c0a",
        },
        accent: "#E8650A",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-barlow)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "steel-gradient": "linear-gradient(135deg, #141518 0%, #23252b 50%, #0a1929 100%)",
        "hero-gradient": "linear-gradient(180deg, rgba(10,25,41,0.85) 0%, rgba(20,21,24,0.95) 100%)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.4s ease-out forwards",
        shimmer: "shimmer 2s infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
