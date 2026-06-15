import { Container, Section, SectionHeading } from "../../components/ui";
import { faq } from "../../data/faq";
import { SceneDepth } from "../../layouts/scene";

export function Faq() {
  return (
    <Section id="faq" className="relative text-white">
      <Container className="relative overflow-hidden">
        <SceneDepth />
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading
            eyebrow="FAQ"
            title="Everything before your first visit."
          />
          <div className="divide-y divide-white/10 border-y border-white/10">
            {faq.map((item) => (
              <details key={item.question} className="group py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-2xl text-white">
                  {item.question}
                  <span className="text-lg text-champagne transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 max-w-2xl leading-7 text-stone-200/75">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
