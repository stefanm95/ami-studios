import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { BookingModal } from "../../components/booking";
import { Container, Section } from "../../components/ui";
import { SceneDepth } from "../../layouts/scene";

export function BookingCta() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <Section id="booking" className="relative text-white" size="sectionLG">
      <Container className="relative overflow-hidden">
        <SceneDepth />
        <div className="grid gap-8 bg-white/[0.045] border border-white/10 p-7 md:grid-cols-[1fr_auto] md:items-center lg:p-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-champagne">
              Requested in confidence
            </p>
            <h2 className="mt-4 font-display text-5xl leading-tight md:text-7xl text-white">
              Arrange a private appointment.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-stone-200/70">
              Appointments are arranged discreetly, with timing, setting and
              comfort confirmed before arrival.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setIsBookingOpen(true)}
            className="inline-flex min-h-12 items-center justify-center gap-2 border border-white/20 bg-white/[0.06] px-6 text-xs font-semibold uppercase tracking-[0.18em] text-white transition duration-300 hover:border-champagne/70 hover:bg-white/[0.1]"
          >
            Request appointment <ArrowRight size={17} />
          </button>
        </div>
      </Container>

      {isBookingOpen ? (
        <BookingModal mode="book" onClose={() => setIsBookingOpen(false)} />
      ) : null}
    </Section>
  );
}
