import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Usa a pasta `app-atualizado/` como fonte da verdade
  root: 'app-atualizado',
  // Usa o `public/` da raiz do repo (onde estão imagens/pdfs)
  publicDir: '../public',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    // Mantém o `dist/` na raiz do repositório
    outDir: '../dist',
    emptyOutDir: true,
  },
})
