/**
 * Section 5 — Meet Jeffrey Richman.
 * Professional bio with a placeholder portrait (swap PORTRAIT_SRC) and
 * placeholder bio copy (swap the paragraphs in BIO).
 * --- Replace PORTRAIT_SRC with a real headshot and edit BIO / CREDENTIALS. ---
 */
import { Reveal, ImageWithFallback } from './ui'
import { ShieldIcon, ScaleIcon, HomeIcon, CheckIcon } from './Icons'

// Drop a real headshot at /public/images/jeff.jpg to replace the placeholder.
const PORTRAIT_SRC = '/images/jeff.jpg'

const CREDENTIALS = [
  { icon: HomeIcon, label: '30+ years in real estate' },
  { icon: ScaleIcon, label: '20+ years in surplus recovery' },
  { icon: ShieldIcon, label: 'Trusted by professionals nationwide' },
]

const BIO = [
  'Jeffrey Richman has spent more than three decades at the intersection of real estate and financial recovery. [Placeholder bio — replace this paragraph.] Over his career he has guided individuals, heirs, and professionals through the often-overlooked process of reclaiming surplus funds that rightfully belong to them.',
  'After 20+ years specializing in surplus recovery, Jeffrey built SurplusFunds.com to make that knowledge accessible — combining rigorous education, hands-on coaching, and professional tools into a single, trustworthy system. [Placeholder bio — replace with real background, achievements, and credentials.]',
]

export default function Founder() {
  return (
    <section id="founder" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Portrait */}
          <Reveal>
            <div className="relative mx-auto max-w-sm lg:mx-0">
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-gold/30 to-royal/20 blur-xl" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-slate-200 bg-navy shadow-xl">
                <ImageWithFallback
                  src={PORTRAIT_SRC}
                  alt="Jeffrey Richman"
                  eager
                  className="h-full w-full object-cover object-top"
                  fallback={
                    <div className="bg-navy-depth flex h-full w-full flex-col items-center justify-center gap-3 text-center">
                      <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gold font-heading text-3xl font-bold text-navy">
                        JR
                      </div>
                      <span className="font-body text-xs text-slate-400">
                        [ Placeholder portrait — <br /> add /public/images/founder.jpg ]
                      </span>
                    </div>
                  }
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/35 via-transparent to-transparent" />
              </div>
              {/* Floating credential card */}
              <div className="absolute -bottom-5 left-1/2 w-[88%] -translate-x-1/2 rounded-xl border border-slate-200 bg-white p-4 shadow-lg lg:left-auto lg:right-0 lg:translate-x-6">
                <div className="font-heading text-sm font-bold text-navy">Jeffrey Richman</div>
                <div className="font-body text-xs text-charcoal/65">
                  Founder · Surplus Recovery Educator
                </div>
              </div>
            </div>
          </Reveal>

          {/* Bio */}
          <div>
            <Reveal>
              <span className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-royal">
                Meet the Founder
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-navy sm:text-4xl lg:text-[2.75rem]">
                Jeffrey Richman
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="gold-rule mt-4" />
            </Reveal>

            <div className="mt-6 space-y-4">
              {BIO.map((para, i) => (
                <Reveal key={i} delay={0.15 + i * 0.08}>
                  <p className="font-body text-base leading-relaxed text-charcoal/80">{para}</p>
                </Reveal>
              ))}
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {CREDENTIALS.map((cred, i) => (
                <Reveal key={cred.label} delay={0.3 + i * 0.08}>
                  <div className="flex h-full items-center gap-3 rounded-xl border border-slate-200 bg-lightgray p-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-navy text-gold">
                      <cred.icon className="h-5 w-5" />
                    </div>
                    <span className="font-body text-sm font-semibold text-navy">{cred.label}</span>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.5}>
              <div className="mt-8 flex items-start gap-3 rounded-xl border-l-4 border-gold bg-cream p-5">
                <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-darkgold" />
                <p className="font-body text-sm leading-relaxed text-charcoal/80">
                  <span className="font-semibold text-navy">Our promise:</span> Helping
                  individuals, heirs, and professionals recover money that rightfully belongs to
                  them — with industry-leading education, training, and tools.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
