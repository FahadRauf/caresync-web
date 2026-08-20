import { examRows } from "@/content/site";
import { cn } from "@/lib/cn";

const sampleValues: Record<string, { left: string; right: string }> = {
  VA: { left: "6/12", right: "6/9" },
  BCVA: { left: "6/9", right: "6/6" },
  IOP: { left: "14", right: "15" },
  Pupil: { left: "RRR", right: "RRR" },
  "Anterior Segment": { left: "Clear", right: "Clear" },
  Fundus: { left: "Normal", right: "Normal" },
  "OCT CMT": { left: "245 µm", right: "238 µm" },
};

type ExamGridProps = {
  className?: string;
  compact?: boolean;
};

export function ExamGrid({ className, compact }: ExamGridProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-lg border border-border bg-surface shadow-md",
        className,
      )}
    >
      <div className="border-b border-border bg-primary-soft px-4 py-2.5">
        <p className="heading-caps text-xs font-semibold tracking-[0.12em] text-primary">
          Examination findings
        </p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[420px] border-collapse text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="heading-caps px-3 py-2 text-left text-[11px] font-semibold tracking-wide text-fg-muted">
                Finding
              </th>
              <th className="heading-caps px-3 py-2 text-center text-[11px] font-semibold tracking-wide text-fg-muted">
                Right
              </th>
              <th className="heading-caps px-3 py-2 text-center text-[11px] font-semibold tracking-wide text-fg-muted">
                Left
              </th>
            </tr>
          </thead>
          <tbody>
            {examRows.map((row) => (
              <tr key={row.label} className="border-b border-border/60 last:border-0">
                <td className="px-3 py-2 font-medium text-fg">
                  {compact ? row.formLabel : row.label}
                </td>
                <td className="px-3 py-2 text-center text-fg-muted">
                  {sampleValues[row.label]?.right ?? "—"}
                </td>
                <td className="px-3 py-2 text-center text-fg-muted">
                  {sampleValues[row.label]?.left ?? "—"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
