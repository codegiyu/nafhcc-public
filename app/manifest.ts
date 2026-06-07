import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/seo/site-config';

export default function manifest(): MetadataRoute.Manifest {
  const images = siteConfig.images;

  return {
    name: siteConfig.name,
    short_name: siteConfig.shortName,
    description: siteConfig.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#fafbfb',
    theme_color: '#286da4',
    icons: [
      {
        src: images.favicon.url,
        sizes: `${images.favicon.width}x${images.favicon.height}`,
        type: 'image/png',
      },
      {
        src: images.appleTouchIcon.url,
        sizes: `${images.appleTouchIcon.width}x${images.appleTouchIcon.height}`,
        type: 'image/png',
      },
    ],
  };
}
