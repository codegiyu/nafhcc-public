'use client';

import { useEffect, useState } from 'react';
import type { StyleguideSectionId } from '@/lib/design-tokens';

export function useStyleguideScrollspy(
  sectionIds: readonly StyleguideSectionId[],
  defaultId: StyleguideSectionId
) {
  const [activeId, setActiveId] = useState<StyleguideSectionId>(defaultId);

  useEffect(() => {
    const sections = sectionIds
      .map(id => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null);

    if (sections.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      entries => {
        const visible = entries
          .filter(entry => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id as StyleguideSectionId);
        }
      },
      { rootMargin: '-20% 0px -55% 0px', threshold: [0, 0.25, 0.5] }
    );

    for (const section of sections) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, [sectionIds]);

  return activeId;
}
