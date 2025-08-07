/ src/pages/sitemap.xml.ts
import type { APIRoute } from "astro";

const languages = ['en', 'tr', 'es', 'fr', 'de', 'it', 'pt', 'ru', 'ja', 'zh', 'ar'];

export const GET: APIRoute = async ({ site }) => {
  const siteUrl = site?.toString() || 'https://www.virtualtarotapp.com';
  const baseUrl = siteUrl.endsWith('/') ? siteUrl.slice(0, -1) : siteUrl;
  
  // URL'leri oluştur ve boş olanları filtrele
  const urls = [
    `${baseUrl}/`,
    ...languages
      .filter(lang => lang && lang.trim()) // Boş veya undefined dilleri filtrele
      .map(lang => `${baseUrl}/${lang}/`)
  ];

  // XML sitemap oluştur
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
};