'use client';

import { useEffect, useState } from 'react';

export type MarketingNavSectionId = 'home' | 'about' | 'estates' | 'services' | 'process';

const SECTION_IDS = ['about', 'estates', 'services', 'process'] as const;

type ObservedSectionId = (typeof SECTION_IDS)[number];

function isObservedSectionId(id: string): id is ObservedSectionId {
  return SECTION_IDS.includes(id as ObservedSectionId);
}

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

        const topSectionId = visible[0]?.target.id;

        if (topSectionId && isObservedSectionId(topSectionId)) {
          setActiveSection(topSectionId);
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

  if (href === '/#about') {
    return pathname === '/' && activeSection === 'about';
  }

  if (href === '/#estates') {
    return pathname === '/' && activeSection === 'estates';
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
