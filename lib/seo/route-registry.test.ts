import { describe, expect, it } from 'vitest';
import { getLiveRoutes, routeRegistry } from '@/lib/seo/route-registry';

describe('route-registry', () => {
  it('marks only the homepage as live in P1', () => {
    const live = getLiveRoutes();
    expect(live.map(route => route.path)).toEqual(['/']);
  });

  it('assigns valid priority and changefreq to all routes', () => {
    for (const route of routeRegistry) {
      expect(route.priority).toBeGreaterThan(0);
      expect(route.priority).toBeLessThanOrEqual(1);
      expect(route.changefreq).toBeTruthy();
    }
  });
});
