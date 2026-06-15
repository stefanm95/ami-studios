import {
  Container,
  Section,
  SectionHeading,
  TherapistCard,
} from "../../components/ui";
import { therapists } from "../../data/therapists";

export function Therapists() {
  return (
    <Section id="therapists" className="relative text-white">
      <Container>
        <SectionHeading
          eyebrow="Therapists"
          title="Calm experts with refined technique."
          copy="Profiles are data-driven and ready for Sanity later."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {therapists.map((therapist) => (
            <TherapistCard key={therapist.name} {...therapist} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
