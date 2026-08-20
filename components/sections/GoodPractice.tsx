import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { goodPractices } from "@/content/site";
import { CheckCircle2 } from "lucide-react";

export function GoodPractice() {
  return (
    <Section id="practices">
      <SectionHeading
        title="Good practices"
        description="A few habits that keep your clinic data safe and your team working smoothly."
      />
      <ul className="grid gap-3 sm:grid-cols-2">
        {goodPractices.map((item) => (
          <Reveal key={item} as="li">
            <div className="panel flex items-start gap-3 px-4 py-3.5">
              <CheckCircle2
                size={18}
                className="mt-0.5 shrink-0 text-primary"
                strokeWidth={2}
              />
              <span className="text-sm text-fg">{item}</span>
            </div>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
