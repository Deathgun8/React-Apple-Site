import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), sentryVitePlugin({
    org: "jsm-4wy",
    project: "javascript-react",
    base: "/React-Apple-Sit"
  })], 

  build: {
    sourcemap: true
  }
})