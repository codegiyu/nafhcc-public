import { siteConfig } from '@/lib/seo/site-config';

export function normalizePath(path: string): string {
  if (!path || path === '/') {
    return '/';
  }

  const withLeadingSlash = path.startsWith('/') ? path : `/${path}`;
  return withLeadingSlash.replace(/\/+$/, '');
}

export function absoluteUrl(path: string = '/'): string {
  const base = siteConfig.url.replace(/\/+$/, '');
  const normalized = normalizePath(path);

  if (normalized === '/') {
    return `${base}/`;
  }

  return `${base}${normalized}`;
}

export function canonicalUrl(path: string = '/'): string {
  return absoluteUrl(path);
}
