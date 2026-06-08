import { describe, expect, it } from 'vitest';
import { resolveMarketingNavActive } from '@/lib/hooks/use-marketing-nav-scrollspy';

describe('resolveMarketingNavActive', () => {
  it('marks home active only at top of homepage', () => {
    expect(resolveMarketingNavActive('/', '/', 'home')).toBe(true);
    expect(resolveMarketingNavActive('/', '/', 'services')).toBe(false);
  });

  it('marks hash nav items active when their section is in view', () => {
    expect(resolveMarketingNavActive('/', '/#about', 'about')).toBe(true);
    expect(resolveMarketingNavActive('/', '/#estates', 'estates')).toBe(true);
    expect(resolveMarketingNavActive('/', '/#services', 'services')).toBe(true);
    expect(resolveMarketingNavActive('/', '/#process', 'process')).toBe(true);
    expect(resolveMarketingNavActive('/', '/#services', 'home')).toBe(false);
  });

  it('marks route nav items active by pathname off homepage', () => {
    expect(resolveMarketingNavActive('/estates', '/estates', 'home')).toBe(true);
    expect(resolveMarketingNavActive('/contact', '/contact', 'home')).toBe(true);
  });
});
