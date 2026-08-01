import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { architecture } from "@/content/site";
import { Monitor, Network, Server } from "lucide-react";

export function Architecture() {
  return (
    <Section id="architecture" dark>
      <SectionHeading
        dark
        title={architecture.title}
        description={architecture.description}
      />
      <Reveal>
        <div className="mx-auto max-w-3xl">
          <div className="flex flex-col items-center gap-4">
            <div className="w-full max-w-md rounded-2xl border border-peach/15 bg-peach/5 p-6 text-center backdrop-blur-sm">
              <Server className="mx-auto text-amber-light" size={28} />
              <p className="mt-3 font-semibold text-on-dark">
                {architecture.hostLabel}
              </p>
              <p className="mt-1 text-sm text-on-dark-muted">
                {architecture.hostDetail}
              </p>
            </div>

            <div className="flex flex-col items-center gap-1 text-on-dark-muted">
              <Network size={20} className="text-peach" />
              <span className="text-xs uppercase tracking-widest">
                Local clinic network
              </span>
            </div>

            <div className="grid w-full max-w-2xl gap-4 sm:grid-cols-2">
              {architecture.clientLabels.map((label) => (
                <div
                  key={label}
                  className="rounded-2xl border border-peach/15 bg-peach/5 p-5 text-center"
                >
                  <Monitor className="mx-auto text-azure" size={24} />
                  <p className="mt-3 text-sm font-medium text-on-dark">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <ul className="mt-10 grid gap-3 sm:grid-cols-2">
            {architecture.notes.map((note) => (
              <li
                key={note}
                className="rounded-xl border border-peach/15 bg-peach/5 px-4 py-3 text-sm text-on-dark-muted"
              >
                {note}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Section>
  );
}
