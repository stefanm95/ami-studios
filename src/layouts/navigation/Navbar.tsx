import { Menu } from "lucide-react";
import { type MouseEvent, useEffect, useState } from "react";
import { BookingModal } from "../../components/booking";
import { brandAssets } from "../../data/assets";
import { navigation } from "../../data/navigation";
import { cn } from "../../lib/cn";

export function FloatingNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    let currentState = window.scrollY > 48;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const nextState = window.scrollY > 48;
          if (nextState !== currentState) {
            currentState = nextState;
            setIsScrolled(nextState);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    setIsScrolled(currentState);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleAnchorClick = (
    event: MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (!href.startsWith("/#")) {
      return;
    }

    setIsMenuOpen(false);

    if (window.location.pathname !== "/") {
      return;
    }

    event.preventDefault();

    const target = href.replace("/#", "");
    window.history.pushState(null, "", href);
    window.__amiLenis?.scrollTo?.(`#${target}`);

    if (!window.__amiLenis) {
      document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed inset-x-0 top-5 z-50 px-4 sm:px-6">
      <div className="mx-auto max-w-[1440px]">
        <div
          className={cn(
            "relative flex h-20 items-center justify-between border px-5 transition duration-700 sm:px-7 lg:px-9",
            isScrolled
              ? "border-white/12 bg-black/46 text-white/88 shadow-[0_12px_36px_rgba(0,0,0,0.16)]"
              : "border-white/8 bg-black/[0.08] text-white/88",
          )}
        >
          <a
            href="/#home"
            className="flex items-center"
            aria-label="AMI Studios home"
            onClick={(event) => handleAnchorClick(event, "/#home")}
          >
            <img
              src={brandAssets.logo}
              alt="AMI Studios"
              className="h-auto w-[132px] opacity-95 sm:w-[154px]"
            />
          </a>

          <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 text-[0.66rem] uppercase tracking-[0.2em] text-white transition lg:flex xl:gap-10">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(event) => handleAnchorClick(event, item.href)}
                className="relative px-1 py-2 text-white transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-[#d4c4a8] after:transition-all after:duration-300 hover:text-[#d4c4a8] hover:after:w-full"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setIsBookingOpen(true)}
            className="hidden min-w-[220px] items-center justify-center border border-white/32 bg-black/20 px-7 py-3.5 text-center text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-white transition duration-300 hover:border-champagne/70 hover:bg-white/[0.06] lg:inline-flex"
          >
            Request appointment
          </button>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center border border-white/25 bg-white/[0.03] text-white transition hover:border-champagne/60 lg:hidden"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((value) => !value)}
          >
            <Menu size={20} />
          </button>
        </div>

        {isMenuOpen ? (
          <div className="border-x border-b border-white/12 bg-[#0f0e0c]/95 px-5 py-5 shadow-[0_18px_46px_rgba(0,0,0,0.22)] lg:hidden">
            <nav className="grid gap-1 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-white/82">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(event) => handleAnchorClick(event, item.href)}
                  className="border-b border-white/8 py-3 transition hover:text-champagne"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <button
              type="button"
              onClick={() => {
                setIsMenuOpen(false);
                setIsBookingOpen(true);
              }}
              className="mt-5 inline-flex min-h-12 w-full items-center justify-center border border-white/20 bg-white/[0.06] px-6 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:border-champagne/70 hover:bg-white/[0.1]"
            >
              Request appointment
            </button>
          </div>
        ) : null}
      </div>

      {isBookingOpen ? (
        <BookingModal mode="book" onClose={() => setIsBookingOpen(false)} />
      ) : null}
    </header>
  );
}

export const Navbar = FloatingNavbar;
