"use client";

import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { demoVideo } from "@/content/site";
import { Play } from "lucide-react";

export function VideoDemo() {
  return (
    <Section id="demo" plum className="dusk-wash">
      <SectionHeading
        dark
        title="See CareSync in action"
        description="From opening a patient record to completing an examination, prescription and bill — see how CareSync fits into a real clinic workflow."
      />
      <Reveal>
        <div className="relative overflow-hidden rounded-2xl border border-peach/15 bg-ink-deep/50 shadow-2xl">
          {demoVideo.src ? (
            <video
              controls
              poster={demoVideo.poster}
              className="aspect-video w-full"
              src={demoVideo.src}
            >
              Your browser does not support the video tag.
            </video>
          ) : (
            <div className="relative aspect-video w-full">
              <Image
                src={demoVideo.poster}
                alt="CareSync application preview — video placeholder"
                fill
                className="object-cover object-top opacity-80"
                sizes="(max-width: 1200px) 100vw, 960px"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-ink/60">
                <button
                  type="button"
                  className="focus-ring flex h-16 w-16 items-center justify-center rounded-full bg-coral text-white shadow-lg transition hover:scale-105 hover:bg-coral-dark"
                  aria-label="Play demo video — coming soon"
                >
                  <Play size={28} fill="currentColor" className="ml-1" />
                </button>
                <p className="mt-4 text-sm text-on-dark-muted">
                  Demo video placeholder — replace via{" "}
                  <code className="rounded bg-peach/15 px-1.5 py-0.5 text-xs text-peach">
                    content/site.ts
                  </code>
                </p>
              </div>
            </div>
          )}
        </div>
      </Reveal>
    </Section>
  );
}
