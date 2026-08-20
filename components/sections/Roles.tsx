import { HexIcon } from "@/components/ui/HexIcon";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { roles } from "@/content/site";
import { accentStyles } from "@/lib/accents";
import { cn } from "@/lib/cn";
import { Shield, Stethoscope, Wallet } from "lucide-react";

const roleIcons = {
  doctor: Shield,
  optometrist: Stethoscope,
  finance: Wallet,
};

export function Roles() {
  return (
    <Section id="roles">
      <SectionHeading
        title="Built for the whole clinic"
        description="Three distinct staff roles — each with the access they need and nothing they don't."
      />
      <div className="grid gap-6 lg:grid-cols-3">
        {roles.map((role) => {
          const Icon = roleIcons[role.id];
          const accent = accentStyles[role.accent];
          return (
            <Reveal key={role.id}>
              <article
                className={cn(
                  "panel-elevated h-full border-t-2 p-6",
                  accent.border,
                )}
              >
                <HexIcon
                  icon={Icon}
                  className="mb-4"
                  colorClass={accent.text}
                />
                <h3 className="font-display heading-caps text-xl font-bold text-fg">
                  {role.title}
                </h3>
                <p className={cn("mt-1 text-sm font-medium", accent.text)}>
                  {role.subtitle}
                </p>
                <ul className="mt-5 space-y-2.5">
                  {role.items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2 text-sm leading-relaxed text-fg-muted"
                    >
                      <span
                        className={cn(
                          "mt-2 h-1 w-1 shrink-0 rounded-full",
                          accent.bg,
                        )}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
