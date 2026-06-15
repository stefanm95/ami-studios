export const durations = {
  fast: 0.22,
  normal: 0.45,
  slow: 0.72,
  cinematic: 1.15,
} as const;

export type DurationToken = keyof typeof durations;
