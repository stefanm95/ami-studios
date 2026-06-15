import { Helmet } from "react-helmet-async";
import { Footer } from "../../layouts/footer";
import { FloatingNavbar } from "../../layouts/navigation";
import { homeSections } from "./sections";

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>AMI Studio | Luxury Massage Rituals</title>
        <meta
          name="description"
          content="Luxury massage rituals in Bucharest crafted for body and mind. Explore AMI Studio services, therapists and private wellness experiences."
        />
      </Helmet>
      <FloatingNavbar />
      <main>
        {homeSections.map((Section) => (
          <Section key={Section.name} />
        ))}
      </main>
      <Footer />
    </>
  );
}
