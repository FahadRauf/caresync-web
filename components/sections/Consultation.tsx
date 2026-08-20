"use client";

import { ExamGrid } from "@/components/ui/ExamGrid";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow, Section, SectionHeading } from "@/components/ui/Section";
import { TechDecor } from "@/components/ui/TechDecor";
import { consultationSteps } from "@/content/site";
import { cn } from "@/lib/cn";
import { useReveal } from "@/lib/useReveal";

function WorkflowStep({
  step,
  index,
  total,
}: {
  step: (typeof consultationSteps)[number];
  index: number;
  total: number;
}) {
  const { ref, visible } = useReveal<HTMLLIElement>({ threshold: 0.3 });

  return (
    <li
      ref={ref}
      className={cn(
        "reveal relative flex gap-4 md:flex-col md:items-center md:text-center",
        visible && "visible",
      )}
      style={{ transitionDelay: `${index * 70}ms` }}
    >
      {index < total - 1 ? (
        <span
          aria-hidden
          className="absolute top-8 left-[15px] hidden h-px w-[calc(100%+1rem)] bg-gradient-to-r from-primary/40 to-transparent md:top-[18px] md:left-[calc(50%+20px)] md:block md:h-auto md:w-px md:bg-gradient-to-b md:from-primary/40 md:to-transparent"
        />
      ) : null}
      <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-primary bg-primary-soft text-xs font-bold text-primary md:mx-auto">
        {index + 1}
      </span>
      <div className="min-w-0 pb-6 md:pb-0">
        <p className="font-display heading-caps font-bold text-fg">
          {step.label}
        </p>
        <p className="mt-1 text-xs leading-relaxed text-fg-muted">
          {step.detail}
        </p>
      </div>
    </li>
  );
}

export function Consultation() {
  return (
    <Section id="consultation">
      <TechDecor showGrid={false} />
      <Eyebrow>A consultation with CareSync</Eyebrow>
      <SectionHeading
        title="Move through the visit systematically"
        description="Each patient record is organised into tabs. Save and next lets the doctor progress from clinical history through examination, prescription, spectacles, surgery and billing without leaving the record."
      />
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div>
          <ol className="grid gap-0 md:grid-cols-3 lg:grid-cols-1">
            {consultationSteps.map((step, i) => (
              <WorkflowStep
                key={step.id}
                step={step}
                index={i}
                total={consultationSteps.length}
              />
            ))}
          </ol>
        </div>
        <Reveal>
          <ExamGrid />
          <p className="mt-4 text-sm text-fg-muted">
            Record detailed eye examinations in one structured view — Right and
            Left columns for VA, BCVA, IOP GAT, Pupils, Ant seg, Fundus and OCT
            CMT, plus custom finding rows.
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
