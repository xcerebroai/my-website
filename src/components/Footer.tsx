/**
 * Section 9 — Professional footer.
 * Brand + tagline, grouped nav links, legal disclaimer.
 * --- Edit FOOTER_NAV groups and the disclaimer copy below. ---
 */
const FOOTER_NAV = [
  {
    heading: 'Learn',
    links: [
      { label: 'Education', href: '#pillars' },
      { label: 'How It Works', href: '#ecosystem' },
      { label: 'Products', href: '#products' },
      { label: 'Coaching', href: '#pillars' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About Jeffrey', href: '#founder' },
      { label: 'Testimonials', href: '#top' },
      { label: 'TrackTool', href: '#tracktool' },
      { label: 'Get Started', href: '#final-cta' },
    ],
  },
  {
    heading: 'Resources',
    links: [
      { label: 'Manuals & Guides', href: '#products' },
      { label: 'Bundle Packages', href: '#products' },
      { label: 'Contact', href: '#final-cta' },
      { label: 'FAQ', href: '#products' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-navy-deep relative text-slate-300">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          {/* Brand */}
          <div>
            {/* White chip so the white-background logo reads on dark navy. */}
            <img
              src="/images/logo.png"
              alt="SurplusFunds.com — Recover. Reclaim. Prosper."
              className="h-20 w-auto rounded-xl bg-white p-2.5 shadow-md ring-1 ring-black/5 sm:h-24"
            />
            <p className="mt-5 max-w-sm font-body text-sm leading-relaxed text-slate-400">
              Helping individuals, heirs, and professionals recover money that rightfully belongs
              to them — with industry-leading education, training, and tools.
            </p>
          </div>

          {/* Nav groups */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {FOOTER_NAV.map((group) => (
              <div key={group.heading}>
                <h4 className="font-heading text-sm font-semibold uppercase tracking-wide text-white">
                  {group.heading}
                </h4>
                <ul className="mt-4 space-y-3">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="font-body text-sm text-slate-400 transition-colors hover:text-gold"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 border-t border-white/10 pt-8">
          <p className="font-body text-xs leading-relaxed text-slate-500">
            [Placeholder disclaimer — replace with your own legal copy.] SurplusFunds.com provides
            educational materials, training, and software tools. We are not a law firm and do not
            provide legal advice. Results vary and are not guaranteed.
          </p>
          <div className="mt-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <p className="font-body text-xs text-slate-500">
              © {new Date().getFullYear()} SurplusFunds.com. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#top" className="font-body text-xs text-slate-400 hover:text-gold">
                Privacy Policy
              </a>
              <a href="#top" className="font-body text-xs text-slate-400 hover:text-gold">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
