import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  dark?: boolean;
  plum?: boolean;
};

export function Section({
  id,
  children,
  className,
  innerClassName,
  dark,
  plum,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative overflow-hidden py-20 md:py-28 lg:py-32",
        dark && "section-dark",
        plum && "section-plum",
        !dark && !plum && "section-sand",
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
  dark,
}: {
  children: ReactNode;
  className?: string;
  dark?: boolean;
}) {
  return (
    <p
      className={cn(
        "heading-caps mb-3 text-xs font-semibold tracking-[0.18em] text-on-dark-muted",
        dark && "text-on-dark-muted",
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
  dark,
}: {
  title: string;
  description?: string;
  className?: string;
  dark?: boolean;
}) {
  return (
    <div className={cn("mb-12 max-w-2xl md:mb-16", className)}>
      <h2
        className={cn(
          "font-display heading-caps text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-[2.65rem] lg:leading-[1.12]",
          dark ? "text-on-dark" : "text-on-dark",
        )}
      >
        {title}
      </h2>
      <span
        className="mt-4 block h-0.5 w-12 bg-lime"
        aria-hidden="true"
      />
      {description ? (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed sm:text-lg",
            dark ? "text-on-dark-muted" : "text-on-dark-muted",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
