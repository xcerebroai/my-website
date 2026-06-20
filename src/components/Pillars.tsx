/**
 * Section 2 — Three Pillars: Education, Coaching, Technology.
 * --- Edit the PILLARS array (title, copy, bullets, icon) below. ---
 */
import { Reveal, SectionHeading, Grain } from './ui'
import { BookIcon, UsersIcon, ChipIcon, CheckIcon } from './Icons'
import type { ComponentType, SVGProps } from 'react'

type Pillar = {
  icon: ComponentType<SVGProps<SVGSVGElement>>
  title: string
  blurb: string
  points: string[]
}

const PILLARS: Pillar[] = [
  {
    icon: BookIcon,
    title: 'Education',
    blurb:
      'Comprehensive manuals and guides that break down the surplus funds process step by step — written in plain language, grounded in real procedure.',
    points: ['Detailed recovery manuals', 'State-specific guidance', 'Document templates & checklists'],
  },
  {
    icon: UsersIcon,
    title: 'Coaching',
    blurb:
      'Learn directly from experienced recovery professionals through structured group sessions or focused one-on-one mentorship.',
    points: ['Live group training', 'One-on-one mentorship', 'Ongoing support & accountability'],
  },
  {
    icon: ChipIcon,
    title: 'Technology',
    blurb:
      'TrackTool puts research, lead management, and case tracking in one professional platform — the system recovery pros rely on.',
    points: ['Research & lead sourcing', 'Case & pipeline tracking', 'Workflow automation'],
  },
]

export default function Pillars() {
  return (
    <section id="pillars" className="bg-light-depth relative py-24 lg:py-32">
      <Grain className="opacity-[0.035] mix-blend-multiply" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="A Complete System"
          title="Three Pillars of Recovery"
          intro="Education, coaching, and technology — built to work together, so you move from learning to results without guesswork."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {PILLARS.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 0.1}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-8 shadow-[0_1px_3px_rgba(11,46,99,0.04),0_12px_28px_-12px_rgba(11,46,99,0.10)] transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-[0_1px_3px_rgba(11,46,99,0.05),0_24px_44px_-16px_rgba(11,46,99,0.20)]">
                <span className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-gold to-darkgold transition-transform duration-300 group-hover:scale-x-100" />
                <div className="bg-navy-depth flex h-14 w-14 items-center justify-center rounded-xl text-gold shadow-md transition-colors duration-300 group-hover:text-white">
                  <pillar.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-6 font-heading text-xl font-bold tracking-tight text-navy">
                  {pillar.title}
                </h3>
                <p className="mt-3 font-body text-sm leading-relaxed text-charcoal/75">
                  {pillar.blurb}
                </p>
                <ul className="mt-6 space-y-2.5 border-t border-slate-100 pt-6">
                  {pillar.points.map((point) => (
                    <li key={point} className="flex items-start gap-2.5">
                      <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                      <span className="font-body text-sm text-charcoal/80">{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
