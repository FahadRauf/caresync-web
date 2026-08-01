import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { roles } from "@/content/site";
import { cn } from "@/lib/cn";
import { Shield, Stethoscope, Wallet } from "lucide-react";

const roleIcons = {
  doctor: Shield,
  optometrist: Stethoscope,
  finance: Wallet,
};

const accentBorder = {
  clinic: "border-t-clinic",
  coral: "border-t-coral",
  amber: "border-t-amber",
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
              <article
                className={cn(
                  "h-full rounded-2xl border border-ink/8 border-t-4 bg-white p-6 shadow-sm",
                  accentBorder[role.accent],
                )}
              >
                <div className="mb-4 inline-flex rounded-xl bg-sand p-3 text-ink">
                  <Icon size={22} strokeWidth={1.75} />
                </div>
                <h3 className="text-xl font-semibold text-ink">{role.title}</h3>
                <p className="mt-1 text-sm font-medium text-coral">
                  {role.subtitle}
                </p>
                <ul className="mt-5 space-y-2.5">
                  {role.items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2 text-sm leading-relaxed text-muted"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-coral" />
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
