export const zIndex = {
  base: "z-0",
  content: "z-10",
  overlay: "z-20",
  navigation: "z-50",
  modal: "z-[80]",
  toast: "z-[100]",
} as const;

export type ZIndexToken = keyof typeof zIndex;
