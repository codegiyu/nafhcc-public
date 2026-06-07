import { absoluteUrl } from '@/lib/seo/canonical';
import { siteConfig } from '@/lib/seo/site-config';
import type { SiteImage } from '@/lib/seo/site-images';

export type ArticleSchemaInput = {
  title: string;
  description: string;
  path: string;
  publishedTime: string;
  image: SiteImage;
};

export function buildArticleSchema(input: ArticleSchemaInput) {
  return {
    '@type': 'BlogPosting',
    headline: input.title,
    description: input.description,
    url: absoluteUrl(input.path),
    datePublished: input.publishedTime,
    author: {
      '@type': 'Organization',
      name: siteConfig.name,
    },
    publisher: {
      '@id': '#organization',
    },
    image: {
      '@type': 'ImageObject',
      url: input.image.url,
      width: input.image.width,
      height: input.image.height,
    },
  };
}
