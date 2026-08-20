import Image from "next/image";
import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

type AppFrameProps = {
  src: string;
  alt: string;
  className?: string;
  caption?: ReactNode;
  priority?: boolean;
  cropTop?: string;
  cropBottom?: string;
};

export function AppFrame({
  src,
  alt,
  className,
  caption,
  priority,
  cropTop = "0%",
  cropBottom = "0%",
}: AppFrameProps) {
  return (
    <figure className={cn("group", className)}>
      <div className="overflow-hidden rounded-xl border border-border bg-surface shadow-lg ring-1 ring-black/5">
        <div
          className="relative aspect-[16/10] w-full overflow-hidden bg-canvas"
          style={{
            clipPath: `inset(${cropTop} 0 ${cropBottom} 0)`,
          }}
        >
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 960px"
          />
        </div>
      </div>
      {caption ? (
        <figcaption className="mt-3 text-sm text-fg-muted">{caption}</figcaption>
      ) : null}
    </figure>
  );
}
