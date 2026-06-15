import type { ComponentPropsWithoutRef } from "react";
import { ParallaxImage } from "../../image";
import { cn } from "../../../lib/cn";

type ImageCardProps = ComponentPropsWithoutRef<"figure"> & {
  image: string;
  title: string;
  meta?: string;
  imageClassName?: string;
};

export function ImageCard({ image, title, meta, imageClassName, className, ...props }: ImageCardProps) {
  return (
    <figure className={cn("group overflow-hidden", className)} {...props}>
      <ParallaxImage
        src={image}
        alt={title}
        wrapperClassName={cn("aspect-[4/5] transition-transform duration-700 group-hover:scale-[0.985]", imageClassName)}
        speed={34}
      />
      <figcaption className="mt-3 flex items-center justify-between gap-4 text-sm text-charcoal/60">
        <span>{title}</span>
        {meta ? <span className="uppercase tracking-[0.16em]">{meta}</span> : null}
      </figcaption>
    </figure>
  );
}
