import { HexIcon } from "@/components/ui/HexIcon";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { roles } from "@/content/site";
import { Shield, Stethoscope, Wallet } from "lucide-react";

const roleIcons = {
  doctor: Shield,
  optometrist: Stethoscope,
  finance: Wallet,
};

export function Roles() {
  return (
    <Section id="roles" className="section-sand-deep">
      <SectionHeading
        title="Built for the whole clinic"
        description="Three distinct staff roles — each with the access they need and nothing they don't."
      />
      <div className="grid gap-6 lg:grid-cols-3">
        {roles.map((role) => {
          const Icon = roleIcons[role.id];
          return (
            <Reveal key={role.id}>
              <article className="panel-elevated h-full border-t-2 border-t-lime p-6">
                <HexIcon icon={Icon} className="mb-4" />
                <h3 className="font-display heading-caps text-xl font-bold text-on-dark">
                  {role.title}
                </h3>
                <p className="mt-1 text-sm font-medium text-lime">
                  {role.subtitle}
                </p>
                <ul className="mt-5 space-y-2.5">
                  {role.items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2 text-sm leading-relaxed text-on-dark-muted"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-lime" />
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
