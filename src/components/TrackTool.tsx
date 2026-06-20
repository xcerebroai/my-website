/**
 * Section 7 — TrackTool intro.
 * Brief overview + "Learn More About TrackTool" button, with a stylized
 * dashboard mock (pure CSS/markup — no image asset required).
 * --- Edit the overview copy and FEATURES below. ---
 */
import { Reveal, ImageWithFallback } from './ui'
import { ChipIcon, SearchIcon, LayersIcon, ArrowRightIcon } from './Icons'

const TRACKTOOL_IMAGE = '/images/tracktool.png'

const FEATURES = [
  { icon: SearchIcon, label: 'Research & lead sourcing' },
  { icon: LayersIcon, label: 'Case & pipeline tracking' },
  { icon: ChipIcon, label: 'Automated workflows' },
]

export default function TrackTool() {
  return (
    <section id="tracktool" className="bg-light-depth relative py-24 lg:py-32">
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full bg-royal/10 px-3 py-1 font-heading text-xs font-semibold uppercase tracking-[0.16em] text-royal">
                <ChipIcon className="h-4 w-4" />
                The Platform
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 font-heading text-3xl font-bold text-navy sm:text-4xl">
                TrackTool — Your Recovery Command Center
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="gold-rule mt-4" />
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-6 font-body text-base leading-relaxed text-charcoal/80">
                TrackTool brings research, lead management, and case tracking into one
                professional platform — the same system trusted by recovery professionals
                nationwide. Spend less time on paperwork and more time recovering funds.
              </p>
            </Reveal>

            <ul className="mt-7 space-y-3">
              {FEATURES.map((f, i) => (
                <Reveal key={f.label} delay={0.2 + i * 0.08}>
                  <li className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cream text-darkgold">
                      <f.icon className="h-5 w-5" />
                    </div>
                    <span className="font-body text-sm font-semibold text-navy">{f.label}</span>
                  </li>
                </Reveal>
              ))}
            </ul>

            <Reveal delay={0.45}>
              <a
                href="#final-cta"
                className="group mt-9 inline-flex items-center justify-center gap-2 rounded-md bg-royal px-7 py-3.5 font-heading text-base font-semibold text-white shadow-lg shadow-royal/20 transition-colors hover:bg-navy"
              >
                Learn More About TrackTool
                <ArrowRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
              </a>
            </Reveal>
          </div>

          {/* Dashboard image — drop your own screenshot at /public/images/tracktool.png */}
          <Reveal delay={0.1}>
            <div className="relative">
              <div className="absolute -inset-5 rounded-[28px] bg-gradient-to-br from-royal/20 via-navy/10 to-gold/15 blur-2xl" />
              <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_30px_70px_-30px_rgba(11,46,99,0.5)]">
                {/* Window chrome bar */}
                <div className="flex items-center gap-2 border-b border-slate-100 bg-lightgray px-4 py-3">
                  <span className="h-3 w-3 rounded-full bg-slate-300" />
                  <span className="h-3 w-3 rounded-full bg-slate-300" />
                  <span className="h-3 w-3 rounded-full bg-slate-300" />
                  <span className="ml-3 font-heading text-xs font-semibold text-charcoal/60">
                    TrackTool · Dashboard
                  </span>
                </div>
                <div className="aspect-[1280/860] w-full bg-navy">
                  <ImageWithFallback
                    src={TRACKTOOL_IMAGE}
                    alt="TrackTool dashboard"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              {/* Floating stat chip for a custom, in-product feel */}
              <div className="absolute -bottom-5 -left-4 hidden rounded-xl border border-slate-200 bg-white px-5 py-3.5 shadow-lg sm:block">
                <div className="font-heading text-lg font-bold text-navy">
                  $248K <span className="text-gold">recovered</span>
                </div>
                <div className="font-body text-[11px] text-charcoal/60">Across active cases</div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
