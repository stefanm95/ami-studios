import { Outlet } from "react-router-dom";
import { GlobalAtmosphere } from "../../components/atmosphere";
import { PageProgress } from "../../components/scroll/PageProgress";
import { useLenis } from "../../hooks/useLenis";
import { Footer } from "../footer";
import { FloatingNavbar } from "../navigation";

export function AppLayout() {
  useLenis();

  return (
    <>
      <GlobalAtmosphere />
      <PageProgress />
      <div className="relative z-10">
        <FloatingNavbar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}
