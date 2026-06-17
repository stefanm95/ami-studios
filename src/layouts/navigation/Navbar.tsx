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
          className="
            absolute left-1/2 hidden -translate-x-1/2 items-center gap-10
            text-[0.68rem] uppercase tracking-[0.22em]
            text-white
            transition
            lg:flex
          "
        >
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="
                relative px-1 py-2
                text-white
                transition-colors duration-300
                hover:text-[#d4c4a8]
                after:absolute after:bottom-0 after:left-0 after:h-px after:w-0
                after:bg-[#d4c4a8]
                after:transition-all after:duration-300
                hover:after:w-full
              "
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#booking"
          className="
            hidden min-w-[220px] items-center justify-center
            border border-white/32
            bg-black/20
            px-7 py-3.5
            text-center text-[0.65rem] font-semibold uppercase tracking-[0.22em]
            text-white
            transition duration-300
            hover:border-white/70 hover:bg-white/[0.03] hover:text-stone-950
            lg:inline-flex
          "
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
