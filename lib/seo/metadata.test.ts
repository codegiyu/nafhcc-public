import { describe, expect, it } from 'vitest';
import { createPageMetadata, createRootMetadata } from '@/lib/seo/metadata';

function firstOgImage(metadata: ReturnType<typeof createPageMetadata>) {
  const images = metadata.openGraph?.images;
  const image = Array.isArray(images) ? images[0] : images;

  if (image && typeof image === 'object' && 'url' in image) {
    return image;
  }

  return undefined;
}

describe('metadata', () => {
  it('builds canonical, openGraph, and twitter fields', () => {
    const metadata = createPageMetadata({
      title: 'About NAFHCC',
      description:
        'Learn about the Nigerian Air Force Housing and Construction Company, our mission, estates, and housing delivery across Abuja and Nigeria today.',
      path: '/about',
    });

    expect(metadata.metadataBase?.toString()).toBe('http://localhost:3000/');
    expect(metadata.alternates?.canonical).toBe('http://localhost:3000/about');
    expect(firstOgImage(metadata)).toMatchObject({
      width: 1200,
      height: 630,
      alt: expect.any(String),
    });
    expect(metadata.twitter).toMatchObject({ card: 'summary_large_image' });
  });

  it('uses custom image metadata when provided', () => {
    const metadata = createPageMetadata({
      title: 'Custom',
      description:
        'Custom page description for testing image metadata output across Open Graph and Twitter card fields in the NAFHCC public site.',
      path: '/custom',
      image: 'https://example.com/custom.png',
      imageAlt: 'Custom estate image',
    });

    expect(firstOgImage(metadata)?.url).toBe('https://example.com/custom.png');
    expect(firstOgImage(metadata)?.alt).toBe('Custom estate image');
  });

  it('creates root metadata with title template', () => {
    const metadata = createRootMetadata();
    expect(metadata.title).toMatchObject({
      default: 'NAFHCC',
      template: '%s | NAFHCC',
    });
  });
});
