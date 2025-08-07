// astro.config.mjs
import { defineConfig } from 'astro/config';
// import sitemap from '@astrojs/sitemap'; // Bu satırı yorum satırı yapın veya silin

export default defineConfig({
  site: 'https://www.virtualtarotapp.com',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'tr', 'es', 'fr', 'de', 'it', 'pt', 'ru', 'ja', 'zh', 'ar'],
    routing: {
      prefixDefaultLocale: false,
    },
  },

  // integrations: [sitemap()], // Bu satırı yorum satırı yapın veya silin
});