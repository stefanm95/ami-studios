export const easings = {
  softOut: [0.22, 1, 0.36, 1],
  softInOut: [0.65, 0, 0.35, 1],
  editorial: [0.16, 1, 0.3, 1],
} as const;

export type EasingToken = keyof typeof easings;
