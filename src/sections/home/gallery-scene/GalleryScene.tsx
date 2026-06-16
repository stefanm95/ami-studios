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
          title="Stone, smoked glass and quiet private settings."
          copy="A restrained moodboard for the material language and after-dark atmosphere of AMI Studios."
        />
        <GalleryGrid />
      </Container>
    </Section>
  );
}
