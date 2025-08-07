// astro.config.mjs
import { defineConfig } from 'astro/config';

// 1. Sitemap entegrasyonunu import ediyoruz
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Sitemap'in doğru URL'ler oluşturması için site adresi
  site: 'https://www.virtualtarotapp.com', 

  // 2. Entegrasyonu Astro'nun kullanması için listeye ekliyoruz
  integrations: [sitemap()],

  // i18n (çoklu dil) ayarları
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'tr', 'es', 'fr', 'de', 'it', 'pt', 'ru', 'ja', 'zh', 'ar'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});