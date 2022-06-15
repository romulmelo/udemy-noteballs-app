import { fileURLToPath, URL } from 'url'
import { defineConfig } from 'vite'

import vue from '@vitejs/plugin-vue'
import windicss from 'vite-plugin-windicss'

export default defineConfig({
  plugins: [vue(), windicss()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
