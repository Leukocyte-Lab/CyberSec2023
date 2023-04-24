import type { App } from 'vue';

export type Context = {
  app: App<Element>;
  isClient: boolean;
};
