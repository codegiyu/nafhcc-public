import type { MetadataRoute } from 'next';
import { absoluteUrl } from '@/lib/seo/canonical';
import { getSiteImages } from '@/lib/seo/site-images';
import { getLiveRoutes } from '@/lib/seo/route-registry';

export function buildSitemapEntries(): MetadataRoute.Sitemap {
  const images = getSiteImages();

  return getLiveRoutes().map(route => {
    const entry: MetadataRoute.Sitemap[number] = {
      url: absoluteUrl(route.path),
      lastModified: route.lastModified ? new Date(route.lastModified) : new Date(),
      changeFrequency: route.changefreq,
      priority: route.priority,
    };

    const routeImages =
      route.images ??
      (route.path === '/' ? [{ url: images.hero.url, alt: images.hero.alt }] : undefined);

    if (routeImages?.length) {
      entry.images = routeImages.map(image => image.url);
    }

    return entry;
  });
}
