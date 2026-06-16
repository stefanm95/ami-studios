import { brandAssets } from "./assets";
import type { Therapist } from "../types/content";

export const therapists: Therapist[] = [
  {
    name: "Mara Ionescu",
    role: "Private Appointment Lead",
    experience: "9 years experience",
    bio: "Known for measured pressure, quiet presence and precise room etiquette.",
    photo: brandAssets.textures.glass,
  },
  {
    name: "Elena Varga",
    role: "Hotel & Residence Specialist",
    experience: "7 years experience",
    bio: "Arranges discreet appointments for homes, hotels and changing travel schedules.",
    photo: brandAssets.sections.experience,
  },
  {
    name: "Noah Marin",
    role: "Executive Schedule Specialist",
    experience: "8 years experience",
    bio: "Works with stronger pressure, short setup windows and office-based appointments.",
    photo: brandAssets.textures.stonePrimary,
  },
];
