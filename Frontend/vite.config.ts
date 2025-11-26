import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc' // 또는 '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
