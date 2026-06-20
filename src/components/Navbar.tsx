/**
 * Sticky top navigation. Brand left, anchor links + CTA right.
 * Collapses to a simple toggle menu on mobile.
 * --- Edit nav links in NAV_LINKS below. ---
 */
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { MenuIcon, CloseIcon } from './Icons'

const NAV_LINKS = [
  { label: 'Pillars', href: '#pillars' },
  { label: 'How It Works', href: '#ecosystem' },
  { label: 'Products', href: '#products' },
  { label: 'About', href: '#founder' },
  { label: 'TrackTool', href: '#tracktool' },
]

function BrandMark() {
  // The logo art has a white background, so it sits in a white chip to read
  // cleanly on the navy bar. Swap /public/images/logo.png to update it.
  return (
    <a href="#top" className="flex items-center" aria-label="SurplusFunds.com — home">
      <img
        src="/images/logo.png"
        alt="SurplusFunds.com — Recover. Reclaim. Prosper."
        className="h-12 w-auto rounded-lg bg-white p-1.5 shadow-sm ring-1 ring-black/5 sm:h-14"
      />
    </a>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-shadow duration-300 ${
        scrolled ? 'shadow-lg shadow-navy/20' : ''
      }`}
    >
      <nav className="border-b border-white/10 bg-navy/95 backdrop-blur supports-[backdrop-filter]:bg-navy/85">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 lg:px-8">
          <BrandMark />

          {/* Desktop links */}
          <div className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-body text-sm font-semibold text-slate-200 transition-colors hover:text-gold"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="#products"
              className="font-heading text-sm font-semibold text-white transition-colors hover:text-gold"
            >
              View Training
            </a>
            <a
              href="#final-cta"
              className="rounded-md bg-gold px-5 py-2.5 font-heading text-sm font-semibold text-navy shadow-sm transition-colors hover:bg-darkgold"
            >
              Get Started
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="text-white lg:hidden"
          >
            {open ? <CloseIcon className="h-7 w-7" /> : <MenuIcon className="h-7 w-7" />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="overflow-hidden border-t border-white/10 lg:hidden"
            >
              <div className="flex flex-col gap-1 px-5 py-4">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="rounded-md px-3 py-2.5 font-body text-sm font-semibold text-slate-200 transition-colors hover:bg-white/5 hover:text-gold"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#final-cta"
                  onClick={() => setOpen(false)}
                  className="mt-2 rounded-md bg-gold px-3 py-3 text-center font-heading text-sm font-semibold text-navy"
                >
                  Get Started
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
