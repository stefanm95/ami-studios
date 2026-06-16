import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { brandAssets } from "../../data/assets";
import { navigation } from "../../data/navigation";
import { cn } from "../../lib/cn";

export function FloatingNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <header className="fixed inset-x-0 top-5 z-50 px-4 sm:px-6">
      <div
        className={cn(
          "mx-auto flex h-20 max-w-[1440px] items-center justify-between border px-5 transition duration-700 sm:px-7 lg:px-9",
          isScrolled
            ? "border-white/12 bg-black/46 text-white/88 shadow-[0_16px_50px_rgba(0,0,0,0.22)]"
            : "border-white/8 bg-black/[0.08] text-white/88",
        )}
      >
        <a
          href="#home"
          className="flex items-center"
          aria-label="AMI Studios home"
        >
          <img
            src={brandAssets.logo}
            alt="AMI Studios"
            className="h-auto w-[132px] opacity-95 sm:w-[154px]"
          />
        </a>
        <nav
          className={cn(
            "absolute left-1/2 hidden -translate-x-1/2 items-center gap-10 text-[0.68rem] uppercase tracking-[0.22em] transition lg:flex",
            isScrolled ? "text-white/72" : "text-white/72",
          )}
        >
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition hover:text-white/100"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#booking"
          className="hidden min-w-[198px] items-center justify-center border border-white/20 px-6 py-3 text-center text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-white/82 transition duration-300 hover:border-white/36 hover:bg-white/[0.07] hover:text-white lg:inline-flex"
        >
          Request appointment
        </a>
        <button
          className={cn(
            "inline-flex h-11 w-11 items-center justify-center border bg-white/[0.03] transition lg:hidden",
            isScrolled
              ? "border-white/25 text-white"
              : "border-white/25 text-white",
          )}
          aria-label="Open menu"
        >
          <Menu size={20} />
        </button>
      </div>
    </header>
  );
}

export const Navbar = FloatingNavbar;
