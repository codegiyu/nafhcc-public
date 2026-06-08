import { describe, expect, it } from 'vitest';
import { getLiveRoutes, routeRegistry } from '@/lib/seo/route-registry';

describe('route-registry', () => {
  it('marks homepage and search as live routes', () => {
    const live = getLiveRoutes();
    expect(live.map(route => route.path)).toEqual(['/', '/search']);
  });

  it('assigns valid priority and changefreq to all routes', () => {
    for (const route of routeRegistry) {
      expect(route.priority).toBeGreaterThan(0);
      expect(route.priority).toBeLessThanOrEqual(1);
      expect(route.changefreq).toBeTruthy();
    }
  });
});
