import type { MetadataRoute } from 'next';
import { getAllProjects } from '@/lib/markdown';

const BASE_URL = 'https://alazlab.com';
const locales = ['tr', 'en'];
const infassistLocales = ['tr', 'de', 'fr', 'it', 'es', 'ar', 'hi', 'id', 'ko'];

export default function sitemap(): MetadataRoute.Sitemap {
  const projects = getAllProjects();

  const entries: MetadataRoute.Sitemap = [];

  for (const lang of locales) {
    entries.push(
      { url: `${BASE_URL}/${lang}`, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
      { url: `${BASE_URL}/${lang}/hakkimda`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
      { url: `${BASE_URL}/${lang}/muhendislik`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
      { url: `${BASE_URL}/${lang}/lab`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
      { url: `${BASE_URL}/${lang}/gtab`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
      { url: `${BASE_URL}/${lang}/gtab/privacy-policy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
      { url: `${BASE_URL}/${lang}/gt-launcher/privacy-policy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
      { url: `${BASE_URL}/${lang}/svp`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
      { url: `${BASE_URL}/${lang}/svp/privacy-policy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
      { url: `${BASE_URL}/${lang}/svp/terms-of-service`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 }
    );

    entries.push({
      url: `${BASE_URL}/${lang}/infassist/privacy-policy`,
      lastModified: new Date('2026-10-01'),
      changeFrequency: 'yearly',
      priority: 0.3,
    });

    for (const p of projects) {
      entries.push({
        url: `${BASE_URL}/${lang}/proje/${p.slug}`,
        lastModified: p.date ? new Date(p.date) : new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      });
    }
  }

  entries.push(
    { url: `${BASE_URL}/infassist`, lastModified: new Date('2026-10-01'), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/infassist/privacy`, lastModified: new Date('2026-10-01'), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE_URL}/infassist/support`, lastModified: new Date('2026-10-01'), changeFrequency: 'yearly', priority: 0.3 },
  );

  for (const lang of infassistLocales) {
    entries.push(
      { url: `${BASE_URL}/infassist/${lang}`, lastModified: new Date('2026-10-01'), changeFrequency: 'weekly', priority: 0.7 },
      { url: `${BASE_URL}/infassist/${lang}/privacy`, lastModified: new Date('2026-10-01'), changeFrequency: 'yearly', priority: 0.3 },
      { url: `${BASE_URL}/infassist/${lang}/support`, lastModified: new Date('2026-10-01'), changeFrequency: 'yearly', priority: 0.3 },
    );
  }

  return entries;
}
