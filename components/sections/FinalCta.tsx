import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { TechDecor } from "@/components/ui/TechDecor";
import { contact, finalCta } from "@/content/site";
import { Play } from "lucide-react";

export function FinalCta() {
  return (
    <Section
      id="cta"
      navy
      className="!pb-24"
      innerClassName="text-center"
    >
      <TechDecor />
      <Reveal>
        <h2 className="font-display heading-caps mx-auto max-w-2xl text-3xl font-bold tracking-tight text-fg sm:text-4xl lg:text-5xl">
          {finalCta.title}
        </h2>
        <span
          className="mx-auto mt-5 block h-0.5 w-16 bg-primary"
          aria-hidden="true"
        />
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-fg-muted sm:text-lg">
          {finalCta.description}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {contact.demoBookingUrl ? (
            <a
              href={contact.demoBookingUrl}
              className="focus-ring heading-caps rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-hover"
            >
              {finalCta.primaryCta}
            </a>
          ) : (
            <span className="heading-caps rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white">
              {finalCta.primaryCta}
            </span>
          )}
          <a
            href="#demo"
            className="focus-ring heading-caps inline-flex items-center gap-2 rounded-lg border border-white/25 bg-transparent px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            <Play size={16} fill="currentColor" />
            {finalCta.secondaryCta}
          </a>
        </div>
      </Reveal>
    </Section>
  );
}
