import { describe, expect, it } from 'vitest';
import {
  brandColors,
  designLayout,
  styleguideNav,
  styleguideSectionIds,
} from '@/lib/design-tokens';

describe('design-tokens', () => {
  it('exports brand color palette with primary and navy', () => {
    expect(brandColors.primary).toMatch(/^#/);
    expect(brandColors.navy).toMatch(/^#/);
  });

  it('defines container layout widths', () => {
    expect(designLayout.container).toBeTruthy();
    expect(designLayout.containerWide).toBeTruthy();
  });

  it('aligns styleguide nav with section ids', () => {
    const navIds = styleguideNav.map(item => item.id);
    expect(navIds).toEqual([...styleguideSectionIds]);
  });
});
