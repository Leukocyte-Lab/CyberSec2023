import { ViteSSG } from 'vite-ssg/single-page';

import { installModules } from '@/modules';

import App from './App.vue';

import 'unfonts.css';

export const createApp = ViteSSG(
  App,
  (ctx) => {
    installModules(ctx);
  }
);
