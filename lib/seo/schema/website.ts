import { siteConfig } from '@/lib/seo/site-config';

export function buildWebsiteSchema(includeSearchAction = false) {
  const schema: Record<string, unknown> = {
    '@type': 'WebSite',
    '@id': '#website',
    name: siteConfig.shortName,
    url: siteConfig.url,
    publisher: {
      '@id': '#organization',
    },
  };

  if (includeSearchAction) {
    schema.potentialAction = {
      '@type': 'SearchAction',
      target: `${siteConfig.url}/search?location={location}&type={type}&price={price}`,
      'query-input': 'required name=location required name=type required name=price',
    };
  }

  return schema;
}
