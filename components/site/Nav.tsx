"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CareSyncMark } from "@/components/ui/CareSyncMark";
import { navLinks } from "@/content/site";
import { cn } from "@/lib/cn";
import { Menu, X } from "lucide-react";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-40% 0px -45% 0px", threshold: [0, 0.25, 0.5] },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 backdrop-blur-md transition-all duration-300",
        scrolled || open
          ? "border-b border-lime/10 bg-ink/95 shadow-[0_12px_32px_-24px_rgba(0,0,0,0.8)]"
          : "border-b border-lime/5 bg-ink/90",
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
        <Link
          href="#top"
          className="focus-ring rounded-md text-on-dark"
          aria-label="CareSync home"
        >
          <CareSyncMark size={34} showWordmark className="text-on-dark" />
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "focus-ring heading-caps rounded-md px-3 py-2 text-sm transition-colors",
                active === link.href.slice(1)
                  ? "bg-lime/10 text-lime"
                  : "text-on-dark-muted hover:bg-lime/10 hover:text-lime",
              )}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#demo"
            className="focus-ring heading-caps ml-2 rounded-lg bg-lime px-4 py-2 text-sm font-semibold text-ink transition hover:bg-lime-dim"
          >
            Watch Demo
          </a>
        </nav>

        <button
          type="button"
          className="focus-ring rounded-md p-2 text-on-dark md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-lime/10 bg-ink px-5 py-4 md:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="focus-ring heading-caps rounded-md px-3 py-2.5 text-sm text-on-dark-muted hover:bg-lime/10 hover:text-lime"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#demo"
              className="focus-ring heading-caps mt-2 rounded-lg bg-lime px-4 py-2.5 text-center text-sm font-semibold text-ink transition hover:bg-lime-dim"
              onClick={() => setOpen(false)}
            >
              Watch Demo
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
