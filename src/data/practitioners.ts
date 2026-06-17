import { brandAssets } from "./assets";
import type { Practitioner } from "../types/content";

export const practitioners: Practitioner[] = [
  {
    id: "mara",
    name: "Mara",
    role: "Private appointment practitioner",
    image: brandAssets.textures.glass,
    tone: "Calm presence, measured pace, refined discretion.",
    description:
      "Selected for quiet conduct, attentive timing and a composed approach to private settings.",
    details: ["Low light", "Private settings", "Hotel / Home", "Discreet"],
  },
  {
    id: "elena",
    name: "Elena",
    role: "Evening appointment practitioner",
    image: brandAssets.sections.therapists,
    tone: "Soft rhythm, attentive detail, composed atmosphere.",
    description:
      "A considered presence for evening appointments, hotel schedules and rooms prepared with care.",
    details: ["Evening", "Hotel", "Quiet rhythm", "Private"],
  },
  {
    id: "noa",
    name: "Noa",
    role: "Signature appointment practitioner",
    image: brandAssets.textures.stonePrimary,
    tone: "Quiet confidence, personal pace, polished presence.",
    description:
      "A refined appointment style shaped around preference, privacy and steady attention.",
    details: ["Signature", "Personal pace", "Residence", "Composed"],
  },
  {
    id: "iris",
    name: "Iris",
    role: "Residence and yacht practitioner",
    image: brandAssets.textures.stoneSecondary,
    tone: "Discreet coordination, calm timing, precise room etiquette.",
    description:
      "A polished approach for private residences, yacht schedules and settings that require quiet coordination.",
    details: ["Residence", "Yacht", "Discreet", "Flexible timing"],
  },
];
