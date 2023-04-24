import { getCurrentInstance } from 'vue';
import { isClient } from '@vueuse/shared';

import type { Context } from './context.model';

export const useCtx = (): Context => {
  return {
    app: getCurrentInstance()!.appContext.app,
    isClient
  };
};
