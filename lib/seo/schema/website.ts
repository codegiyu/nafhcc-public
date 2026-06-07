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
      target: `${siteConfig.url}/estates?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    };
  }

  return schema;
}
