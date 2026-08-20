import { cn } from "@/lib/cn";

type GlowDividerProps = {
  className?: string;
};

export function GlowDivider({ className }: GlowDividerProps) {
  return (
    <hr
      className={cn(
        "h-px border-0 bg-gradient-to-r from-primary/50 via-border to-transparent",
        className,
      )}
      aria-hidden="true"
    />
  );
}
