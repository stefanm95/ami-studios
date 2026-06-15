import { Helmet } from "react-helmet-async";
import { Container, Section } from "../../components/ui";

type PageShellProps = {
  title: string;
  description: string;
};

export function PageShell({ title, description }: PageShellProps) {
  const pageTitle = `${title} | AMI Studio`;

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={description} />
      </Helmet>
      <main className="text-charcoal">
        <Section className="min-h-[72vh] pt-36">
          <Container>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-bronze">AMI Studio</p>
            <h1 className="mt-5 font-display text-6xl leading-none md:text-8xl">{title}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-charcoal/66">{description}</p>
          </Container>
        </Section>
      </main>
    </>
  );
}
