import { Card, Container, ImageReveal, Section, SectionHeading } from "../../components/ui";
import { therapists } from "../../data/therapists";

export function Therapists() {
  return (
    <Section id="therapists" className="bg-ivory text-charcoal">
      <Container>
        <SectionHeading
          eyebrow="Therapists"
          title="Calm experts with refined technique."
          copy="Profiles are data-driven and ready for Sanity later."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {therapists.map((therapist) => (
            <Card key={therapist.name} className="overflow-hidden">
              <ImageReveal src={therapist.photo} alt={therapist.name} wrapperClassName="aspect-[4/5]" />
              <div className="p-6">
                <h3 className="font-display text-3xl">{therapist.name}</h3>
                <p className="mt-2 text-xs uppercase tracking-[0.18em] text-bronze">{therapist.role}</p>
                <p className="mt-4 text-sm font-semibold text-espresso">{therapist.experience}</p>
                <p className="mt-4 leading-7 text-charcoal/64">{therapist.bio}</p>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
