import type { SiteImage } from '@/lib/seo/site-images';

export const SEO_LIMITS = {
  titleMax: 60,
  descriptionMin: 120,
  descriptionMax: 160,
  ogWidth: 1200,
  ogHeight: 630,
} as const;

export function validateTitle(title: string): string {
  if (title.length > SEO_LIMITS.titleMax) {
    return title.slice(0, SEO_LIMITS.titleMax - 3).trimEnd() + '...';
  }

  return title;
}

export function validateDescription(description: string): string {
  if (description.length > SEO_LIMITS.descriptionMax) {
    return description.slice(0, SEO_LIMITS.descriptionMax - 3).trimEnd() + '...';
  }

  return description;
}

export function validateSiteImage(image: SiteImage): boolean {
  return Boolean(image.url && image.width > 0 && image.height > 0 && image.alt.trim().length > 0);
}
