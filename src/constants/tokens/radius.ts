export const radius = {
  small: "rounded-sm",
  medium: "rounded",
  large: "rounded-lg",
  pill: "rounded-full",
} as const;

export type RadiusToken = keyof typeof radius;
