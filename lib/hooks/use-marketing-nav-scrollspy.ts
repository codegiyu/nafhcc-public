'use client';

import { useEffect, useState } from 'react';

export type MarketingNavSectionId = 'home' | 'services' | 'process';

const SECTION_IDS = ['services', 'process'] as const;

export function useMarketingNavScrollspy(enabled: boolean) {
  const [activeSection, setActiveSection] = useState<MarketingNavSectionId>('home');

  useEffect(() => {
    if (!enabled) {
      return;
    }

    const sections = SECTION_IDS.map(id => document.getElementById(id)).filter(
      (element): element is HTMLElement => element !== null
    );

    if (sections.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      entries => {
        const visible = entries
          .filter(entry => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id === 'services' || visible[0]?.target.id === 'process') {
          setActiveSection(visible[0].target.id);
          return;
        }

        if (window.scrollY < 200) {
          setActiveSection('home');
        }
      },
      { rootMargin: '-20% 0px -55% 0px', threshold: [0, 0.25, 0.5] }
    );

    for (const section of sections) {
      observer.observe(section);
    }

    function handleScroll() {
      if (window.scrollY < 200) {
        setActiveSection(current => (current === 'home' ? current : 'home'));
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [enabled]);

  return enabled ? activeSection : 'home';
}

export function resolveMarketingNavActive(
  pathname: string,
  href: string,
  activeSection: MarketingNavSectionId
): boolean {
  if (href === '/') {
    return pathname === '/' && activeSection === 'home';
  }

  if (href === '/#services') {
    return pathname === '/' && activeSection === 'services';
  }

  if (href === '/#process') {
    return pathname === '/' && activeSection === 'process';
  }

  const basePath = href.split('#')[0] ?? href;

  if (basePath === '/') {
    return false;
  }

  return pathname === basePath || pathname.startsWith(`${basePath}/`);
}
