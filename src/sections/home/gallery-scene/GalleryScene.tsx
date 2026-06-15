import { Container, Section, SectionHeading } from "../../../components/ui";
import { GalleryGrid } from "./GalleryGrid";

export function GalleryScene() {
  return (
    <Section id="gallery" className="bg-stone text-charcoal">
      <Container>
        <SectionHeading eyebrow="Gallery" title="A visual language of warmth, texture and stillness." />
        <GalleryGrid />
      </Container>
    </Section>
  );
}
