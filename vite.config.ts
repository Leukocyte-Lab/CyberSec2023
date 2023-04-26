import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';

import Vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Vue(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true
      },
      workbox: {
        navigateFallback: 'index.html',
        navigateFallbackDenylist: [/.*\.(jpg|png|svg|json|js)$/]
      }
    }),
    Components({
      dts: true,
      deep: true,
      dirs: ['src/components'],
      include: [/\.vue$/, /\.vue\?vue/]
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
});
