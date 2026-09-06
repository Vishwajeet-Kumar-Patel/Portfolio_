import type { MetadataRoute } from 'next';
import { caseStudySlugs } from '@/lib/case-studies';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://vishwajeet.dev',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...caseStudySlugs.map((slug) => ({
      url: `https://vishwajeet.dev/projects/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ];
}