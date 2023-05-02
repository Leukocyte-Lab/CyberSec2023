import { computed, reactive } from 'vue';
import { createModuleHook, createModuleSetup } from '@/modules/utils/module-factory';

import type { InjectionKey } from 'vue';

import useMetaEffects$ from './meta.effects';

import ogImageSrc from '@/assets/images/og.jpg';

import type { MetaValues, UseMeta } from './meta.model';

const PROVIDE_KEY: InjectionKey<UseMeta> = Symbol('meta');

export interface State {
  meta: MetaValues;
}

const useMeta$ = (): UseMeta => {
  const defaultMetaValues: MetaValues = {
    lang: 'zh-TW',
    title: 'Leukocyte-Lab x CyberSec2023 | 台灣資安大會參展確定！',
    description: '',
    'og:url': `${import.meta.env.VITE_ORIGIN}${import.meta.env.VITE_BASE_URL}`,
    'og:image': ogImageSrc,
    'og:type': 'website',
    'og:site_name': 'Leukocyte-Lab x CyberSec2023'
  };

  const state = reactive({
    meta: defaultMetaValues
  });

  const getters = {
    meta: computed(() => state.meta)
  }

  return {
    ...getters,
    ...useMetaEffects$(state)
  };
};

export const setup = createModuleSetup(PROVIDE_KEY, useMeta$)
export const useMeta = createModuleHook(PROVIDE_KEY, useMeta$)
