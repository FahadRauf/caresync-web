import { AppFrame } from "@/components/ui/AppFrame";
import { HexIcon } from "@/components/ui/HexIcon";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow, Section, SectionHeading } from "@/components/ui/Section";
import { securityLimitation, securityPoints } from "@/content/site";
import { assetPath } from "@/lib/assetPath";
import { AlertTriangle, ShieldCheck } from "lucide-react";

export function Security() {
  return (
    <Section id="security">
      <Eyebrow>Privacy &amp; security</Eyebrow>
      <SectionHeading
        title="Your clinic's data stays with your clinic"
        description="CareSync stores everything locally on the Host PC in an encrypted database. No cloud. No internet required for normal operation."
      />
      <div className="grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-start">
        <div className="grid gap-4 sm:grid-cols-2">
          {securityPoints.map((point) => (
            <Reveal key={point.title}>
              <article className="panel h-full p-5">
                <HexIcon icon={ShieldCheck} size={44} iconSize={18} />
                <h3 className="font-display heading-caps mt-3 font-bold text-fg">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                  {point.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <AppFrame
            src={assetPath("/screens/login.png")}
            alt="CareSync login screen with password unlock"
            cropTop="2%"
            cropBottom="2%"
            className="max-w-sm"
          />
          <div className="mt-6 rounded-xl border border-accent-amber/30 bg-primary-soft p-4">
            <div className="flex gap-3">
              <AlertTriangle
                className="mt-0.5 shrink-0 text-accent-amber"
                size={18}
              />
              <div>
                <p className="font-display heading-caps font-bold text-fg">
                  {securityLimitation.title}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-fg-muted">
                  {securityLimitation.description}
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
