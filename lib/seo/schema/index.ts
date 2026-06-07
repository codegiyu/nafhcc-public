import { buildLocalBusinessSchema, buildOrganizationSchema } from '@/lib/seo/schema/organization';
import { buildWebsiteSchema } from '@/lib/seo/schema/website';

export function buildRootSchemaGraph() {
  return {
    '@context': 'https://schema.org',
    '@graph': [buildOrganizationSchema(), buildLocalBusinessSchema(), buildWebsiteSchema()],
  };
}
