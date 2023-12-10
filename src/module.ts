import { defineNuxtModule, addPlugin, createResolver } from '@nuxt/kit';
import { name, version } from '../package.json';

type ModuleOptions = {};

declare module '@nuxt/schema' {
  interface NuxtConfig {}
  interface NuxtOptions {}
}
export default defineNuxtModule<ModuleOptions>({
  meta: {
    name,
    version,
  },
  defaults: undefined,
  setup(_option, _nuxt) {
    const resolver = createResolver(import.meta.url);
    addPlugin(resolver.resolve('./runtime/HelloWorld'));
  },
});
