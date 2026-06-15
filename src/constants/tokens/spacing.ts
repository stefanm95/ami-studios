export const spacing = {
  sectionXS: "py-14 md:py-16",
  sectionSM: "py-16 md:py-20",
  sectionMD: "py-20 md:py-24",
  sectionLG: "py-24 md:py-32",
  sectionXL: "py-28 md:py-40",
} as const;

export type SpacingToken = keyof typeof spacing;
