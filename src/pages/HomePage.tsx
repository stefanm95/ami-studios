import { Helmet } from "react-helmet-async";
import { Footer } from "../layouts/footer";
import { Navbar } from "../layouts/navigation";
import {
  BookingCta,
  Experience,
  Faq,
  Gallery,
  Hero,
  Services,
  SignatureRituals,
  Testimonials,
  Therapists,
} from "../sections/home";

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
      <Navbar />
      <main>
        <Hero />
        <SignatureRituals />
        <Services />
        <Experience />
        <Therapists />
        <Gallery />
        <Testimonials />
        <Faq />
        <BookingCta />
      </main>
      <Footer />
    </>
  );
}
