import { AppFrame } from "@/components/ui/AppFrame";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { financeEntries, financeMetrics } from "@/content/site";
import { assetPath } from "@/lib/assetPath";

export function Finance() {
  return (
    <Section id="finance">
      <SectionHeading
        title="Finances that reflect clinic reality"
        description="Operations gives the Doctor and Finance Manager a clear picture of earnings, expenses, refunds and outstanding balances."
      />
      <div className="mb-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {financeMetrics.map((metric) => (
          <Reveal key={metric.label}>
            <div className="panel p-4">
              <p className="heading-caps text-[11px] font-semibold tracking-wide text-fg-muted">
                {metric.label}
              </p>
              <p className="font-display mt-2 text-2xl font-bold text-primary">
                —
              </p>
              <p className="mt-1 text-xs text-fg-muted">{metric.hint}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <Reveal>
          <AppFrame
            src={assetPath("/screens/insights.png")}
            alt="CareSync Operations Insights showing earnings, expenses and outstanding balances"
            cropBottom="8%"
          />
        </Reveal>
        <div>
          <Reveal>
            <AppFrame
              src={assetPath("/screens/entries.png")}
              alt="CareSync Operations Entries for logging clinic expenses"
              cropBottom="12%"
            />
          </Reveal>
          <ul className="mt-6 space-y-2">
            {financeEntries.map((entry) => (
              <li
                key={entry}
                className="flex gap-2 text-sm leading-relaxed text-fg-muted"
              >
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                {entry}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
