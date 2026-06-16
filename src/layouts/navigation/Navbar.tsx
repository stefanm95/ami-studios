import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "../../components/ui";
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
    <header className="fixed inset-x-0 top-4 z-50 px-4 sm:px-6">
      <div
        className={cn(
          "mx-auto flex h-16 max-w-[1320px] items-center justify-between px-4 transition duration-700 sm:px-6",
          "bg-black/24 border border-white/14",
          isScrolled
            ? "bg-stone-950/88 border-stone-700/40 text-white/88"
            : "text-white/88",
        )}
      >
        <a
          href="#home"
          className="font-display text-2xl font-light tracking-tight"
          aria-label="AMI Studio home"
        >
          AMI Studio
        </a>
        <nav
          className={cn(
            "hidden items-center gap-7 text-xs uppercase tracking-[0.18em] transition lg:flex",
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
        <div className="hidden lg:block">
          <Button>Book</Button>
        </div>
        <button
          className={cn(
            "inline-flex h-10 w-10 items-center justify-center border transition lg:hidden",
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
