import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { TechDecor } from "@/components/ui/TechDecor";
import { contact, finalCta } from "@/content/site";
import { Play } from "lucide-react";

export function FinalCta() {
  return (
    <Section
      id="cta"
      plum
      className="dusk-wash !pb-24"
      innerClassName="text-center"
    >
      <TechDecor />
      <Reveal>
        <h2 className="font-display heading-caps mx-auto max-w-2xl text-3xl font-bold tracking-tight text-on-dark sm:text-4xl lg:text-5xl">
          {finalCta.title}
        </h2>
        <span
          className="mx-auto mt-5 block h-0.5 w-16 bg-lime"
          aria-hidden="true"
        />
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-on-dark-muted sm:text-lg">
          {finalCta.description}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {contact.demoBookingUrl ? (
            <a
              href={contact.demoBookingUrl}
              className="focus-ring heading-caps rounded-lg bg-lime px-6 py-3 text-sm font-semibold text-ink transition hover:bg-lime-dim"
            >
              {finalCta.primaryCta}
            </a>
          ) : (
            <span className="heading-caps rounded-lg bg-lime px-6 py-3 text-sm font-semibold text-ink">
              {finalCta.primaryCta}
            </span>
          )}
          <a
            href="#demo"
            className="focus-ring heading-caps inline-flex items-center gap-2 rounded-lg border border-lime/40 bg-transparent px-6 py-3 text-sm font-semibold text-lime transition hover:bg-lime/10 hover:shadow-[0_0_16px_rgba(177,255,0,0.15)]"
          >
            <Play size={16} fill="currentColor" />
            {finalCta.secondaryCta}
          </a>
        </div>
      </Reveal>
    </Section>
  );
}
