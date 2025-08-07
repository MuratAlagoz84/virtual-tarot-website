// src/pages/sitemap.xml.ts
import type { APIRoute } from "astro";

const languages = ['en', 'tr', 'es']; // Kullandığınız diller

export const GET: APIRoute = async ({ site }) => {
  // site değerini kontrol edin ve string'e çevirin
  const siteUrl = typeof site === 'string' ? site : '';

  if (!siteUrl) {
    console.error("Site URL'si tanımlı değil veya geçersiz. astro.config.mjs dosyasındaki site alanını kontrol edin.");
    return new Response("Site URL'si eksik veya geçersiz", { status: 500 });
  }

  // siteUrl'nin sonunda / olmadığından emin olun
  const normalizedSiteUrl = siteUrl.endsWith('/') ? siteUrl.slice(0, -1) : siteUrl;

  const urls = [normalizedSiteUrl + '/']; // Ana sayfa

  languages.forEach(lang => {
    urls.push(`${normalizedSiteUrl}/${lang}/`);
  });

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