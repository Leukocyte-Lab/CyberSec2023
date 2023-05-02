import type { ComputedRef } from 'vue';

export type MetaType = 'lang' | 'title' | 'description' | 'og:url' | 'og:image' | 'og:type' | 'og:site_name';
export type MetaValues = Record<MetaType, string>;
export type MetaOptions = Partial<MetaValues>;

export interface UseMeta {
  meta: ComputedRef<MetaValues>;

  SetMeta: () => void;
};
