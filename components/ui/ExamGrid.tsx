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
        "overflow-hidden rounded-lg border border-[#d8dee8] bg-white shadow-sm",
        className,
      )}
    >
      <div className="border-b border-[#d8dee8] bg-[#fafbfc] px-4 py-2.5">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#5c6b7f]">
          Examination findings
        </p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[420px] border-collapse text-sm">
          <thead>
            <tr className="border-b border-[#d8dee8]">
              <th className="px-3 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-[#5c6b7f]">
                Finding
              </th>
              <th className="px-3 py-2 text-center text-[11px] font-semibold uppercase tracking-wide text-[#5c6b7f]">
                Right
              </th>
              <th className="px-3 py-2 text-center text-[11px] font-semibold uppercase tracking-wide text-[#5c6b7f]">
                Left
              </th>
            </tr>
          </thead>
          <tbody>
            {examRows.map((row) => (
              <tr key={row.label} className="border-b border-[#eef1f5] last:border-0">
                <td className="px-3 py-2 font-medium text-[#1a2333]">
                  {compact ? row.formLabel : row.label}
                </td>
                <td className="px-3 py-2 text-center text-[#1a2333]">
                  {sampleValues[row.label]?.right ?? "—"}
                </td>
                <td className="px-3 py-2 text-center text-[#1a2333]">
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
