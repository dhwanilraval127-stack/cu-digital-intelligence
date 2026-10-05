import Image from "next/image";
import { cn } from "@/lib/utils";

interface ImageBlockProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  sizes?: string;
  className?: string;
  imgClassName?: string;
  /** object-position, e.g. "center" or "65% center" for responsive cropping */
  position?: string;
  caption?: string;
}

export function ImageBlock({
  src,
  alt,
  width,
  height,
  priority = false,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  className,
  imgClassName,
  position = "center",
  caption,
}: ImageBlockProps) {
  return (
    <figure className={cn("overflow-hidden", className)}>
      <div
        className="relative w-full"
        style={{ aspectRatio: `${width} / ${height}` }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          style={{ objectFit: "cover", objectPosition: position }}
          className={cn("h-full w-full", imgClassName)}
        />
      </div>
      {caption ? (
        <figcaption className="mt-3 text-xs uppercase tracking-[0.18em] text-cu-muted">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
