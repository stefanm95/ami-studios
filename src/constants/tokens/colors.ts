export const colors = {
  // Monochrome stone palette - primary foundation
  stone: {
    50: "#f4f2ee",
    100: "#e7e3dc",
    200: "#cfc8be",
    300: "#aaa197",
    400: "#7f766e",
    500: "#625b55",
    600: "#46413d",
    700: "#302d2a",
    800: "#1d1b19",
    900: "#0f0e0d",
  },
  // Brand accents - minimal use
  ivory: "#fbf7ef",
  champagne: "#d4c4a8",
  charcoal: "#15120f",
  espresso: "#34231b",
  bronze: "#8a653f",
  gold: "#c9a85b",
  white: "#ffffff",
} as const;

export type ColorToken = keyof typeof colors;
