import { sampleLetterhead } from "@/content/site";
import { cn } from "@/lib/cn";

type LetterheadSheetProps = {
  className?: string;
};

export function LetterheadSheet({ className }: LetterheadSheetProps) {
  const { patient } = sampleLetterhead;

  return (
    <div
      className={cn(
        "mx-auto max-w-lg rotate-[-0.6deg] rounded-sm bg-white p-6 shadow-[0_20px_50px_-15px_rgba(5,19,42,0.4)] ring-1 ring-ink/10 sm:p-7",
        className,
      )}
    >
      <header className="flex items-start justify-between gap-4 border-b-2 border-[#111] pb-3">
        <div className="min-w-0 text-[11px] leading-snug text-[#222]">
          <p className="text-[#444]">{sampleLetterhead.specialization}</p>
          <p className="mt-0.5 text-sm font-bold">{sampleLetterhead.name}</p>
          {sampleLetterhead.credentials.map((line) => (
            <p key={line} className="text-[#333]">
              {line}
            </p>
          ))}
          <p className="mt-1">Mobile: {sampleLetterhead.phone}</p>
        </div>
        <div className="shrink-0 text-right">
          <div className="ml-auto flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-clinic/20 to-coral/20 text-[10px] font-bold text-clinic">
            {sampleLetterhead.clinicName.split(" ")[0]}
          </div>
          <p className="mt-1 text-[9px] font-bold tracking-wider text-[#1a3a5c] uppercase">
            {sampleLetterhead.clinicName}
          </p>
        </div>
      </header>

      <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 border-b border-[#ccc] pb-2 text-[11px]">
        <span>
          <strong>Name:</strong> {patient.name}
        </span>
        <span>
          <strong>Gender:</strong> {patient.gender}
        </span>
        <span>
          <strong>Age:</strong> {patient.age}
        </span>
        <span>
          <strong>MRN:</strong> {patient.mrn}
        </span>
        <span>
          <strong>Visit:</strong> {patient.visit}
        </span>
        <span>
          <strong>Date:</strong> {patient.date}
        </span>
      </div>

      <div className="mt-3">
        <p className="text-[10px] font-bold tracking-wide text-[#444] uppercase">
          Visit / clinical summary
        </p>
        <table className="mt-1 w-full border-collapse text-[10px]">
          <thead>
            <tr className="border-b border-[#999]">
              <th className="py-1 text-left font-bold">Finding</th>
              <th className="py-1 text-center font-bold">Right</th>
              <th className="py-1 text-center font-bold">Left</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["VA", "6/9", "6/12"],
              ["BCVA", "6/6", "6/9"],
              ["IOP", "15", "14"],
              ["Fundus", "Normal", "Normal"],
            ].map(([label, r, l]) => (
              <tr key={label}>
                <td className="py-0.5 font-semibold">{label}</td>
                <td className="py-0.5 text-center">{r}</td>
                <td className="py-0.5 text-center">{l}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-3 grid gap-2 sm:grid-cols-2">
        <div className="rounded border border-[#bbb] p-2">
          <p className="text-[9px] font-bold tracking-wide text-[#444] uppercase">
            Diagnosis
          </p>
          <p className="mt-1 text-[10px] leading-snug">
            Early nuclear sclerosis, both eyes.
          </p>
        </div>
        <div className="rounded border border-[#bbb] p-2">
          <p className="text-[9px] font-bold tracking-wide text-[#444] uppercase">
            Treatment
          </p>
          <p className="mt-1 text-[10px] leading-snug">
            Lubricating drops · Follow-up in 4 weeks
          </p>
        </div>
      </div>

      <p className="mt-4 text-center text-[9px] font-bold tracking-[0.12em] text-[#666] uppercase">
        Not valid for court
      </p>
    </div>
  );
}
