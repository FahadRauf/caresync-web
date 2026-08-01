import { AppFrame } from "@/components/ui/AppFrame";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow, Section, SectionHeading } from "@/components/ui/Section";
import { securityLimitation, securityPoints } from "@/content/site";
import { AlertTriangle, Lock, ShieldCheck } from "lucide-react";

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
              <article className="h-full rounded-2xl border border-peach/15 bg-peach/5 p-5">
                <ShieldCheck className="text-peach" size={20} />
                <h3 className="mt-3 font-semibold text-on-dark">{point.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-on-dark-muted">
                  {point.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <AppFrame
            src="/screens/login.png"
            alt="CareSync login screen with password unlock"
            cropTop="2%"
            cropBottom="2%"
            className="max-w-sm"
          />
          <div className="mt-6 rounded-xl border border-amber-light/35 bg-amber-light/10 p-4">
            <div className="flex gap-3">
              <AlertTriangle
                className="mt-0.5 shrink-0 text-amber-light"
                size={18}
              />
              <div>
                <p className="font-semibold text-on-dark">
                  {securityLimitation.title}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-on-dark-muted">
                  {securityLimitation.description}
                </p>
              </div>
            </div>
          </div>
          {/* <p className="mt-4 flex items-center gap-2 text-xs text-on-dark-muted">
            <Lock size={14} />
            Data path: %APPDATA%\CareSync\caresync.db
          </p> */}
        </Reveal>
      </div>
    </Section>
  );
}
