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
          eyebrow="Practitioners"
          title="Selected for technique, presence and discretion."
          copy="Appointments are handled by professionals accustomed to private rooms, hotel schedules and direct client communication."
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
