import { HexIcon } from "@/components/ui/HexIcon";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { backups } from "@/content/site";
import { Database, HardDrive, KeyRound } from "lucide-react";

const icons = [Database, HardDrive, KeyRound, HardDrive, KeyRound];

export function Backups() {
  return (
    <Section id="backups" tint>
      <SectionHeading
        title={backups.title}
        description="CareSync puts you in control. Backups are manual by design — so you decide where copies live and who can access them."
      />
      <div className="grid gap-4 md:grid-cols-2">
        {backups.points.map((point, i) => {
          const Icon = icons[i] ?? Database;
          return (
            <Reveal key={point}>
              <div className="panel flex gap-4 p-5">
                <HexIcon icon={Icon} size={44} iconSize={18} />
                <p className="pt-2 text-sm leading-relaxed text-fg-muted">
                  {point}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
