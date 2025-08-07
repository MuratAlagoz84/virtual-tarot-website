// astro.config.mjs
import { defineConfig } from 'astro/config';

export default defineConfig({
  // Sitemap oluşturmak için bu ayar şart
  site: 'https://www.virtualtarotapp.com', 

  // i18n (çoklu dil) ayarları
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'tr', 'es', 'fr', 'de', 'it', 'pt', 'ru', 'ja', 'zh', 'ar'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});