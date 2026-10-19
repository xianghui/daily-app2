import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  base: "/daily-app2/20261020-5/",
  plugins: [react()],
})
