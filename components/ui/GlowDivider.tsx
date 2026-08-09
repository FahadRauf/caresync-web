import { cn } from "@/lib/cn";

type GlowDividerProps = {
  className?: string;
};

export function GlowDivider({ className }: GlowDividerProps) {
  return (
    <hr
      className={cn(
        "h-px border-0 bg-gradient-to-r from-lime/70 via-lime/20 to-transparent",
        className,
      )}
      aria-hidden="true"
    />
  );
}
