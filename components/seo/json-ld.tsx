import { buildRootSchemaGraph } from '@/lib/seo/schema';

export function JsonLd() {
  const schema = buildRootSchemaGraph();

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
