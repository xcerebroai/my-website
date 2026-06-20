/**
 * Section 8 — Final CTA: "Ready to Start?"
 * Strong gold primary button + a simple lead-capture email field.
 * The form is a placeholder (no backend) — wire up `onSubmit` to your CRM/ESP.
 * --- Edit headline / supporting copy / button labels below. ---
 */
import { useState } from 'react'
import { Reveal, Grain } from './ui'
import { ArrowRightIcon, ShieldIcon } from './Icons'

export default function FinalCTA() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  // TODO: connect this to your email service / CRM.
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
  }

  return (
    <section id="final-cta" className="bg-navy-depth relative overflow-hidden py-24 lg:py-32">
      <Grain className="opacity-[0.07] mix-blend-overlay" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/45 to-transparent" />

      <div className="relative mx-auto max-w-3xl px-5 text-center lg:px-8">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-white/5 px-4 py-1.5 font-heading text-xs font-semibold uppercase tracking-[0.16em] text-gold">
            <ShieldIcon className="h-4 w-4" />
            Recover. Reclaim. Prosper.
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-6 font-heading text-4xl font-bold leading-tight text-white sm:text-5xl">
            Ready to Start?
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-5 max-w-xl font-body text-lg leading-relaxed text-slate-300">
            Take the first step toward recovering what rightfully belongs to you. Get started
            today with professional education, coaching, and tools.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          {submitted ? (
            <div className="mx-auto mt-9 max-w-md rounded-xl border border-gold/40 bg-white/5 p-6">
              <p className="font-heading text-lg font-semibold text-gold">Thank you!</p>
              <p className="mt-1 font-body text-sm text-slate-300">
                We’ll be in touch shortly. [Placeholder confirmation — connect a real form.]
              </p>
            </div>
          ) : (
            <form
              onSubmit={onSubmit}
              className="mx-auto mt-9 flex max-w-md flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full rounded-md border border-white/15 bg-white/95 px-4 py-3.5 font-body text-sm text-charcoal placeholder:text-charcoal/50 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/40"
              />
              <button
                type="submit"
                className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-md bg-gold px-7 py-3.5 font-heading text-base font-semibold text-navy shadow-lg shadow-gold/20 transition-colors hover:bg-darkgold"
              >
                Get Started
                <ArrowRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
              </button>
            </form>
          )}
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-5 font-body text-xs text-slate-400">
            No obligation · Your information is kept private
          </p>
        </Reveal>
      </div>
    </section>
  )
}
