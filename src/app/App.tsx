import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { AppLayout } from "../layouts/root";

const HomePage = lazy(() => import("../pages/home/HomePage").then((module) => ({ default: module.HomePage })));
const ServicesPage = lazy(() => import("../pages/services/ServicesPage").then((module) => ({ default: module.ServicesPage })));
const AboutPage = lazy(() => import("../pages/about/AboutPage").then((module) => ({ default: module.AboutPage })));
const TherapistsPage = lazy(() =>
  import("../pages/therapists/TherapistsPage").then((module) => ({ default: module.TherapistsPage })),
);
const FaqPage = lazy(() => import("../pages/faq/FaqPage").then((module) => ({ default: module.FaqPage })));
const BookingPage = lazy(() => import("../pages/booking/BookingPage").then((module) => ({ default: module.BookingPage })));
const ContactPage = lazy(() => import("../pages/contact/ContactPage").then((module) => ({ default: module.ContactPage })));

export function App() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-charcoal" />}>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/therapists" element={<TherapistsPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
