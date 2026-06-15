import { Menu } from "lucide-react";
import { Button } from "../../components/ui";
import { navigation } from "../../data/navigation";

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4 sm:px-6">
      <div className="mx-auto flex h-16 max-w-[1320px] items-center justify-between border border-white/15 bg-charcoal/48 px-4 text-ivory shadow-glow backdrop-blur-xl sm:px-6">
        <a href="#home" className="font-display text-2xl" aria-label="AMI Studio home">
          AMI Studio
        </a>
        <nav className="hidden items-center gap-7 text-xs uppercase tracking-[0.18em] text-ivory/72 lg:flex">
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
