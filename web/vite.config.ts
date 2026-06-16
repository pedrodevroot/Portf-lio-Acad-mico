import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
// Em produção (build) o site é servido em /Portf-lio-Acad-mico/ no GitHub Pages.
// Em desenvolvimento fica em / para não atrapalhar o npm run dev.
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/Portf-lio-Acad-mico/' : '/',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
}))
