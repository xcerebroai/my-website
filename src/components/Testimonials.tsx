/**
 * Section 6 — Testimonials (students, clients, success stories).
 * All copy is placeholder — replace names, roles, results, and quotes.
 * --- Edit the TESTIMONIALS array below. ---
 */
import { Reveal, SectionHeading, Grain } from './ui'
import { QuoteIcon, StarIcon } from './Icons'

type Testimonial = {
  quote: string
  name: string
  role: string
  result: string
  initials: string
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'The training walked me through every step. I went from knowing nothing about surplus funds to filing my first claim with total confidence. [Placeholder testimonial.]',
    name: 'Maria Alvarez',
    role: 'Student · First-time claimant',
    result: 'Recovered $14,200',
    initials: 'MA',
  },
  {
    quote:
      'As an heir, I had no idea these funds even existed. The team made a confusing legal process feel simple and respectful. [Placeholder testimonial.]',
    name: 'David Chen',
    role: 'Client · Estate heir',
    result: 'Claim resolved in 60 days',
    initials: 'DC',
  },
  {
    quote:
      'TrackTool and the coaching completely changed how I run my recovery business. The systems are professional and built to scale. [Placeholder testimonial.]',
    name: 'Robert Hayes',
    role: 'Recovery Professional',
    result: 'Scaled to 30+ active cases',
    initials: 'RH',
  },
]

export default function Testimonials() {
  return (
    <section className="bg-cream-depth relative py-24 lg:py-32">
      <Grain className="opacity-[0.04] mix-blend-multiply" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Proven Results"
          title="Trusted by Students, Clients & Professionals"
          intro="Real people recovering real money. [Placeholder testimonials — swap in your own success stories.]"
        />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <figure className="flex h-full flex-col rounded-2xl border border-slate-200/80 bg-white p-8 shadow-[0_1px_3px_rgba(11,46,99,0.04),0_14px_30px_-16px_rgba(11,46,99,0.14)]">
                <QuoteIcon className="h-8 w-8 text-gold/70" />
                <div className="mt-3 flex gap-0.5 text-gold">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <StarIcon key={s} className="h-4 w-4" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 font-body text-[15px] leading-relaxed text-charcoal/80">
                  “{t.quote}”
                </blockquote>
                <div className="mt-6 inline-flex self-start rounded-full bg-cream px-3 py-1 font-heading text-xs font-semibold text-darkgold">
                  {t.result}
                </div>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-navy font-heading text-sm font-bold text-gold">
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-heading text-sm font-bold text-navy">{t.name}</div>
                    <div className="font-body text-xs text-charcoal/60">{t.role}</div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
