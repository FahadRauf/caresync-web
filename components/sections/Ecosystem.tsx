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

const accentMap = {
  clinic: "text-clinic bg-clinic/10",
  coral: "text-coral bg-coral/10",
  amber: "text-amber bg-amber/10",
  rose: "text-rose bg-rose/10",
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
                  "flex h-full flex-col rounded-2xl border p-5 sm:p-6",
                  cap.id === "billing" || cap.id === "finance"
                    ? "border-peach/15 bg-ink text-on-dark"
                    : "border-ink/8 bg-white shadow-sm",
                )}
              >
                <div
                  className={cn(
                    "mb-4 inline-flex w-fit rounded-xl p-2.5",
                    cap.id === "billing" || cap.id === "finance"
                      ? "bg-peach/15 text-peach"
                      : accentMap[cap.accent],
                  )}
                >
                  <Icon size={20} strokeWidth={1.75} />
                </div>
                <h3
                  className={cn(
                    "text-lg font-semibold",
                    cap.id === "billing" || cap.id === "finance"
                      ? "text-on-dark"
                      : "text-ink",
                  )}
                >
                  {cap.title}
                </h3>
                <p
                  className={cn(
                    "mt-2 flex-1 text-sm leading-relaxed",
                    cap.id === "billing" || cap.id === "finance"
                      ? "text-on-dark-muted"
                      : "text-muted",
                  )}
                >
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
