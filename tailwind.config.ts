import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cu: {
          primary: "#C86B3F",
          "primary-dark": "#93452D",
          burnt: "#AA5332",
          soft: "#D98B60",
          light: "#E8B99A",
          pale: "#F2D8C6",

          background: "#FCF9F5",
          surface: "#F4EDE6",
          "surface-soft": "#E8DED4",
          "surface-raised": "#F8F3EB",

          text: "#22211F",
          muted: "#6F6963",
          "muted-light": "#A9A19A",
          border: "#DED6CE",
          "border-strong": "#C2B8A9",

          accent: "#E8B99A",
          "pale-accent": "#F2D8C6",
          ivory: "#FCF9F5",
          cream: "#F4EDE6",
          sand: "#E8DED4",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "-apple-system", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      transitionTimingFunction: {
        cu: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
