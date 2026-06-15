import type { ButtonHTMLAttributes, PropsWithChildren } from "react";
import { cn } from "../../../lib/cn";

type ButtonProps = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "secondary" | "ghost";
  }
>;

export function Button({ className, variant = "primary", ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-xs font-semibold uppercase tracking-[0.18em] transition duration-300 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-ivory",
        variant === "primary"
          ? "bg-gold text-charcoal hover:bg-ivory"
          : variant === "secondary"
            ? "border border-charcoal/20 bg-white/75 text-charcoal hover:border-gold hover:text-espresso"
            : "bg-transparent text-current hover:text-gold",
        className,
      )}
      {...props}
    />
  );
}
