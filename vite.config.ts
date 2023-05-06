import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'

export default defineConfig({
  plugins: [solidPlugin()],
  server: {
    port: 9876,
  },
  build: {
    target: 'esnext',
    outDir: 'docs',
  },
})
