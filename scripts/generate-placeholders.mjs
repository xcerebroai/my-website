/**
 * Generates branded placeholder images into /public/images.
 * These are REAL .jpg/.png files so they render immediately — drop your own
 * image into /public/images with the same filename to replace any of them.
 *
 * Run:  npm run placeholders
 */
import sharp from 'sharp'
import { mkdir } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const outDir = join(dirname(fileURLToPath(import.meta.url)), '..', 'public', 'images')
await mkdir(outDir, { recursive: true })

const GOLD = '#D4A12A'
const ROYAL = '#0D6EFD'

/** Designed SVG placeholder — navy depth, grid, glow, dashed frame, labels. */
function svg({ w, h, label, file, accent = GOLD }) {
  const min = Math.min(w, h)
  const titleSize = Math.round(min * 0.085)
  const eyebrowSize = Math.max(11, Math.round(min * 0.022))
  const metaSize = Math.max(11, Math.round(min * 0.02))
  const cx = w / 2
  const cy = h / 2
  const inset = Math.round(min * 0.03)
  return `<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0c326d"/>
      <stop offset="0.5" stop-color="#0B2E63"/>
      <stop offset="1" stop-color="#071c45"/>
    </linearGradient>
    <radialGradient id="glow" cx="0.82" cy="0.12" r="0.7">
      <stop offset="0" stop-color="${accent}" stop-opacity="0.30"/>
      <stop offset="1" stop-color="${accent}" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="glow2" cx="0.1" cy="0.95" r="0.7">
      <stop offset="0" stop-color="${ROYAL}" stop-opacity="0.22"/>
      <stop offset="1" stop-color="${ROYAL}" stop-opacity="0"/>
    </radialGradient>
    <pattern id="grid" width="${Math.round(min * 0.06)}" height="${Math.round(min * 0.06)}" patternUnits="userSpaceOnUse">
      <path d="M${Math.round(min * 0.06)} 0H0V${Math.round(min * 0.06)}" fill="none" stroke="#ffffff" stroke-opacity="0.05" stroke-width="1"/>
    </pattern>
  </defs>
  <rect width="100%" height="100%" fill="url(#bg)"/>
  <rect width="100%" height="100%" fill="url(#grid)"/>
  <rect width="100%" height="100%" fill="url(#glow)"/>
  <rect width="100%" height="100%" fill="url(#glow2)"/>
  <rect x="${inset}" y="${inset}" width="${w - inset * 2}" height="${h - inset * 2}" rx="${Math.round(min * 0.025)}"
        fill="none" stroke="${accent}" stroke-opacity="0.45" stroke-width="2" stroke-dasharray="${Math.round(min * 0.03)} ${Math.round(min * 0.022)}"/>
  <g text-anchor="middle" font-family="'Segoe UI', Arial, sans-serif">
    <text x="${cx}" y="${cy - titleSize}" fill="${accent}" font-size="${eyebrowSize}" letter-spacing="${eyebrowSize * 0.35}" font-weight="700">SURPLUSFUNDS.COM</text>
    <text x="${cx}" y="${cy + titleSize * 0.34}" fill="#ffffff" font-size="${titleSize}" font-weight="800">${label}</text>
    <text x="${cx}" y="${cy + titleSize * 1.2}" fill="#ffffff" fill-opacity="0.78" font-size="${metaSize}" font-family="'Consolas', monospace">public/images/${file}</text>
    <text x="${cx}" y="${cy + titleSize * 1.9}" fill="#ffffff" fill-opacity="0.45" font-size="${metaSize}" letter-spacing="1">${w} × ${h}  ·  REPLACE ME</text>
  </g>
</svg>`
}

const items = [
  { file: 'hero.jpg', w: 1920, h: 1280, label: 'Hero Background', fmt: 'jpeg' },
  { file: 'tracktool.png', w: 1280, h: 860, label: 'TrackTool Dashboard', fmt: 'png', accent: ROYAL },
  { file: 'founder.jpg', w: 800, h: 1000, label: 'Jeffrey Richman', fmt: 'jpeg' },
  { file: 'manual-attorney.png', w: 800, h: 500, label: 'Attorney Module', fmt: 'png' },
  { file: 'manual-mortgage.png', w: 800, h: 500, label: 'Mortgage Manual', fmt: 'png' },
  { file: 'manual-tax.png', w: 800, h: 500, label: 'Tax Sale Manual', fmt: 'png' },
  { file: 'manual-estate.png', w: 800, h: 500, label: 'Small Estate Manual', fmt: 'png' },
]

for (const it of items) {
  const buf = Buffer.from(svg(it))
  const pipe = sharp(buf)
  const dest = join(outDir, it.file)
  if (it.fmt === 'jpeg') await pipe.jpeg({ quality: 84, mozjpeg: true }).toFile(dest)
  else await pipe.png({ compressionLevel: 9 }).toFile(dest)
  console.log('  ✓', it.file, `(${it.w}×${it.h})`)
}

// Seamless monochrome grain tile — referenced by `.grain-texture` in index.css.
// A pre-rendered raster tile is far cheaper to paint than a live SVG filter.
{
  const size = 120
  const data = Buffer.alloc(size * size)
  for (let i = 0; i < data.length; i++) data[i] = (Math.random() * 256) | 0
  await sharp(data, { raw: { width: size, height: size, channels: 1 } })
    .png({ compressionLevel: 9 })
    .toFile(join(outDir, 'noise.png'))
  console.log('  ✓', 'noise.png', `(${size}×${size})`)
}

console.log('\nPlaceholders written to public/images/')
