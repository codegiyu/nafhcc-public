import type { Metadata } from 'next';
import { absoluteUrl, canonicalUrl } from '@/lib/seo/canonical';
import { defaultKeywords } from '@/lib/seo/keywords';
import { resolveRobots } from '@/lib/seo/robots-policy';
import { siteConfig } from '@/lib/seo/site-config';
import { getSiteImages, type SiteImage } from '@/lib/seo/site-images';
import { validateDescription, validateTitle } from '@/lib/seo/validate';

type PageMetadataBase = {
  title: string;
  description: string;
  path: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  noIndex?: boolean;
};

type PageMetadataWithCustomImage = PageMetadataBase & {
  image: string;
  imageAlt: string;
};

type PageMetadataInput = PageMetadataBase | PageMetadataWithCustomImage;

function resolveImage(input: PageMetadataInput): SiteImage {
  const images = getSiteImages();

  if ('image' in input && input.image) {
    return {
      url: input.image,
      width: images.ogDefault.width,
      height: images.ogDefault.height,
      alt: input.imageAlt,
    };
  }

  return images.ogDefault;
}

function buildVerification(): Metadata['verification'] {
  const google = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;
  const bing = process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION;

  if (!google && !bing) {
    return undefined;
  }

  return {
    google: google || undefined,
    other: bing ? { 'msvalidate.01': bing } : undefined,
  };
}

export function createPageMetadata(input: PageMetadataInput): Metadata {
  const title = validateTitle(input.title);
  const description = validateDescription(input.description);
  const image = resolveImage(input);
  const images = getSiteImages();
  const canonical = canonicalUrl(input.path);
  const pageUrl = absoluteUrl(input.path);

  return {
    metadataBase: new URL(siteConfig.url),
    title,
    description,
    keywords: defaultKeywords,
    authors: [{ name: siteConfig.shortName }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    category: siteConfig.category,
    alternates: {
      canonical,
    },
    openGraph: {
      type: input.type ?? 'website',
      locale: siteConfig.locale,
      url: pageUrl,
      siteName: siteConfig.shortName,
      title,
      description,
      images: [
        {
          url: image.url,
          width: image.width,
          height: image.height,
          alt: image.alt,
          type: 'image/png',
        },
      ],
      ...(input.publishedTime ? { publishedTime: input.publishedTime } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image.url],
    },
    robots: resolveRobots(input.noIndex),
    verification: buildVerification(),
    icons: {
      icon: images.favicon.url,
      apple: images.appleTouchIcon.url,
    },
    other: {
      'geo.region': siteConfig.geo.region,
      'geo.placename': siteConfig.geo.placename,
    },
  };
}

export function createRootMetadata(): Metadata {
  const base = createPageMetadata({
    title: siteConfig.shortName,
    description: siteConfig.description,
    path: '/',
  });

  return {
    ...base,
    title: {
      default: siteConfig.shortName,
      template: siteConfig.titleTemplate,
    },
  };
}

export function createArticleMetadata(
  input: PageMetadataInput & { publishedTime: string }
): Metadata {
  return createPageMetadata({
    ...input,
    type: 'article',
  });
}

export function createListingMetadata(input: PageMetadataInput): Metadata {
  return createPageMetadata({
    ...input,
    type: 'website',
  });
}

export function createNotFoundMetadata(): Metadata {
  return createPageMetadata({
    title: 'Page not found',
    description:
      'The page you requested could not be found on the NAFHCC website. Browse our housing estates and contact our Abuja office for assistance.',
    path: '/404',
    noIndex: true,
  });
}
