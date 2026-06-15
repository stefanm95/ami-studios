import { Container, Section, SectionHeading } from "../../../components/ui";
import { SceneDepth } from "../../../layouts/scene";
import { GalleryGrid } from "./GalleryGrid";

export function GalleryScene() {
  return (
    <Section id="gallery" className="relative text-charcoal">
      <Container className="relative overflow-hidden">
        <SceneDepth />
        <SectionHeading eyebrow="Gallery" title="A visual language of warmth, texture and stillness." />
        <GalleryGrid />
      </Container>
    </Section>
  );
}
