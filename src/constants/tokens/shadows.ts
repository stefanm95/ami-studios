export const shadows = {
  soft: "shadow-soft",
  glow: "shadow-glow",
  elevated: "shadow-[0_32px_90px_rgba(21,18,15,0.16)]",
  inset: "shadow-[inset_0_1px_0_rgba(255,255,255,0.35)]",
} as const;

export type ShadowToken = keyof typeof shadows;
