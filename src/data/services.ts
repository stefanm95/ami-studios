import { brandAssets } from "./assets";
import type { Service } from "../types/content";

export const services: Service[] = [
  {
    name: "Swedish",
    duration: "60 min",
    price: "350 lei",
    description: "A composed full-body appointment for quiet rooms, private homes and hotel suites.",
    benefits: ["Home", "Hotel", "Private"],
    image: brandAssets.sections.services,
  },
  {
    name: "Deep Tissue",
    duration: "75 min",
    price: "450 lei",
    description: "Deliberate pressure and personal pacing for clients who prefer a stronger touch.",
    benefits: ["Hotel", "Office", "Focused"],
    image: brandAssets.textures.stonePrimary,
  },
  {
    name: "Hot Stone",
    duration: "90 min",
    price: "560 lei",
    description: "Warm stone work arranged with low light, quiet timing and measured attention.",
    benefits: ["Home", "Hotel", "After-dark"],
    image: brandAssets.textures.stoneSecondary,
  },
  {
    name: "Aromatherapy",
    duration: "60 min",
    price: "390 lei",
    description: "A discreet scent-led appointment with restrained oils and a composed room setup.",
    benefits: ["Home", "Yacht", "Discreet"],
    image: brandAssets.textures.glass,
  },
  {
    name: "Couples Ritual",
    duration: "90 min",
    price: "780 lei",
    description: "A private dual appointment for residences, suites and yacht itineraries.",
    benefits: ["Residence", "Hotel", "Yacht"],
    image: brandAssets.logoSlate,
  },
  {
    name: "Head Spa",
    duration: "50 min",
    price: "330 lei",
    description: "Head, neck and face work for short windows between meetings or late arrivals.",
    benefits: ["Office", "Hotel", "Concise"],
    image: brandAssets.serviceStrip,
  },
];
