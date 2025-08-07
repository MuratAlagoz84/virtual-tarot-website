// src/pages/sitemap.xml.ts
import type { APIRoute } from "astro";

const languages = ['en', 'tr', 'es']; // Kullandığınız diller

export const GET: APIRoute = async ({ site }) => {
  // astro.config.mjs'deki site ayarını al
  const siteUrl = site?.toString() || 'https://www.virtualtarotapp.com';

  // URL'lerin sonunda / olduğundan emin ol
  const baseUrl = siteUrl.endsWith('/') ? siteUrl.slice(0, -1) : siteUrl;

  // Sitemap'e eklenecek tüm URL'leri oluştur
  const urls = [
    `${baseUrl}/`, // Ana sayfa
    ...languages.map(lang => `${baseUrl}/${lang}/`)
  ];

  // Düzgün biçimlendirilmiş XML site haritası
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>\n    <loc>${url}</loc>\n  </url>`).join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
};