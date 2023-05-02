import type { ViteSSGContext } from 'vite-ssg';
import type { createModuleSetup, createModuleHook } from '@/modules/utils/module-factory';

export type Module = Record<'setup', ReturnType<typeof createModuleSetup>> &
  Record<string, ReturnType<typeof createModuleHook>>;

export type InstallContext = ViteSSGContext<false>;

export type SetupContext = Pick<ViteSSGContext, 'app' | 'router' | 'isClient'>;

export type UserModuleInstall = (ctx: InstallContext) => void;

export type UserModuleSetup = (ctx: SetupContext) => void;
