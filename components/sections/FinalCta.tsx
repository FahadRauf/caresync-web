import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { contact, finalCta } from "@/content/site";
import { Play } from "lucide-react";

export function FinalCta() {
  const hasContact = Object.values(contact).some(Boolean);

  return (
    <Section
      id="contact"
      plum
      className="dusk-wash !pb-24"
      innerClassName="text-center"
    >
      <Reveal>
        <h2 className="font-display mx-auto max-w-2xl text-3xl font-semibold tracking-tight text-on-dark sm:text-4xl lg:text-5xl">
          {finalCta.title}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-on-dark-muted sm:text-lg">
          {finalCta.description}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {contact.demoBookingUrl ? (
            <a
              href={contact.demoBookingUrl}
              className="focus-ring rounded-lg bg-coral px-6 py-3 text-sm font-semibold text-white transition hover:bg-coral-dark"
            >
              {finalCta.primaryCta}
            </a>
          ) : (
            <span className="rounded-lg bg-coral/90 px-6 py-3 text-sm font-semibold text-white">
              {finalCta.primaryCta}
            </span>
          )}
          <a
            href="#demo"
            className="focus-ring inline-flex items-center gap-2 rounded-lg border border-peach/35 bg-peach/10 px-6 py-3 text-sm font-semibold text-peach transition hover:bg-peach/20"
          >
            <Play size={16} fill="currentColor" />
            {finalCta.secondaryCta}
          </a>
        </div>
        {hasContact ? (
          <div className="mx-auto mt-10 flex max-w-md flex-wrap justify-center gap-4 text-sm text-on-dark-muted">
            {contact.phone ? <span>Phone: {contact.phone}</span> : null}
            {contact.whatsapp ? <span>WhatsApp: {contact.whatsapp}</span> : null}
            {contact.email ? <span>Email: {contact.email}</span> : null}
            {contact.pricingUrl ? (
              <a
                href={contact.pricingUrl}
                className="focus-ring text-peach hover:underline"
              >
                Pricing
              </a>
            ) : null}
          </div>
        ) : (
          <p className="mt-8 text-xs text-on-dark-muted/70">
            Contact details and booking links can be added in content/site.ts
          </p>
        )}
      </Reveal>
    </Section>
  );
}
