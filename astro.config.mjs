// astro.config.mjs
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://virtualtarotapp.com',
  
  // Bu ayarı da eklemeyi düşünün
  trailingSlash: true, // Tüm URL'lerin sonunda / olmasını sağlar (örn: /tr/)

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'tr', 'es', 'fr', 'de', 'it', 'pt', 'ru', 'ja', 'zh', 'ar'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});