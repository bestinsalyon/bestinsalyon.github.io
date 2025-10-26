import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Using a relative base ensures assets load correctly on GitHub Pages regardless of repo path.
export default defineConfig({
  base: './',
  plugins: [react()],
})
