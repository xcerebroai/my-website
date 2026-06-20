/**
 * Section 4 — Featured Products (card layout with image thumbnails).
 * Four core products + a highlighted Bundle package.
 * --- Each product's image lives at /public/images/<image>. Drop your own file
 *     with the same name to replace it. Prices are placeholders. ---
 */
import { Reveal, SectionHeading, Grain, ImageWithFallback } from './ui'
import {
  ScaleIcon,
  HomeIcon,
  FileTextIcon,
  BookIcon,
  LayersIcon,
  CheckIcon,
  ArrowRightIcon,
} from './Icons'
import type { ComponentType, SVGProps } from 'react'

type Product = {
  icon: ComponentType<SVGProps<SVGSVGElement>>
  name: string
  tag: string
  desc: string
  price: string
  image: string
}

const PRODUCTS: Product[] = [
  {
    icon: ScaleIcon,
    name: 'Attorney Module',
    tag: 'Legal Track',
    desc: 'Legal frameworks, compliance guidance, and the procedural depth professionals need to operate with confidence.',
    price: '$497',
    image: '/images/manual-attorney.png',
  },
  {
    icon: HomeIcon,
    name: 'Mortgage Surplus Manual',
    tag: 'Core Manual',
    desc: 'A complete walkthrough of mortgage foreclosure surplus recovery — from identifying funds to filing the claim.',
    price: '$297',
    image: '/images/manual-mortgage.png',
  },
  {
    icon: FileTextIcon,
    name: 'Tax Sale Manual',
    tag: 'Core Manual',
    desc: 'Navigate tax deed and tax lien overage recovery with step-by-step procedures and ready-to-use templates.',
    price: '$297',
    image: '/images/manual-tax.png',
  },
  {
    icon: BookIcon,
    name: 'Small Estate Manual',
    tag: 'Core Manual',
    desc: 'Recover funds tied to estates and heirs using simplified, small-estate processes the right way.',
    price: '$197',
    image: '/images/manual-estate.png',
  },
]

const BUNDLE = {
  name: 'Complete Bundle Package',
  desc: 'Every core manual, the Attorney Module, and priority access to coaching — the full system at the best value.',
  price: '$997',
  was: '$1,288',
  includes: [
    'All four core manuals & modules',
    'Bonus templates & checklists',
    'Priority coaching access',
    'Free TrackTool onboarding session',
  ],
}

export default function Products() {
  return (
    <section id="products" className="bg-light-depth relative py-24 lg:py-32">
      <Grain className="opacity-[0.035] mix-blend-multiply" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Training & Tools"
          title="Featured Products"
          intro="Professional-grade education for every path into surplus recovery — purchase individually or save with a bundle."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCTS.map((product, i) => (
            <Reveal key={product.name} delay={i * 0.08}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_1px_3px_rgba(11,46,99,0.04),0_12px_28px_-14px_rgba(11,46,99,0.12)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_1px_3px_rgba(11,46,99,0.05),0_24px_44px_-16px_rgba(11,46,99,0.22)]">
                {/* Thumbnail */}
                <div className="relative aspect-[16/10] overflow-hidden bg-navy">
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/55 via-navy/5 to-transparent" />
                  <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 font-heading text-[11px] font-semibold uppercase tracking-wide text-navy shadow-sm backdrop-blur">
                    {product.tag}
                  </span>
                </div>

                {/* Body */}
                <div className="relative flex flex-1 flex-col p-6">
                  <div className="absolute -top-6 right-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gold text-navy shadow-lg ring-4 ring-white transition-colors duration-300 group-hover:bg-darkgold">
                    <product.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-1 pr-12 font-heading text-lg font-bold leading-snug text-navy">
                    {product.name}
                  </h3>
                  <p className="mt-2.5 flex-1 font-body text-sm leading-relaxed text-charcoal/70">
                    {product.desc}
                  </p>
                  <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
                    <span className="font-heading text-xl font-bold text-navy">{product.price}</span>
                    <a
                      href="#final-cta"
                      className="inline-flex items-center gap-1.5 font-heading text-sm font-semibold text-royal transition-colors hover:text-navy"
                    >
                      Learn more
                      <ArrowRightIcon className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Bundle highlight */}
        <Reveal delay={0.1}>
          <div className="bg-navy-depth relative mt-8 overflow-hidden rounded-2xl border-2 border-gold shadow-[0_24px_60px_-24px_rgba(11,46,99,0.5)]">
            <Grain className="opacity-[0.06] mix-blend-overlay" />
            <div className="relative grid items-center gap-8 p-8 lg:grid-cols-[1.4fr_1fr] lg:p-10">
              <div>
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold text-navy shadow-md">
                    <LayersIcon className="h-6 w-6" />
                  </div>
                  <span className="rounded-full bg-gold/15 px-3 py-1 font-heading text-[11px] font-semibold uppercase tracking-wide text-gold">
                    Best Value
                  </span>
                </div>
                <h3 className="mt-5 font-heading text-2xl font-bold text-white">{BUNDLE.name}</h3>
                <p className="mt-2.5 max-w-xl font-body text-sm leading-relaxed text-slate-300">
                  {BUNDLE.desc}
                </p>
                <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                  {BUNDLE.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                      <span className="font-body text-sm text-slate-200">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl bg-white/[0.05] p-7 text-center ring-1 ring-white/10 backdrop-blur-sm">
                <div className="font-body text-sm text-slate-400 line-through">{BUNDLE.was}</div>
                <div className="font-heading text-4xl font-bold text-gold">{BUNDLE.price}</div>
                <div className="mt-1 font-body text-xs text-slate-400">One-time payment</div>
                <a
                  href="#final-cta"
                  className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-gold px-6 py-3.5 font-heading text-base font-semibold text-navy transition-all duration-200 hover:-translate-y-0.5 hover:bg-darkgold"
                >
                  Get the Bundle
                  <ArrowRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
