import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  return [
    { url: `${baseUrl}/`, changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/packs`, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/packs/1`, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/about`, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/faq`, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/contact`, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/privacy`, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/terms`, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/cookies`, changeFrequency: 'yearly', priority: 0.3 },
  ];
}

