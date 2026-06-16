import { brandAssets } from "./assets";
import type { Therapist } from "../types/content";

export const therapists: Therapist[] = [
  {
    name: "Mara Ionescu",
    role: "Deep Tissue Specialist",
    experience: "9 years experience",
    bio: "Known for precise pressure, calm presence and recovery-focused private sessions.",
    photo: brandAssets.textures.glass,
  },
  {
    name: "Elena Varga",
    role: "Aromatherapy Therapist",
    experience: "7 years experience",
    bio: "Creates slow sensory rituals for homes, hotels and discreet travel schedules.",
    photo: brandAssets.sections.experience,
  },
  {
    name: "Noah Marin",
    role: "Sports Recovery Therapist",
    experience: "8 years experience",
    bio: "Blends mobility work with therapeutic massage for high-performance clients.",
    photo: brandAssets.textures.stonePrimary,
  },
];
