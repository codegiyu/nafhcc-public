import { afterEach, describe, expect, it } from 'vitest';
import { resolveRobots, shouldNoIndex } from '@/lib/seo/robots-policy';

describe('robots-policy', () => {
  afterEach(() => {
    delete process.env.VERCEL_ENV;
    delete process.env.SEO_ALLOW_INDEXING;
  });

  it('defaults to indexable outside preview', () => {
    expect(shouldNoIndex()).toBe(false);
    expect(resolveRobots()).toMatchObject({ index: true, follow: true });
  });

  it('noindexes preview unless SEO_ALLOW_INDEXING is true', () => {
    process.env.VERCEL_ENV = 'preview';
    expect(shouldNoIndex()).toBe(true);
    expect(resolveRobots()).toMatchObject({ index: false, follow: false });

    process.env.SEO_ALLOW_INDEXING = 'true';
    expect(shouldNoIndex()).toBe(false);
  });
});
