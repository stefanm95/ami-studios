import { Divider } from "../../components/ui";

const socials = ["Instagram", "TikTok", "WhatsApp"];

export function Footer() {
  return (
    <footer className="bg-charcoal px-5 py-12 text-ivory sm:px-8">
      <div className="mx-auto max-w-[1440px]">
        <Divider className="bg-white/10" />
        <div className="grid gap-8 pt-8 md:grid-cols-[1fr_auto_auto] md:items-start">
          <div>
            <p className="font-display text-5xl uppercase tracking-[0.08em]">AMI STUDIOS</p>
            <p className="mt-3 max-w-sm text-sm leading-6 text-ivory/60">
              Luxury massage rituals crafted for body and mind.
            </p>
          </div>
          <div className="text-sm leading-7 text-ivory/68">
            <p>contact@amistudio.ro</p>
            <p>+40 700 000 000</p>
            <p>Bucharest, Romania</p>
          </div>
          <div className="flex gap-4 text-sm text-ivory/68 md:flex-col md:gap-2">
            {socials.map((social) => (
              <a key={social} href="/" className="transition hover:text-gold">
                {social}
              </a>
            ))}
          </div>
        </div>
        <p className="mt-10 text-xs uppercase tracking-[0.18em] text-ivory/42">
          Copyright 2026 AMI Studio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
