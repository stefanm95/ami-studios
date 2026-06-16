import { brandAssets } from "./assets";
import type { Service } from "../types/content";

export const services: Service[] = [
  {
    name: "Swedish",
    duration: "60 min",
    price: "350 lei",
    description: "A precise full-body massage for calm, mobility and refined everyday recovery.",
    benefits: ["Home", "Hotel", "Office"],
    image: brandAssets.sections.services,
  },
  {
    name: "Deep Tissue",
    duration: "75 min",
    price: "450 lei",
    description: "Focused pressure work for active bodies, travel fatigue and long workdays.",
    benefits: ["Hotel", "Office", "Recovery"],
    image: brandAssets.textures.stonePrimary,
  },
  {
    name: "Hot Stone",
    duration: "90 min",
    price: "560 lei",
    description: "Heated stone therapy with slow pressure and a quiet monochrome ritual.",
    benefits: ["Home", "Hotel", "Calm"],
    image: brandAssets.textures.stoneSecondary,
  },
  {
    name: "Aromatherapy",
    duration: "60 min",
    price: "390 lei",
    description: "A restrained aromatic treatment for breath, clarity and private decompression.",
    benefits: ["Home", "Yacht", "Reset"],
    image: brandAssets.textures.glass,
  },
  {
    name: "Couples Ritual",
    duration: "90 min",
    price: "780 lei",
    description: "A private dual session designed for residences, suites and yacht itineraries.",
    benefits: ["Home", "Hotel", "Yacht"],
    image: brandAssets.logoSlate,
  },
  {
    name: "Head Spa",
    duration: "50 min",
    price: "330 lei",
    description: "Scalp, neck and facial pressure techniques for clarity between appointments.",
    benefits: ["Office", "Hotel", "Clarity"],
    image: brandAssets.serviceStrip,
  },
];
