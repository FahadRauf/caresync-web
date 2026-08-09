import { AppFrame } from "@/components/ui/AppFrame";
import { GlowDivider } from "@/components/ui/GlowDivider";
import { HexIcon } from "@/components/ui/HexIcon";
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
        <div>
          {outputs.map((output, i) => {
            const Icon = outputIcons[output.id as keyof typeof outputIcons];
            return (
              <Reveal key={output.id}>
                <article className="py-5">
                  <div className="flex items-start gap-4">
                    <HexIcon icon={Icon} size={44} iconSize={18} />
                    <div className="min-w-0 flex-1">
                      <h3 className="font-display heading-caps text-lg font-bold text-on-dark">
                        {output.title}
                      </h3>
                      <ol className="mt-4 flex flex-wrap items-center gap-2 text-sm text-on-dark-muted">
                        {output.steps.map((step, j) => (
                          <li key={step} className="flex items-center gap-2">
                            {j > 0 ? (
                              <ArrowRight size={14} className="text-lime" />
                            ) : null}
                            <span className="rounded-full border border-lime/20 bg-ink-plum px-3 py-1 text-lime">
                              {step}
                            </span>
                          </li>
                        ))}
                      </ol>
                      <p className="mt-3 text-xs leading-relaxed text-on-dark-muted">
                        {output.note}
                      </p>
                    </div>
                  </div>
                </article>
                {i < outputs.length - 1 ? <GlowDivider /> : null}
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
