import { Container, Section, SectionHeading } from "../../../components/ui";
import { SceneDepth } from "../../../layouts/scene";
import { GalleryGrid } from "./GalleryGrid";

export function GalleryScene() {
  return (
    <Section id="gallery" className="relative text-white">
      <Container className="relative overflow-hidden">
        <SceneDepth />
        <SectionHeading
          eyebrow="Gallery"
          title="Stone, smoked glass and private rooms."
          copy="A restrained visual moodboard for the AMI Studios atmosphere."
        />
        <GalleryGrid />
      </Container>
    </Section>
  );
}
