import { AppFrame } from "@/components/ui/AppFrame";
import { LetterheadSheet } from "@/components/ui/LetterheadSheet";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { outputs } from "@/content/site";
import { ArrowRight, FileDown, MessageCircle, Printer } from "lucide-react";

const outputIcons = {
  print: Printer,
  pdf: FileDown,
  whatsapp: MessageCircle,
};

export function Outputs() {
  return (
    <Section id="outputs" className="section-sand">
      <SectionHeading
        title="Print, PDF & WhatsApp"
        description="CareSync helps staff deliver information — not just store it. Every document uses your clinic letterhead."
      />
      <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div className="space-y-5">
          {outputs.map((output) => {
            const Icon = outputIcons[output.id as keyof typeof outputIcons];
            return (
              <Reveal key={output.id}>
                <article className="rounded-2xl border border-ink/8 bg-white p-5 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl bg-sand-deep p-2.5 text-coral">
                      <Icon size={20} />
                    </div>
                    <h3 className="text-lg font-semibold text-ink">
                      {output.title}
                    </h3>
                  </div>
                  <ol className="mt-4 flex flex-wrap items-center gap-2 text-sm text-muted">
                    {output.steps.map((step, i) => (
                      <li key={step} className="flex items-center gap-2">
                        {i > 0 ? (
                          <ArrowRight size={14} className="text-coral" />
                        ) : null}
                        <span className="rounded-full bg-sand-deep px-3 py-1">
                          {step}
                        </span>
                      </li>
                    ))}
                  </ol>
                  <p className="mt-3 text-xs leading-relaxed text-muted">
                    {output.note}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
        <Reveal>
          <LetterheadSheet />
          <div className="mt-6">
            <AppFrame
              src="/screens/directory.png"
              alt="CareSync directory with patient mobile numbers and WhatsApp action"
              cropBottom="10%"
            />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
