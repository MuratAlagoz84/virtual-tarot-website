// astro.config.mjs
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://virtualtarotapp.com',


  trailingSlash: true,

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'tr', 'es', 'fr', 'de', 'it', 'pt', 'ru', 'ja', 'zh', 'ar'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});