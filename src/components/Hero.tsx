/**
 * Section 1 — Hero.
 * Full-bleed background image (/public/images/hero.jpg) under a directional
 * navy gradient overlay + grain, so the headline stays readable over any photo.
 * Left-aligned content block for a custom, editorial feel.
 * --- Swap the photo at /public/images/hero.jpg. Edit copy / CTAs / stats below. ---
 */
import { motion } from 'motion/react'
import { Grain, ImageWithFallback } from './ui'
import { ArrowRightIcon, ShieldIcon } from './Icons'

const HERO_IMAGE = '/images/hero.jpg'

const TRUST_STATS = [
  { value: '50', suffix: 'States', label: 'Nationwide coverage' },
  { value: '30+', suffix: 'Years', label: 'Industry experience' },
  { value: '1,000s', suffix: 'Served', label: 'Students & clients' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: 0.1 + i * 0.11, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

export default function Hero() {
  return (
    <section
      id="top"
      className="bg-navy-depth relative flex min-h-[92vh] items-center overflow-hidden pt-28 pb-16 sm:pt-32 lg:pb-20"
    >
      {/* Background photo */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src={HERO_IMAGE}
          alt="Hero background"
          eager
          className="h-full w-full object-cover"
          fallback={<div className="bg-navy-depth h-full w-full" />}
        />
      </div>

      {/* Directional navy overlay — darkest on the left where the text sits */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(90deg, rgba(7,21,53,0.95) 0%, rgba(8,28,69,0.88) 36%, rgba(8,28,69,0.62) 66%, rgba(8,28,69,0.45) 100%)',
        }}
      />
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(0deg, rgba(7,21,53,0.85) 0%, transparent 42%)' }}
      />
      <Grain className="opacity-[0.06] mix-blend-overlay" />

      {/* Gold top accent line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

      <div className="relative mx-auto w-full max-w-7xl px-5 lg:px-8">
        <div className="max-w-2xl">
          <motion.span
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-white/[0.06] px-4 py-1.5 font-heading text-xs font-semibold uppercase tracking-[0.16em] text-gold backdrop-blur-sm"
          >
            <ShieldIcon className="h-4 w-4" />
            Recover. Reclaim. Prosper.
          </motion.span>

          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-6 font-heading text-[2.6rem] font-bold leading-[1.06] tracking-[-0.02em] text-white sm:text-5xl lg:text-6xl"
          >
            Recover Money.
            <br />
            <span className="text-gold">Build Knowledge.</span>
            <br />
            Create Opportunity.
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-6 max-w-xl font-body text-lg leading-relaxed text-slate-200/90"
          >
            Learn how surplus funds recovery works, access professional training, and use the
            same systems trusted by recovery professionals nationwide.
          </motion.p>

          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <a
              href="#final-cta"
              className="group inline-flex items-center justify-center gap-2 rounded-md bg-gold px-7 py-3.5 font-heading text-base font-semibold text-navy shadow-lg shadow-gold/25 transition-all duration-200 hover:-translate-y-0.5 hover:bg-darkgold hover:shadow-xl"
            >
              Get Started
              <ArrowRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#products"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/25 bg-white/[0.06] px-7 py-3.5 font-heading text-base font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:border-white/45 hover:bg-white/[0.12]"
            >
              View Training
            </a>
          </motion.div>
        </div>

        {/* Trust strip */}
        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-14 grid max-w-2xl grid-cols-3 divide-x divide-white/10 border-t border-white/12 pt-7"
        >
          {TRUST_STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col px-3 first:pl-0 sm:px-5">
              <div className="font-heading text-2xl font-bold text-white sm:text-3xl">
                {stat.value}{' '}
                <span className="text-base font-semibold text-gold sm:text-lg">{stat.suffix}</span>
              </div>
              <div className="mt-1 font-body text-xs text-slate-300/80">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
