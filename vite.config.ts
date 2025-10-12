import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  // Ensure base has a trailing slash so assets resolve correctly when deployed
  base: "/WebTemplate/",
  plugins: [react()],
})
