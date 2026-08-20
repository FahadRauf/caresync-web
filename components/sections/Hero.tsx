import { AppFrame } from "@/components/ui/AppFrame";
import { Reveal } from "@/components/ui/Reveal";
import { TechDecor } from "@/components/ui/TechDecor";
import { hero } from "@/content/site";
import { assetPath } from "@/lib/assetPath";
import { ArrowDown, Play } from "lucide-react";

export function Hero() {
  return (
    <section
      id="top"
      className="section-navy relative min-h-[92vh] overflow-hidden pt-28 pb-16 md:pt-32 md:pb-24"
    >
      <TechDecor />
      <div className="relative mx-auto grid max-w-6xl items-end gap-10 px-5 sm:px-6 lg:grid-cols-[1fr_1.2fr] lg:gap-8 lg:px-8">
        <Reveal className="relative z-10 pb-4 lg:pb-16">
          <p className="heading-caps text-xs font-semibold tracking-[0.2em] text-fg-muted">
            {hero.eyebrow}
          </p>
          <h1 className="font-display heading-caps mt-3 text-5xl font-bold tracking-tight text-fg sm:text-6xl lg:text-[4.25rem] lg:leading-[1.02]">
            {hero.title}
          </h1>
          <p className="font-display heading-caps mt-4 text-3xl font-bold text-primary sm:text-4xl lg:text-5xl">
            {hero.headline}
          </p>
          <span className="mt-5 block h-0.5 w-16 bg-primary" aria-hidden="true" />
          <p className="mt-5 max-w-lg text-base leading-relaxed text-fg-muted sm:text-lg">
            {hero.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#demo"
              className="focus-ring heading-caps inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary-hover"
            >
              <Play size={16} fill="currentColor" />
              {hero.primaryCta}
            </a>
            <a
              href="#features"
              className="focus-ring heading-caps inline-flex items-center gap-2 rounded-lg border border-white/25 bg-transparent px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              {hero.secondaryCta}
              <ArrowDown size={16} />
            </a>
          </div>
          <div className="mt-10 flex flex-wrap gap-6 text-sm text-fg-muted">
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              100% local · 100% private
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              One Host + up to 2 Clients
            </span>
          </div>
        </Reveal>

        <Reveal className="relative lg:-mr-8 lg:translate-y-6">
          <div className="relative [mask-image:linear-gradient(to_left,black_60%,transparent_100%)] lg:[mask-image:linear-gradient(to_left,black_70%,transparent_100%)]">
            <AppFrame
              src={assetPath("/screens/dashboard.png")}
              alt="CareSync dashboard showing patient counts, recent visits and clinic overview"
              priority
              cropBottom="8%"
              className="lg:rotate-[0.8deg]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
