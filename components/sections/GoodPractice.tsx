import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { goodPractices } from "@/content/site";
import { CheckCircle2 } from "lucide-react";

export function GoodPractice() {
  return (
    <Section id="practices" className="section-sand-deep">
      <SectionHeading
        title="Good practices"
        description="A few habits that keep your clinic data safe and your team working smoothly."
      />
      <ul className="grid gap-3 sm:grid-cols-2">
        {goodPractices.map((item) => (
          <Reveal key={item} as="li">
            <div className="panel-dark flex items-start gap-3 px-4 py-3.5">
              <CheckCircle2
                size={18}
                className="mt-0.5 shrink-0 text-lime"
                strokeWidth={2}
              />
              <span className="text-sm text-on-dark">{item}</span>
            </div>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
