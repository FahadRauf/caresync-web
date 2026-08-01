import { AppFrame } from "@/components/ui/AppFrame";
import { CareSyncMark } from "@/components/ui/CareSyncMark";
import { Reveal } from "@/components/ui/Reveal";
import { hero } from "@/content/site";
import { ArrowDown, Play } from "lucide-react";

export function Hero() {
  return (
    <section
      id="top"
      className="section-plum dusk-wash relative min-h-[92vh] overflow-hidden pt-28 pb-16 md:pt-32 md:pb-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,192,154,0.12),transparent_45%)]" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-6 lg:grid-cols-[1fr_1.15fr] lg:gap-14 lg:px-8">
        <Reveal>
          <CareSyncMark size={40} className="text-on-dark" />
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-peach">
            {hero.eyebrow}
          </p>
          <h1 className="font-display mt-3 text-5xl font-semibold tracking-tight text-on-dark sm:text-6xl lg:text-[4.25rem] lg:leading-[1.02]">
            {hero.title}
          </h1>
          <p className="font-display mt-4 text-2xl text-peach-soft sm:text-3xl">
            {hero.headline}
          </p>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-on-dark-muted sm:text-lg">
            {hero.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#demo"
              className="focus-ring inline-flex items-center gap-2 rounded-lg bg-coral px-5 py-3 text-sm font-semibold text-white transition hover:bg-coral-dark"
            >
              <Play size={16} fill="currentColor" />
              {hero.primaryCta}
            </a>
            <a
              href="#features"
              className="focus-ring inline-flex items-center gap-2 rounded-lg border border-peach/35 bg-peach/10 px-5 py-3 text-sm font-semibold text-peach backdrop-blur-sm transition hover:bg-peach/20"
            >
              {hero.secondaryCta}
              <ArrowDown size={16} />
            </a>
          </div>
          <div className="mt-10 flex flex-wrap gap-6 text-sm text-on-dark-muted">
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-peach" />
              100% local · 100% private
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-azure" />
              One Host + up to 2 Clients
            </span>
          </div>
        </Reveal>

        <Reveal className="lg:translate-y-2">
          <AppFrame
            src="/screens/dashboard.png"
            alt="CareSync dashboard showing patient counts, recent visits and clinic overview"
            priority
            cropBottom="8%"
            className="lg:rotate-[0.8deg]"
          />
        </Reveal>
      </div>
    </section>
  );
}
