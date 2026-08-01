"use client";

import { useReveal } from "@/lib/useReveal";
import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "article" | "li";
};

export function Reveal({ children, className, as: Tag = "div" }: RevealProps) {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <Tag
      ref={ref as never}
      className={cn("reveal", visible && "visible", className)}
    >
      {children}
    </Tag>
  );
}
