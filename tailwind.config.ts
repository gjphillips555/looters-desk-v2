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
        bg: "#0f0d0b",
        surface: "#1a1714",
        raised: "#24201c",
        border: "#3a342e",
        primary: "#e85d04",
        "primary-fg": "#ffffff",
        muted: "#a89f94",
        faint: "#6b635a",
      },
      fontFamily: {
        display: ["Oswald", "system-ui", "sans-serif"],
        sans: ["IBM Plex Sans", "system-ui", "sans-serif"],
        mono: ["IBM Plex Mono", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
