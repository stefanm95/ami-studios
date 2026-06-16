import { Helmet } from "react-helmet-async";
import { homeSections } from "./sections";

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>AMI Studios | Private Massage Appointments</title>
        <meta
          name="description"
          content="Private massage appointments in Bucharest for home, hotel, office and yacht. Discreet scheduling, refined technique and composed rooms."
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
