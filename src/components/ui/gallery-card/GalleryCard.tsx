import { motion } from "framer-motion";
import type { ComponentPropsWithoutRef } from "react";
import { ImageCard } from "../image-card/ImageCard";
import { cn } from "../../../lib/cn";

type GalleryCardProps = ComponentPropsWithoutRef<"figure"> & {
  image: string;
  title: string;
  category: string;
  imageClassName?: string;
};

export function GalleryCard({ image, title, category, imageClassName, className, ...props }: GalleryCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="break-inside-avoid"
    >
      <ImageCard
        image={image}
        title={title}
        meta={category}
        imageClassName={imageClassName}
        className={cn("mb-5", className)}
        {...props}
      />
    </motion.div>
  );
}
