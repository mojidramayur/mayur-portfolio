import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// IMPORTANT: `base` must match your GitHub Pages subpath.
// Repo: https://github.com/<user>/mayur-portfolio  →  Pages URL: https://<user>.github.io/mayur-portfolio/
export default defineConfig({
  plugins: [react()],
  base: '/mayur-portfolio/',
  build: {
    outDir: 'dist',
  },
})
