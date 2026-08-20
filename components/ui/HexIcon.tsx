import { cn } from "@/lib/cn";
import type { LucideIcon } from "lucide-react";

type HexIconProps = {
  icon: LucideIcon;
  size?: number;
  iconSize?: number;
  className?: string;
  colorClass?: string;
};

export function HexIcon({
  icon: Icon,
  size = 52,
  iconSize = 22,
  className,
  colorClass = "text-primary",
}: HexIconProps) {
  return (
    <div
      className={cn(
        "relative flex shrink-0 items-center justify-center",
        className,
      )}
      style={{ width: size, height: size }}
    >
      <svg
        className={cn("absolute inset-0 h-full w-full", colorClass)}
        viewBox="0 0 52 52"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M26 2 L48 14 L48 38 L26 50 L4 38 L4 14 Z"
          stroke="currentColor"
          strokeWidth="1.25"
        />
      </svg>
      <Icon
        size={iconSize}
        strokeWidth={1.75}
        className={cn("relative z-10", colorClass)}
        aria-hidden="true"
      />
    </div>
  );
}
