import { ArrowRight } from "lucide-react";
import { Button, Container, Section } from "../../components/ui";
import { SceneDepth } from "../../layouts/scene";

export function BookingCta() {
  return (
    <Section id="booking" className="relative text-white" size="sectionLG">
      <Container className="relative overflow-hidden">
        <SceneDepth />
        <div className="grid gap-8 bg-white/6 backdrop-blur-[12px] border border-white/10 p-7 md:grid-cols-[1fr_auto] md:items-center lg:p-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-champagne">
              Booking
            </p>
            <h2 className="mt-4 font-display text-5xl leading-tight md:text-7xl text-white">
              Begin your wellness journey.
            </h2>
          </div>
          <Button>
            Book Now <ArrowRight size={17} />
          </Button>
        </div>
      </Container>
    </Section>
  );
}
