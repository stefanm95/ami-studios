import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "../../components/ui";
import { navigation } from "../../data/navigation";
import { cn } from "../../lib/cn";

export function FloatingNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 48);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4 sm:px-6">
      <div
        className={cn(
          "mx-auto flex h-16 max-w-[1320px] items-center justify-between border px-4 shadow-glow backdrop-blur-xl transition duration-700 sm:px-6",
          isScrolled
            ? "border-charcoal/10 bg-ivory/86 text-charcoal"
            : "border-white/15 bg-charcoal/34 text-ivory",
        )}
      >
        <a href="#home" className="font-display text-2xl" aria-label="AMI Studio home">
          AMI Studio
        </a>
        <nav
          className={cn(
            "hidden items-center gap-7 text-xs uppercase tracking-[0.18em] transition lg:flex",
            isScrolled ? "text-charcoal/64" : "text-ivory/72",
          )}
        >
          {navigation.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-gold">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden lg:block">
          <Button>Book</Button>
        </div>
        <button className="inline-flex h-10 w-10 items-center justify-center border border-white/15 lg:hidden" aria-label="Open menu">
          <Menu size={20} />
        </button>
      </div>
    </header>
  );
}

export const Navbar = FloatingNavbar;
