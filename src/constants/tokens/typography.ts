export const typography = {
  display: "font-display text-6xl leading-none md:text-8xl xl:text-9xl",
  h1: "font-display text-5xl leading-none md:text-7xl",
  h2: "font-display text-4xl leading-tight md:text-6xl",
  body: "text-base leading-7 md:text-lg md:leading-8",
  caption: "text-xs font-semibold uppercase tracking-[0.22em]",
} as const;

export type TypographyToken = keyof typeof typography;
