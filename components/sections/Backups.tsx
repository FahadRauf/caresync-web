import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { backups } from "@/content/site";
import { Database, HardDrive, KeyRound } from "lucide-react";

const icons = [Database, HardDrive, KeyRound, HardDrive, KeyRound];

export function Backups() {
  return (
    <Section id="backups" className="section-sand">
      <SectionHeading
        title={backups.title}
        description="CareSync puts you in control. Backups are manual by design — so you decide where copies live and who can access them."
      />
      <div className="grid gap-4 md:grid-cols-2">
        {backups.points.map((point, i) => {
          const Icon = icons[i] ?? Database;
          return (
            <Reveal key={point}>
              <div className="flex gap-4 rounded-2xl border border-ink/8 bg-white p-5 shadow-sm">
                <div className="rounded-xl bg-sand-deep p-2.5 text-clinic">
                  <Icon size={20} />
                </div>
                <p className="text-sm leading-relaxed text-muted">{point}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
