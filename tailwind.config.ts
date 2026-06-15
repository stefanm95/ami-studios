import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ivory: "#fbf7ef",
        stone: "#e8dfd2",
        warmSand: "#c9ad8e",
        bronze: "#8a653f",
        charcoal: "#15120f",
        espresso: "#34231b",
        gold: "#c9a85b",
      },
      fontFamily: {
        display: ["Cormorant Garamond", "Georgia", "serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 24px 80px rgba(21, 18, 15, 0.12)",
        glow: "0 28px 90px rgba(201, 168, 91, 0.18)",
      },
    },
  },
  plugins: [],
} satisfies Config;
