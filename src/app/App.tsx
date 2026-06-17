import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AppLayout } from "../layouts/root";

const HomePage = lazy(() => import("../pages/home/HomePage").then((module) => ({ default: module.HomePage })));

export function App() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-charcoal" />}>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<Navigate to="/#services" replace />} />
          <Route path="/experience" element={<Navigate to="/#experience" replace />} />
          <Route path="/therapists" element={<Navigate to="/#experience" replace />} />
          <Route path="/faq" element={<Navigate to="/#faq" replace />} />
          <Route path="/booking" element={<Navigate to="/#booking" replace />} />
          <Route path="/contact" element={<Navigate to="/#contact" replace />} />
          <Route path="/about" element={<Navigate to="/" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
