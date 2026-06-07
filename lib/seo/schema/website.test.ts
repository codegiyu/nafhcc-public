import { describe, expect, it } from 'vitest';
import { buildWebsiteSchema } from '@/lib/seo/schema/website';

describe('website schema', () => {
  it('links publisher to organization id', () => {
    const schema = buildWebsiteSchema();
    expect(schema.publisher).toEqual({ '@id': '#organization' });
  });
});
