import { absoluteUrl } from '@/lib/seo/canonical';
import type { SiteImage } from '@/lib/seo/site-images';

export type ListingSchemaInput = {
  name: string;
  description: string;
  path: string;
  image: SiteImage;
};

export function buildListingSchema(input: ListingSchemaInput) {
  return {
    '@type': 'RealEstateListing',
    name: input.name,
    description: input.description,
    url: absoluteUrl(input.path),
    image: {
      '@type': 'ImageObject',
      url: input.image.url,
      width: input.image.width,
      height: input.image.height,
    },
  };
}
