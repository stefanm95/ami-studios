import { Container, ImageReveal, Section, SectionHeading } from "../../components/ui";
import { gallery } from "../../data/gallery";
import { cn } from "../../lib/cn";

export function Gallery() {
  return (
    <Section id="gallery" className="bg-stone text-charcoal">
      <Container>
        <SectionHeading eyebrow="Gallery" title="A visual language of warmth, texture and stillness." />
        <div className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3">
          {gallery.map((item, index) => (
            <figure key={item.title} className="mb-5 break-inside-avoid">
              <ImageReveal
                src={item.image}
                alt={item.title}
                wrapperClassName={cn(index % 3 === 0 ? "aspect-[4/5]" : index % 3 === 1 ? "aspect-[1/1]" : "aspect-[5/4]")}
              />
              <figcaption className="mt-3 flex items-center justify-between gap-4 text-sm text-charcoal/60">
                <span>{item.title}</span>
                <span className="uppercase tracking-[0.16em]">{item.category}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </Section>
  );
}
