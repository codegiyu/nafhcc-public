import type { Metadata } from 'next';

export function isPreviewEnvironment(): boolean {
  return process.env.VERCEL_ENV === 'preview';
}

export function shouldNoIndex(): boolean {
  if (process.env.SEO_ALLOW_INDEXING === 'true') {
    return false;
  }

  return isPreviewEnvironment();
}

export const defaultRobots: Metadata['robots'] = {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
  },
};

export const noIndexRobots: Metadata['robots'] = {
  index: false,
  follow: false,
  googleBot: {
    index: false,
    follow: false,
  },
};

export function resolveRobots(noIndex?: boolean): Metadata['robots'] {
  if (noIndex || shouldNoIndex()) {
    return noIndexRobots;
  }

  return defaultRobots;
}
