import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { architecture } from "@/content/site";
import { Monitor, Network, Server } from "lucide-react";

export function Architecture() {
  return (
    <Section id="architecture" navy>
      <SectionHeading
        title={architecture.title}
        description={architecture.description}
      />
      <Reveal>
        <div className="mx-auto max-w-3xl">
          <div className="flex flex-col items-center gap-4">
            <div className="panel-elevated w-full max-w-md border-white/10 bg-white/5 p-6 text-center">
              <Server className="mx-auto text-primary" size={28} />
              <p className="font-display heading-caps mt-3 font-bold text-fg">
                {architecture.hostLabel}
              </p>
              <p className="mt-1 text-sm text-fg-muted">
                {architecture.hostDetail}
              </p>
            </div>

            <div className="flex flex-col items-center gap-1 text-fg-muted">
              <Network size={20} className="text-primary" />
              <span className="heading-caps text-xs tracking-widest">
                Local clinic network
              </span>
            </div>

            <div className="grid w-full max-w-2xl gap-4 sm:grid-cols-2">
              {architecture.clientLabels.map((label) => (
                <div
                  key={label}
                  className="panel border-white/10 bg-white/5 p-5 text-center"
                >
                  <Monitor className="mx-auto text-fg" size={24} />
                  <p className="mt-3 text-sm font-medium text-fg">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <ul className="mt-10 grid gap-3 sm:grid-cols-2">
            {architecture.notes.map((note) => (
              <li
                key={note}
                className="panel border-white/10 bg-white/5 px-4 py-3 text-sm text-fg-muted"
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
