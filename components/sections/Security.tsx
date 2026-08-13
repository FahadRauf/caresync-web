import { AppFrame } from "@/components/ui/AppFrame";
import { HexIcon } from "@/components/ui/HexIcon";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow, Section, SectionHeading } from "@/components/ui/Section";
import { securityLimitation, securityPoints } from "@/content/site";
import { assetPath } from "@/lib/assetPath";
import { AlertTriangle, ShieldCheck } from "lucide-react";

export function Security() {
  return (
    <Section id="security" plum>
      <Eyebrow dark>Privacy &amp; security</Eyebrow>
      <SectionHeading
        dark
        title="Your clinic's data stays with your clinic"
        description="CareSync stores everything locally on the Host PC in an encrypted database. No cloud. No internet required for normal operation."
      />
      <div className="grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-start">
        <div className="grid gap-4 sm:grid-cols-2">
          {securityPoints.map((point) => (
            <Reveal key={point.title}>
              <article className="panel-dark h-full p-5">
                <HexIcon icon={ShieldCheck} size={44} iconSize={18} />
                <h3 className="font-display heading-caps mt-3 font-bold text-on-dark">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-on-dark-muted">
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
          <div className="mt-6 rounded-xl border border-lime/30 bg-lime/5 p-4">
            <div className="flex gap-3">
              <AlertTriangle
                className="mt-0.5 shrink-0 text-lime"
                size={18}
              />
              <div>
                <p className="font-display heading-caps font-bold text-on-dark">
                  {securityLimitation.title}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-on-dark-muted">
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
