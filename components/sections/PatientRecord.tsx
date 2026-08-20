import { AppFrame } from "@/components/ui/AppFrame";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { patientRecordHighlights } from "@/content/site";
import { assetPath } from "@/lib/assetPath";
import { Check } from "lucide-react";

export function PatientRecord() {
  return (
    <Section id="patient-record" tint>
      <SectionHeading
        title="The complete patient story stays together"
        description="One patient record holds clinical history, visits, prescriptions, spectacles, surgeries, EMR documents and bills — organised in tabs with counts so you always know what is on file."
      />
      <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
        <Reveal>
          <AppFrame
            src={assetPath("/screens/patient-record.png")}
            alt="CareSync patient record showing tab navigation and clinical history"
            cropBottom="6%"
          />
        </Reveal>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
          {patientRecordHighlights.map((item) => (
            <Reveal key={item}>
              <div className="panel flex gap-3 px-4 py-3">
                <Check
                  size={18}
                  className="mt-0.5 shrink-0 text-primary"
                  strokeWidth={2.5}
                />
                <p className="text-sm leading-relaxed text-fg">{item}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
