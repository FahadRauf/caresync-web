import Image from "next/image";
import { cn } from "@/lib/cn";

type CareSyncMarkProps = {
  className?: string;
  size?: number;
  showWordmark?: boolean;
};

export function CareSyncMark({
  className,
  size = 32,
  showWordmark = false,
}: CareSyncMarkProps) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <Image
        src="/icons/csicon.png"
        alt={showWordmark ? "" : "CareSync"}
        width={size}
        height={size}
        className="shrink-0"
        aria-hidden={showWordmark ? true : undefined}
      />
      {showWordmark ? (
        <span className="font-display heading-caps text-lg font-bold tracking-tight">
          CareSync
        </span>
      ) : null}
    </span>
  );
}
