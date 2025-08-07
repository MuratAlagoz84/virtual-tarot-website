// astro.config.mjs
import { defineConfig } from 'astro/config';

export default defineConfig({
  // Vercel için optimizasyon
  output: 'server',
  
  // i18n (Uluslararasılaştırma) Yapılandırması
  i18n: {
    defaultLocale: 'en', // 1. ANA DİL İNGİLİZCE OLDU
    locales: ['en', 'tr', 'es', 'fr', 'de', 'it', 'pt', 'ru', 'ja', 'zh', 'ar'], // 2. DESTEKLENEN DİLLER
    routing: {
      prefixDefaultLocale: false, // 3. /en/ ÖNEKİ OLMAYACAK, virtualtarotapp.com DOĞRUDAN İNGİLİZCE OLACAK
      redirectToDefaultLocale: false, // Kullanıcıyı diline göre yönlendirme
    },
  },
});