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
      <svg
        width={size}
        height={size}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M6 20C6 12 12 6 20 6C28 6 34 12 34 20"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <path
          d="M34 20C34 28 28 34 20 34C12 34 6 28 6 20"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          opacity="0.55"
        />
        <circle cx="20" cy="20" r="6.5" fill="#B1FF00" />
        <circle cx="20" cy="20" r="3" fill="#0A0A0A" />
        <circle cx="27" cy="13" r="2.2" fill="#FFFFFF" />
      </svg>
      {showWordmark ? (
        <span className="font-display heading-caps text-lg font-bold tracking-tight">
          CareSync
        </span>
      ) : null}
    </span>
  );
}
