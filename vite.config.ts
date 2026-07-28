import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { viteSingleFile } from 'vite-plugin-singlefile'

// https://vite.dev/config/
// Single-file modes produce ONE self-contained HTML (all CSS + JS inlined) for
// pasting into a custom-code block. Each targets a different page:
//   --mode ghl       → index.html      (SurplusFunds homepage, GoHighLevel)
//   --mode jarvis    → bootcamp.html   (X Cerebro AI bootcamp landing)
//   --mode checkout  → checkout.html   (branded payment step)
//   --mode thankyou  → thankyou.html   (branded thank-you step)
//   --mode matrix    → challenge.html  (First to Deal — DealMachine AI Edition)
// The normal build is multi-page and emits every page.
const SINGLE_FILE_INPUT: Record<string, string> = {
  ghl: 'index.html',
  jarvis: 'bootcamp.html',
  checkout: 'checkout.html',
  thankyou: 'thankyou.html',
  matrix: 'challenge.html',
}

export default defineConfig(({ mode }) => {
  const singleFileInput = SINGLE_FILE_INPUT[mode]

  return {
    plugins: [
      react(),
      tailwindcss(),
      ...(singleFileInput ? [viteSingleFile()] : []),
    ],
    build: singleFileInput
      ? {
          // Raise the inline limit so images embed as data URIs, keeping the
          // single file truly self-contained (no external assets).
          assetsInlineLimit: 4 * 1024 * 1024,
          rollupOptions: { input: singleFileInput },
        }
      : {
          rollupOptions: {
            input: {
              main: 'index.html',
              bootcamp: 'bootcamp.html',
              checkout: 'checkout.html',
              thankyou: 'thankyou.html',
              challenge: 'challenge.html',
            },
          },
        },
  }
})
