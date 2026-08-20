import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  navy?: boolean;
  tint?: boolean;
};

export function Section({
  id,
  children,
  className,
  innerClassName,
  navy,
  tint,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative overflow-hidden py-20 md:py-28 lg:py-32",
        navy && "section-navy",
        tint && "section-tint",
        !navy && !tint && "section-canvas",
        className,
      )}
    >
      <div
        className={cn(
          "relative mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8",
          innerClassName,
        )}
      >
        {children}
      </div>
    </section>
  );
}

export function Eyebrow({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "heading-caps mb-3 text-xs font-semibold tracking-[0.18em] text-fg-muted",
        className,
      )}
    >
      {children}
    </p>
  );
}

export function SectionHeading({
  title,
  description,
  className,
}: {
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className={cn("mb-12 max-w-2xl md:mb-16", className)}>
      <h2 className="font-display heading-caps text-3xl font-bold tracking-tight text-balance text-fg sm:text-4xl lg:text-[2.65rem] lg:leading-[1.12]">
        {title}
      </h2>
      <span
        className="mt-4 block h-0.5 w-12 bg-primary"
        aria-hidden="true"
      />
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-fg-muted sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
