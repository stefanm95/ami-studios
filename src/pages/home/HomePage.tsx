import { Helmet } from "react-helmet-async";
import { homeSections } from "./sections";

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>AMI Studios | Private Erotic Massage Appointments</title>
        <meta
          name="description"
          content="Private erotic massage appointments in Bucharest for home, hotel, office and yacht. Discreet scheduling, refined touch and intimate settings."
        />
      </Helmet>
      <main>
        {homeSections.map((Section) => (
          <Section key={Section.name} />
        ))}
      </main>
    </>
  );
}
