import { describe, expect, it } from 'vitest';
import { createStyleguideMetadata } from '@/lib/styleguide/metadata';

describe('createStyleguideMetadata', () => {
  it('blocks search indexing', () => {
    const metadata = createStyleguideMetadata();
    expect(metadata.robots).toEqual({ index: false, follow: false });
  });

  it('marks the page as internal styleguide', () => {
    const metadata = createStyleguideMetadata();
    expect(metadata.title).toContain('Styleguide');
  });
});
