import { GalleryCard } from "../../../components/ui";
import { gallery } from "../../../data/gallery";
import { cn } from "../../../lib/cn";

export function GalleryGrid() {
  return (
    <div className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3">
      {gallery.map((item, index) => (
        <GalleryCard
          key={item.title}
          image={item.image}
          title={item.title}
          category={item.category}
          imageClassName={cn(index % 3 === 0 ? "aspect-[4/5]" : index % 3 === 1 ? "aspect-[1/1]" : "aspect-[5/4]")}
        />
      ))}
    </div>
  );
}
