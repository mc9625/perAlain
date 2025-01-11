import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/perAlain/' // deve corrispondere al nome del tuo repository
})