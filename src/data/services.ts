import { brandAssets } from "./assets";
import type { Service } from "../types/content";

export const services: Service[] = [
  {
    name: "The Private Room",
    duration: "60 min",
    price: "from 350 lei",
    description: "A composed private erotic massage shaped around atmosphere, pace and discretion.",
    benefits: ["Private", "Hotel / Home", "Requested in confidence"],
    image: brandAssets.sections.services,
  },
  {
    name: "The Signature Touch",
    duration: "75 min",
    price: "from 450 lei",
    description: "A refined full-body appointment guided by presence, rhythm and personal attention.",
    benefits: ["Refined touch", "Personal pace", "Intimate setting"],
    image: brandAssets.textures.glassSecondary,
  },
  {
    name: "The After-Hours Ritual",
    duration: "90 min",
    price: "from 560 lei",
    description: "A slower evening appointment with low light, quiet timing and complete privacy.",
    benefits: ["After-hours", "Low light", "Discreet"],
    image: brandAssets.textures.stoneSecondary,
  },
];
