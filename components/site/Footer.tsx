import { CareSyncMark } from "@/components/ui/CareSyncMark";
import { GlowDivider } from "@/components/ui/GlowDivider";
import { footerCredit, navLinks } from "@/content/site";

export function Footer() {
  return (
    <footer className="relative bg-ink py-12 text-on-dark-muted">
      <GlowDivider className="absolute inset-x-0 top-0" />
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 sm:px-6 lg:px-8 md:flex-row md:items-start md:justify-between">
        <div>
          <CareSyncMark size={28} showWordmark className="text-on-dark" />
          <p className="mt-3 max-w-xs text-sm leading-relaxed">
            Complete clinic management for eye clinics. Local, encrypted and
            built for the way ophthalmology practices actually work.
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm" aria-label="Footer">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="focus-ring heading-caps rounded-sm transition-colors hover:text-lime"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
      <p className="mx-auto mt-10 max-w-6xl px-5 text-xs text-on-dark-muted/70 sm:px-6 lg:px-8">
        © {new Date().getFullYear()} CareSync. Desktop software for eye clinics.
        All patient data stays on your clinic&apos;s own computer.
      </p>
      <p className="mx-auto mt-2 max-w-6xl px-5 text-xs text-on-dark-muted/70 sm:px-6 lg:px-8">
        {footerCredit}
      </p>
    </footer>
  );
}
