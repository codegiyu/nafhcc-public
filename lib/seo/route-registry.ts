import type { SiteImage } from './site-images';
import { agentSlugs, estateSlugs } from './estate-slugs';
export type RouteStatus = 'live' | 'planned';

export type ChangeFrequency =
  | 'always'
  | 'hourly'
  | 'daily'
  | 'weekly'
  | 'monthly'
  | 'yearly'
  | 'never';

export type RouteEntry = {
  path: string;
  status: RouteStatus;
  changefreq: ChangeFrequency;
  priority: number;
  lastModified?: string;
  images?: Pick<SiteImage, 'url' | 'alt'>[];
};

const staticPlannedRoutes: RouteEntry[] = [
  { path: '/about', status: 'planned', changefreq: 'monthly', priority: 0.7 },
  { path: '/contact', status: 'planned', changefreq: 'monthly', priority: 0.7 },
  { path: '/estates', status: 'planned', changefreq: 'weekly', priority: 0.9 },
  { path: '/gallery', status: 'planned', changefreq: 'weekly', priority: 0.6 },
  { path: '/blog', status: 'planned', changefreq: 'weekly', priority: 0.6 },
  { path: '/agents', status: 'planned', changefreq: 'monthly', priority: 0.6 },
];

const estateRoutes: RouteEntry[] = estateSlugs.map(slug => ({
  path: `/estates/${slug}`,
  status: 'planned' as const,
  changefreq: 'weekly' as const,
  priority: 0.8,
}));

const agentRoutes: RouteEntry[] = agentSlugs.map(slug => ({
  path: `/agents/${slug}`,
  status: 'planned' as const,
  changefreq: 'monthly' as const,
  priority: 0.5,
}));

export const routeRegistry: RouteEntry[] = [
  {
    path: '/',
    status: 'live',
    changefreq: 'weekly',
    priority: 1,
    lastModified: '2026-06-07',
  },
  ...staticPlannedRoutes,
  ...estateRoutes,
  ...agentRoutes,
];

export function getLiveRoutes(): RouteEntry[] {
  return routeRegistry.filter(route => route.status === 'live');
}

export function getRouteByPath(path: string): RouteEntry | undefined {
  const normalized = path === '/' ? '/' : path.replace(/\/+$/, '');
  return routeRegistry.find(route => route.path === normalized);
}

export function isKnownRoutePath(path: string): boolean {
  return getRouteByPath(path) !== undefined;
}
