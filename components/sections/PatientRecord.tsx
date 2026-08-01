import { AppFrame } from "@/components/ui/AppFrame";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { patientRecordHighlights, patientTabs } from "@/content/site";
import { cn } from "@/lib/cn";
import { Check } from "lucide-react";

export function PatientRecord() {
  return (
    <Section id="patient-record" className="section-sand">
      <SectionHeading
        title="The complete patient story stays together"
        description="One patient record holds clinical history, visits, prescriptions, spectacles, surgeries, EMR documents and bills — organised in tabs with counts so you always know what is on file."
      />
      <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
        <Reveal>
          {/* <div className="mb-4 flex flex-wrap gap-1 border-b border-ink/10 pb-1">
            {patientTabs.map((tab, i) => (
              <span
                key={tab}
                className={cn(
                  "rounded-t-lg px-3 py-2 text-xs font-medium sm:text-sm",
                  i === 0
                    ? "border-b-2 border-clinic text-clinic"
                    : "text-muted",
                )}
              >
                {tab}
                {tab !== "Clinical history" && tab !== "EMR" ? (
                  <span className="ml-1.5 rounded-full bg-sand-deep px-1.5 py-0.5 text-[10px] text-muted">
                    {i}
                  </span>
                ) : null}
              </span>
            ))}
          </div> */}
          <AppFrame
            src="/screens/patient-record.png"
            alt="CareSync patient record showing tab navigation and clinical history"
            cropBottom="6%"
          />
        </Reveal>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
          {patientRecordHighlights.map((item) => (
            <Reveal key={item}>
              <div className="flex gap-3 rounded-xl border border-ink/8 bg-white px-4 py-3 shadow-sm">
                <Check
                  size={18}
                  className="mt-0.5 shrink-0 text-coral"
                  strokeWidth={2.5}
                />
                <p className="text-sm leading-relaxed text-ink">{item}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
