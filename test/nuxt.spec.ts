import { setup, $fetch } from '@nuxt/test-utils';
import { fileURLToPath } from 'node:url';

describe('works with nuxt', async () => {
  await setup({
    server: true,
    rootDir: fileURLToPath(new URL('../playground', import.meta.url)),
    nuxtConfig: {
      hooks: {
        'vite:extendConfig'(config, { isClient }) {
          config.define!.__BROWSER__ = isClient;
        },
      },
      vite: {
        define: {
          __DEV__: false,
          __TEST__: true,
          __FEATURE_PROD_DEVTOOLS__: false,
        },
      },
    },
  });

  it('render', async () => {
    const html = await $fetch('/');
    expect(html).toContain('NuxtWelcome');
  });
});
