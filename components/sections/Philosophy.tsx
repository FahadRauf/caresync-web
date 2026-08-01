import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { philosophy } from "@/content/site";
import { Layers, Split, Workflow } from "lucide-react";

const icons = [Split, Layers, Workflow];

export function Philosophy() {
  return (
    <Section id="philosophy" className="section-sand-deep">
      <SectionHeading
        title={philosophy.title}
        description="CareSync was built around how eye clinics actually work — not around generic patient-record templates."
      />
      <div className="grid gap-5 md:grid-cols-3">
        {philosophy.points.map((point, i) => {
          const Icon = icons[i];
          return (
            <Reveal key={point.title}>
              <article className="h-full rounded-2xl border border-ink/8 bg-white p-6 shadow-sm">
                <div className="mb-4 inline-flex rounded-xl bg-sand-deep p-3 text-coral">
                  <Icon size={22} strokeWidth={1.75} />
                </div>
                <h3 className="text-lg font-semibold text-ink">{point.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {point.description}
                </p>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
