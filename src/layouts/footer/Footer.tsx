import { Divider } from "../../components/ui";

const socials = ["Instagram", "TikTok", "WhatsApp"];

export function Footer() {
  return (
    <footer className="relative px-5 py-12 text-white sm:px-8">
      <div className="mx-auto max-w-[1440px]">
        <Divider className="bg-white/10" />
        <div className="grid gap-8 pt-8 md:grid-cols-[1fr_auto_auto] md:items-start">
          <div>
            <p className="font-display text-5xl uppercase tracking-[0.08em] text-white">
              AMI STUDIOS
            </p>
            <p className="mt-3 max-w-sm text-sm leading-6 text-stone-200/70">
              Private massage appointments for home, hotel, office and yacht.
            </p>
          </div>
          <div className="text-sm leading-7 text-stone-200/75">
            <p>contact@amistudio.ro</p>
            <p>+40 700 000 000</p>
            <p>Bucharest, Romania</p>
          </div>
          <div className="flex gap-4 text-sm text-stone-200/75 md:flex-col md:gap-2">
            {socials.map((social) => (
              <a
                key={social}
                href="/"
                className="transition hover:text-champagne"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
        <p className="mt-10 text-xs uppercase tracking-[0.18em] text-stone-200/50">
          Copyright 2026 AMI Studios. Private appointments only.
        </p>
      </div>
    </footer>
  );
}
