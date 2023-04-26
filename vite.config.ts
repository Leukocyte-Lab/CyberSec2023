import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';

import Vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import Unfonts from 'unplugin-fonts';
import Icons from 'unplugin-icons/vite';
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
    Icons({
      autoInstall: true,
    }),
    Unfonts.vite({
      google: {
        preconnect: true,
        display: 'swap',
        families: [
          {
            name: 'Noto Sans TC',
            styles: 'wght@400;500;700;900'
          }
        ]
      }
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
});
