import { HexIcon } from "@/components/ui/HexIcon";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { contact } from "@/content/site";
import { Mail, Phone, User } from "lucide-react";

const phoneHref = contact.phone
  ? `tel:+92${contact.phone.replace(/^0/, "")}`
  : null;

export function Contact() {
  return (
    <Section id="contact" tint>
      <SectionHeading
        title="Get in touch"
        description="Questions about CareSync, demos, or deployment — reach out directly."
      />
      <div className="grid gap-4 sm:grid-cols-3">
        {contact.name ? (
          <Reveal>
            <div className="panel flex gap-4 p-5">
              <HexIcon icon={User} size={44} iconSize={18} />
              <div className="pt-2">
                <p className="heading-caps text-xs font-semibold tracking-wider text-fg-muted">
                  Made By
                </p>
                <p className="mt-1 text-sm text-fg">{contact.name}</p>
              </div>
            </div>
          </Reveal>
        ) : null}
        {contact.phone ? (
          <Reveal>
            <div className="panel flex gap-4 p-5">
              <HexIcon icon={Phone} size={44} iconSize={18} />
              <div className="pt-2">
                <p className="heading-caps text-xs font-semibold tracking-wider text-fg-muted">
                  Phone
                </p>
                <a
                  href={phoneHref ?? undefined}
                  className="focus-ring mt-1 inline-block text-sm text-primary transition hover:underline"
                >
                  {contact.phone}
                </a>
              </div>
            </div>
          </Reveal>
        ) : null}
        {contact.email ? (
          <Reveal>
            <div className="panel flex gap-4 p-5">
              <HexIcon icon={Mail} size={44} iconSize={18} />
              <div className="pt-2">
                <p className="heading-caps text-xs font-semibold tracking-wider text-fg-muted">
                  Email
                </p>
                <a
                  href={`mailto:${contact.email}`}
                  className="focus-ring mt-1 inline-block text-sm text-primary transition hover:underline"
                >
                  {contact.email}
                </a>
              </div>
            </div>
          </Reveal>
        ) : null}
      </div>
    </Section>
  );
}
