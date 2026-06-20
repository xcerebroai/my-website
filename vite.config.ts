import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { viteSingleFile } from 'vite-plugin-singlefile'

// https://vite.dev/config/
// `--mode ghl` produces a single self-contained index.html (all CSS + JS
// inlined) for pasting into a GoHighLevel Custom Code element. Normal dev/build
// is unaffected.
export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    tailwindcss(),
    ...(mode === 'ghl' ? [viteSingleFile()] : []),
  ],
}))
