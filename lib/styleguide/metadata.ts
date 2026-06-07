import type { Metadata } from 'next';

export function createStyleguideMetadata(): Metadata {
  return {
    title: 'Styleguide (internal)',
    robots: {
      index: false,
      follow: false,
    },
  };
}
