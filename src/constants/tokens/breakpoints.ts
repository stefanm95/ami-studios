export const breakpoints = {
  mobileSM: "390px",
  mobileLG: "430px",
  tablet: "768px",
  laptop: "1024px",
  desktop: "1440px",
  wide: "1728px",
  ultra: "1920px",
} as const;

export type BreakpointToken = keyof typeof breakpoints;
