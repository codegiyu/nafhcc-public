import type { MetadataRoute } from 'next';
import { absoluteUrl } from '@/lib/seo/canonical';
import { shouldNoIndex } from '@/lib/seo/robots-policy';

export default function robots(): MetadataRoute.Robots {
  if (shouldNoIndex()) {
    return {
      rules: {
        userAgent: '*',
        disallow: '/',
      },
    };
  }

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/'],
    },
    sitemap: absoluteUrl('/sitemap.xml'),
  };
}
