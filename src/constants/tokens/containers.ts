export const containers = {
  page: "max-w-[1440px]",
  narrow: "max-w-3xl",
  content: "max-w-5xl",
  wide: "max-w-[1728px]",
} as const;

export type ContainerToken = keyof typeof containers;
