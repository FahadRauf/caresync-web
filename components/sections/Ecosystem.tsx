import { HexIcon } from "@/components/ui/HexIcon";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { capabilities } from "@/content/site";
import { cn } from "@/lib/cn";
import {
  Banknote,
  Eye,
  FileText,
  Glasses,
  Receipt,
  Scissors,
  Stethoscope,
  Users,
} from "lucide-react";

const iconMap = {
  patients: Users,
  consultations: Stethoscope,
  prescriptions: FileText,
  spectacles: Glasses,
  surgeries: Scissors,
  emr: FileText,
  billing: Receipt,
  finance: Banknote,
};

export function Ecosystem() {
  return (
    <Section id="features">
      <SectionHeading
        title="What CareSync handles"
        description="From the first patient search to the final bill — every major clinic function connected in one desktop application."
      />
      <div className="grid auto-rows-fr gap-4 md:grid-cols-12">
        {capabilities.map((cap) => {
          const Icon = iconMap[cap.id as keyof typeof iconMap] ?? Eye;
          const highlighted = cap.id === "billing" || cap.id === "finance";
          return (
            <Reveal
              key={cap.id}
              className={cn(
                cap.wide ? "md:col-span-6" : "md:col-span-3",
                cap.id === "billing" && "md:col-span-4",
                cap.id === "finance" && "md:col-span-4",
              )}
            >
              <article
                className={cn(
                  "flex h-full flex-col rounded-xl border p-5 sm:p-6",
                  highlighted
                    ? "border-lime/40 bg-[#161616] shadow-[0_0_20px_rgba(177,255,0,0.06)]"
                    : "panel-dark",
                )}
              >
                <HexIcon icon={Icon} size={44} iconSize={18} className="mb-4" />
                <h3 className="font-display heading-caps text-lg font-bold text-on-dark">
                  {cap.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-on-dark-muted">
                  {cap.description}
                </p>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
