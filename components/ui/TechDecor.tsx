import { cn } from "@/lib/cn";

type TechDecorProps = {
  className?: string;
  showTopo?: boolean;
  showGrid?: boolean;
  showHex?: boolean;
};

export function TechDecor({
  className,
  showTopo = true,
  showGrid = true,
  showHex = true,
}: TechDecorProps) {
  return (
    <div
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
      aria-hidden="true"
    >
      {showTopo ? (
        <div className="topo-bg absolute inset-0 opacity-40 [mask-image:linear-gradient(135deg,black_0%,transparent_70%)]" />
      ) : null}

      {showHex ? (
        <svg
          className="absolute top-8 right-8 h-16 w-16 text-primary/15 sm:top-12 sm:right-12 sm:h-20 sm:w-20"
          viewBox="0 0 80 80"
          fill="none"
        >
          <path
            d="M40 4 L72 22 L72 58 L40 76 L8 58 L8 22 Z"
            stroke="currentColor"
            strokeWidth="1"
          />
        </svg>
      ) : null}

      {showGrid ? (
        <svg
          className="absolute right-6 bottom-6 h-24 w-24 text-primary/20 sm:right-10 sm:bottom-10"
          viewBox="0 0 96 72"
          fill="currentColor"
        >
          {Array.from({ length: 24 }).map((_, i) => {
            const col = i % 6;
            const row = Math.floor(i / 6);
            return (
              <text
                key={i}
                x={col * 16 + 4}
                y={row * 16 + 12}
                fontSize="10"
                fontFamily="monospace"
              >
                +
              </text>
            );
          })}
        </svg>
      ) : null}
    </div>
  );
}
