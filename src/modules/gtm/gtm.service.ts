import { createGtm } from '@gtm-support/vue-gtm';

import type { UserModuleInstall } from '@/modules/types';

export const install: UserModuleInstall = ({ app }) => {
  if (!import.meta.env.VITE_GTM_ID) return;
  if (!import.meta.env.PROD) return;

  app.use(
    createGtm({
      id: import.meta.env.VITE_GTM_ID.toString()
    })
  );
};
