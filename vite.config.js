import { fileURLToPath, URL } from 'url'
import { defineConfig } from 'vite'

import Vue from '@vitejs/plugin-vue'

import WindiCSS from 'vite-plugin-windicss'

import Components from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'

export default defineConfig({
  plugins: [
    Vue(),
    Components({
      resolvers: [IconsResolver({ prefix: false, enabledCollections: ['ph'] })]
    }),
    Icons({
      autoInstall: true
    }),
    WindiCSS()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
