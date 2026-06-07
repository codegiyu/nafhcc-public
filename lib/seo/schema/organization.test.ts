import { describe, expect, it } from 'vitest';
import { buildLocalBusinessSchema, buildOrganizationSchema } from '@/lib/seo/schema/organization';

describe('organization schema', () => {
  it('builds organization with ImageObject logo', () => {
    const schema = buildOrganizationSchema();
    expect(schema['@type']).toBe('Organization');
    expect(schema.logo).toMatchObject({
      '@type': 'ImageObject',
      url: expect.any(String),
    });
  });

  it('builds local business with address and phone', () => {
    const schema = buildLocalBusinessSchema();
    expect(schema['@type']).toBe('RealEstateAgent');
    expect(schema.telephone).toBeTruthy();
    expect(schema.address).toMatchObject({ '@type': 'PostalAddress' });
  });
});
