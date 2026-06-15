import { Card, Container, Section, SectionHeading } from "../../components/ui";
import { testimonials } from "../../data/testimonials";

export function Testimonials() {
  return (
    <Section id="testimonials" className="bg-ivory text-charcoal">
      <Container>
        <SectionHeading eyebrow="Testimonials" title="Quiet praise from clients who value discretion." />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="p-7">
              <p className="font-display text-3xl leading-snug">"{testimonial.quote}"</p>
              <div className="mt-8 text-sm text-charcoal/62">
                <p className="font-semibold text-charcoal">{testimonial.name}</p>
                <p>{testimonial.detail}</p>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
