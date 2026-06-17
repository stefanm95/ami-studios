import {
  Container,
  Section,
  SectionHeading,
  TestimonialCard,
} from "../../components/ui";
import { testimonials } from "../../data/testimonials";
import { SceneDepth } from "../../layouts/scene";

export function Testimonials() {
  return (
    <Section id="testimonials" className="relative text-white">
      <Container className="relative overflow-hidden">
        <SceneDepth />
        <SectionHeading
          eyebrow="Testimonials"
          title="Notes from private clients."
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
