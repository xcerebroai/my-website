/**
 * Lightweight inline SVG icon set (no icon dependency).
 * All icons inherit color via `currentColor` and accept className for sizing.
 */
import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

const base = (props: IconProps) => ({
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  ...props,
})

export const BookIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M4 5a2 2 0 0 1 2-2h11a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6a2 2 0 0 0-2 2z" />
    <path d="M4 19a2 2 0 0 1 2-2h12" />
    <path d="M9 7h5" />
  </svg>
)

export const UsersIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M16 19v-1a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v1" />
    <circle cx="9.5" cy="7" r="3" />
    <path d="M21 19v-1a4 4 0 0 0-3-3.87" />
    <path d="M15.5 4.13a3 3 0 0 1 0 5.74" />
  </svg>
)

export const ChipIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <rect x="6" y="6" width="12" height="12" rx="2" />
    <path d="M9.5 10.5h5v5h-5z" />
    <path d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2" />
  </svg>
)

export const GraduationIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M21 9 12 4 3 9l9 5 9-5Z" />
    <path d="M7 11v4.5c0 1 2.2 2.5 5 2.5s5-1.5 5-2.5V11" />
    <path d="M21 9v5" />
  </svg>
)

export const SearchIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-3.5-3.5" />
  </svg>
)

export const MapPinIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
)

export const CoinsIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <ellipse cx="9" cy="7" rx="6" ry="3" />
    <path d="M3 7v5c0 1.66 2.69 3 6 3" />
    <path d="M3 12v5c0 1.66 2.69 3 6 3" />
    <ellipse cx="15" cy="14" rx="6" ry="3" />
    <path d="M21 14v5c0 1.66-2.69 3-6 3s-6-1.34-6-3" />
  </svg>
)

export const TrendingUpIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="m3 17 6-6 4 4 8-8" />
    <path d="M17 7h4v4" />
  </svg>
)

export const ShieldIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M12 3 5 6v5c0 4.5 3 8 7 10 4-2 7-5.5 7-10V6l-7-3Z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
)

export const ScaleIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M12 3v18" />
    <path d="M7 21h10" />
    <path d="M5 7h14" />
    <path d="m5 7-3 6h6Z" />
    <path d="m19 7-3 6h6Z" />
  </svg>
)

export const FileTextIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8Z" />
    <path d="M14 3v5h5" />
    <path d="M9 13h6M9 17h6" />
  </svg>
)

export const HomeIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M4 11 12 4l8 7" />
    <path d="M6 10v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-9" />
    <path d="M10 20v-5h4v5" />
  </svg>
)

export const LayersIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="m12 3 9 5-9 5-9-5 9-5Z" />
    <path d="m3 13 9 5 9-5" />
  </svg>
)

export const ArrowRightIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M5 12h14" />
    <path d="m13 6 6 6-6 6" />
  </svg>
)

export const CheckIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="m5 12 4 4 10-10" />
  </svg>
)

export const QuoteIcon = (props: IconProps) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M7.5 6C5 6 3 8 3 10.5c0 2.3 1.7 4.1 4 4.4-.2 1.6-1.2 2.7-3 3.4l.8 1.7C8 19 9.7 16.7 9.7 12.9V10.5C9.7 8 8.7 6 7.5 6Zm9 0C14 6 12 8 12 10.5c0 2.3 1.7 4.1 4 4.4-.2 1.6-1.2 2.7-3 3.4l.8 1.7C17 19 18.7 16.7 18.7 12.9V10.5C18.7 8 17.7 6 16.5 6Z" />
  </svg>
)

export const StarIcon = (props: IconProps) => (
  <svg width={20} height={20} viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2.5l2.9 5.9 6.6.9-4.8 4.6 1.1 6.5L12 17.8 6.2 20.9l1.1-6.5L2.5 9.8l6.6-.9z" />
  </svg>
)

export const MenuIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M4 6h16M4 12h16M4 18h16" />
  </svg>
)

export const CloseIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
)
