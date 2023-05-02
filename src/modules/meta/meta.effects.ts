import { useHead } from '@vueuse/head';

import type { State as MetaState } from './meta.service';
import type { MetaType } from './meta.model';

const useMetaEffects$ = (state: MetaState) => {
  const SetMeta = () => {
    useHead({
      htmlAttrs: {
        lang: state.meta.lang
      },
      title: state.meta.title,
      meta: [
        ...(Object.entries(state.meta) as [MetaType, string][])
          .filter(([key]) => /og:/.test(key))
          .map(([key, value]) => ({ property: key, content: value })),
        {
          name: 'description',
          content: state.meta.description
        },
        {
          name: 'og:title',
          content: state.meta.title
        }
      ]
    });
  };

  return {
    SetMeta
  };
};

export default useMetaEffects$;
