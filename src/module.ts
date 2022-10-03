import { defineNuxtModule, addPlugin, createResolver } from '@nuxt/kit';

export default defineNuxtModule({
  setup(_option, _nuxt) {
    const resolver = createResolver(import.meta.url);
    addPlugin(resolver.resolve('./runtime/HelloWorld'));
  },
});
