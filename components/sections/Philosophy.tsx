import { GlowDivider } from "@/components/ui/GlowDivider";
import { HexIcon } from "@/components/ui/HexIcon";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { TechDecor } from "@/components/ui/TechDecor";
import { philosophy } from "@/content/site";
import { Layers, Split, Workflow } from "lucide-react";

const icons = [Split, Layers, Workflow];

export function Philosophy() {
  return (
    <Section id="philosophy" className="section-sand-deep">
      <TechDecor showHex={false} />
      <SectionHeading
        title={philosophy.title}
        description="CareSync was built around how eye clinics actually work — not around generic patient-record templates."
      />
      <div className="relative max-w-3xl">
        {philosophy.points.map((point, i) => {
          const Icon = icons[i];
          return (
            <Reveal key={point.title}>
              <article className="flex gap-5 py-6 sm:gap-6">
                <HexIcon icon={Icon} />
                <div className="min-w-0 flex-1 pt-1">
                  <h3 className="font-display heading-caps text-lg font-bold text-on-dark">
                    {point.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-on-dark-muted">
                    {point.description}
                  </p>
                </div>
              </article>
              {i < philosophy.points.length - 1 ? (
                <GlowDivider className="my-0" />
              ) : null}
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
