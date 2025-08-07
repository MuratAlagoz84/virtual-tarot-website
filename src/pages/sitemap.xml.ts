// src/pages/sitemap.xml.ts
import type { APIRoute } from "astro";

const languages = ['en', 'tr', 'es']; // Kullandığınız diller

// Dinamik olarak URL'leri oluşturmak için fonksiyon
function generateUrls(siteUrl: string, langs: string[]) {
  const urls = [siteUrl]; // Ana sayfa

  langs.forEach(lang => {
    urls.push(`${siteUrl}/${lang}/`);
  });

  return urls;
}

export const GET: APIRoute = async ({ site }) => {
  if (!site) {
    console.error("Site URL'si tanımlı değil. astro.config.mjs dosyasındaki site alanını kontrol edin.");
    return new Response("Site URL'si eksik", { status: 500 });
  }

  const urls = generateUrls(site, languages);

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url><loc>${url}</loc></url>`).join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
};