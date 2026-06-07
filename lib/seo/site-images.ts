export type SiteImage = {
  url: string;
  width: number;
  height: number;
  alt: string;
};

const placeholderImages = {
  logo: {
    url: 'https://placehold.co/512x512/286da4/ffffff/png?text=NAFHCC',
    width: 512,
    height: 512,
    alt: 'NAFHCC logo',
  },
  ogDefault: {
    url: 'https://placehold.co/1200x630/286da4/decfa5/png?text=NAFHCC',
    width: 1200,
    height: 630,
    alt: 'NAFHCC — Nigerian Air Force Housing and Construction Company',
  },
  favicon: {
    url: 'https://placehold.co/32x32/286da4/ffffff/png?text=N',
    width: 32,
    height: 32,
    alt: 'NAFHCC favicon',
  },
  appleTouchIcon: {
    url: 'https://placehold.co/180x180/286da4/ffffff/png?text=NAFHCC',
    width: 180,
    height: 180,
    alt: 'NAFHCC app icon',
  },
  hero: {
    url: '/images/hero-estate.jpg',
    width: 1920,
    height: 1080,
    alt: 'NAFHCC residential estate — quality housing across Nigeria',
  },
} as const satisfies Record<string, SiteImage>;

function withOverride(base: SiteImage, overrideUrl?: string): SiteImage {
  if (!overrideUrl) {
    return base;
  }

  return { ...base, url: overrideUrl };
}

export type SiteImages = {
  logo: SiteImage;
  ogDefault: SiteImage;
  favicon: SiteImage;
  appleTouchIcon: SiteImage;
  hero: SiteImage;
};

export function getSiteImages(): SiteImages {
  return {
    logo: withOverride(placeholderImages.logo, process.env.NEXT_PUBLIC_SEO_LOGO_URL),
    ogDefault: withOverride(placeholderImages.ogDefault, process.env.NEXT_PUBLIC_SEO_OG_IMAGE_URL),
    favicon: withOverride(placeholderImages.favicon, process.env.NEXT_PUBLIC_SEO_FAVICON_URL),
    appleTouchIcon: placeholderImages.appleTouchIcon,
    hero: placeholderImages.hero,
  };
}

export const siteImages = placeholderImages;
