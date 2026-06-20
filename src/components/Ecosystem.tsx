/**
 * Section 3 — The Recovery Ecosystem.
 * A polished, animated horizontal flow (vertical on mobile) showing how the
 * system connects: Learn → Research → Locate → Recover → Scale.
 * The connector line "draws" in, then each node rises into place in sequence.
 * --- Edit the STEPS array below. ---
 */
import { motion } from 'motion/react'
import { SectionHeading, Grain } from './ui'
import {
  GraduationIcon,
  SearchIcon,
  MapPinIcon,
  CoinsIcon,
  TrendingUpIcon,
} from './Icons'
import type { ComponentType, SVGProps } from 'react'

type Step = {
  icon: ComponentType<SVGProps<SVGSVGElement>>
  title: string
  desc: string
}

const STEPS: Step[] = [
  { icon: GraduationIcon, title: 'Learn', desc: 'Master the fundamentals through proven education.' },
  { icon: SearchIcon, title: 'Research', desc: 'Identify cases and surplus opportunities.' },
  { icon: MapPinIcon, title: 'Locate', desc: 'Find and connect with rightful claimants.' },
  { icon: CoinsIcon, title: 'Recover', desc: 'Guide claims through to successful recovery.' },
  { icon: TrendingUpIcon, title: 'Scale', desc: 'Build a repeatable, professional operation.' },
]

const nodeVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.96 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, delay: 0.4 + i * 0.18, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

export default function Ecosystem() {
  return (
    <section id="ecosystem" className="bg-navy-depth relative overflow-hidden py-24 lg:py-32">
      <Grain className="opacity-[0.07] mix-blend-overlay" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          light
          eyebrow="One Cohesive System"
          title="The Recovery Ecosystem"
          intro="Every piece connects. From first lesson to a scalable operation, each stage feeds the next — so progress compounds instead of stalling."
        />

        <motion.div
          className="relative mt-16"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Connector line — horizontal on desktop, vertical on mobile */}
          {/* Desktop */}
          <div className="absolute left-0 right-0 top-10 hidden lg:block">
            <div className="relative mx-[10%] h-[3px] rounded-full bg-white/10">
              <motion.div
                className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-gold to-darkgold"
                initial={{ width: '0%' }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 1.1, ease: 'easeInOut' }}
              />
            </div>
          </div>
          {/* Mobile */}
          <div className="absolute bottom-10 left-[35px] top-10 w-[3px] rounded-full bg-white/10 lg:hidden">
            <motion.div
              className="absolute inset-x-0 top-0 rounded-full bg-gradient-to-b from-gold to-darkgold"
              initial={{ height: '0%' }}
              whileInView={{ height: '100%' }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1.1, ease: 'easeInOut' }}
            />
          </div>

          <ol className="relative grid gap-8 lg:grid-cols-5 lg:gap-4">
            {STEPS.map((step, i) => (
              <motion.li
                key={step.title}
                custom={i}
                variants={nodeVariants}
                className="flex items-start gap-5 lg:flex-col lg:items-center lg:text-center"
              >
                <div className="relative shrink-0">
                  <span className="absolute -right-1 -top-1 z-10 flex h-6 w-6 items-center justify-center rounded-full bg-gold font-heading text-xs font-bold text-navy ring-4 ring-navy">
                    {i + 1}
                  </span>
                  <div className="flex h-[72px] w-[72px] items-center justify-center rounded-2xl border border-white/15 bg-white/[0.06] text-gold shadow-lg backdrop-blur">
                    <step.icon className="h-8 w-8" />
                  </div>
                </div>
                <div className="lg:mt-5">
                  <h3 className="font-heading text-lg font-bold text-white">{step.title}</h3>
                  <p className="mt-1.5 max-w-[12rem] font-body text-sm leading-relaxed text-slate-300">
                    {step.desc}
                  </p>
                </div>
              </motion.li>
            ))}
          </ol>
        </motion.div>
      </div>
    </section>
  )
}
