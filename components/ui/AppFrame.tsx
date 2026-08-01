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
      <div className="overflow-hidden rounded-xl border border-ink/10 bg-white shadow-[0_24px_60px_-20px_rgba(5,19,42,0.35)] ring-1 ring-ink/10">
        <div className="flex items-center gap-1.5 border-b border-ink/8 bg-[#eef1f6] px-3 py-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          <span className="ml-2 text-[10px] font-medium tracking-wide text-muted uppercase">
            CareSync
          </span>
        </div>
        <div
          className="relative aspect-[16/10] w-full overflow-hidden bg-[#f4f6f9]"
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
        <figcaption className="mt-3 text-sm text-muted">{caption}</figcaption>
      ) : null}
    </figure>
  );
}
