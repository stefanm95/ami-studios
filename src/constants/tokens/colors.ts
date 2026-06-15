export const colors = {
  ivory: "#fbf7ef",
  stone: "#e8dfd2",
  warmSand: "#c9ad8e",
  bronze: "#8a653f",
  charcoal: "#15120f",
  espresso: "#34231b",
  gold: "#c9a85b",
} as const;

export type ColorToken = keyof typeof colors;
