import { brandAssets } from "./assets";
import type { Service } from "../types/content";

export const services: Service[] = [
  {
    name: "Private Room",
    duration: "60 min",
    price: "from 350 lei",
    description:
      "A carefully arranged appointment shaped around atmosphere, personal pace and discretion.",
    benefits: ["Private", "Warm lighting", "Requested in confidence"],
    image: brandAssets.sections.services,
  },
  {
    name: "Signature Touch",
    duration: "75 min",
    price: "from 450 lei",
    description:
      "A refined full-body experience guided by presence, rhythm and intimate atmosphere.",
    benefits: ["Refined touch", "Personal pace", "Exclusive setting"],
    image: brandAssets.textures.stonePrimary,
  },
  {
    name: "After-Hours Ritual",
    duration: "90 min",
    price: "from 560 lei",
    description:
      "A slower evening appointment with warm lighting, quiet timing and complete privacy.",
    benefits: ["After-hours", "Quiet timing", "Discreet"],
    image: brandAssets.textures.stoneSecondary,
  },
];
