'use client';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { SiteFooter } from '@/components/layout/site-footer';
import { SiteHeader } from '@/components/layout/site-header';
import { CtaBand } from '@/components/marketing/cta-band';
import { EstateCard } from '@/components/marketing/cards/estate-card';
import { ProcessStep } from '@/components/marketing/cards/process-step';
import { PropertyTypeCard } from '@/components/marketing/cards/property-type-card';
import { ServiceCard } from '@/components/marketing/cards/service-card';
import { HeroSection } from '@/components/marketing/hero-section';
import { OverlineBadge, SectionHeader } from '@/components/marketing/overline-badge';
import { SearchBar } from '@/components/marketing/search-bar';
import { StatsBar } from '@/components/marketing/stats-bar';
import {
  StyleguidePreviewBox,
  StyleguideSection,
} from '@/components/styleguide/styleguide-section';
import {
  styleguideEstates,
  styleguideProcessSteps,
  styleguidePropertyTypes,
  styleguideSearchOptions,
  styleguideServices,
  styleguideStats,
} from '@/lib/fixtures/styleguide-mocks';
import {
  brandColors,
  designLayout,
  designRadii,
  designShadows,
  designTypography,
  styleguideNav,
  styleguideSectionIds,
} from '@/lib/design-tokens';
import { useStyleguideScrollspy } from '@/lib/hooks/use-styleguide-scrollspy';
import { primaryNavigation } from '@/lib/site-navigation';
import { cn } from '@/lib/utils';

const buttonVariantsList = [
  'default',
  'outline',
  'secondary',
  'ghost',
  'inverse',
  'hero-outline',
  'link',
] as const;

function StyleguideNavItem({
  id,
  label,
  isActive,
}: {
  id: string;
  label: string;
  isActive: boolean;
}) {
  return (
    <li>
      <a
        href={`#${id}`}
        aria-current={isActive ? 'location' : undefined}
        className={cn(
          'block rounded-md border-l-2 py-2 pl-3 pr-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
          isActive
            ? 'border-primary bg-primary/10 font-medium text-primary'
            : 'border-transparent text-muted-foreground hover:border-border hover:bg-muted/40 hover:text-foreground'
        )}>
        {label}
      </a>
    </li>
  );
}

export function StyleguideView() {
  const activeSectionId = useStyleguideScrollspy(styleguideSectionIds, styleguideSectionIds[0]);

  return (
    <div className="styleguide-root min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="mx-auto flex max-w-container-wide items-center justify-between gap-4 px-6 py-3">
          <div>
            <p className="text-caption text-muted-foreground">Internal · Not indexed</p>
            <h1 className="text-lg font-semibold">NAFHCC Design System</h1>
          </div>
        </div>
      </header>

      <div className="mx-auto flex max-w-container-wide gap-10 px-6 py-10">
        <nav aria-label="Styleguide sections" className="hidden w-52 shrink-0 lg:block">
          <ul className="sticky top-24 space-y-1">
            {styleguideNav.map(item => (
              <StyleguideNavItem
                key={item.id}
                id={item.id}
                label={item.label}
                isActive={activeSectionId === item.id}
              />
            ))}
          </ul>
        </nav>

        <main className="min-w-0 flex-1 space-y-16">
          <StyleguideSection
            id="introduction"
            title="Introduction"
            description="Living design system extracted from the Lovable homepage mock. Phase 1 — review tokens and components before marketing page rollout.">
            <div className="rounded-xl border border-border bg-muted/40 p-6 text-sm leading-relaxed text-muted-foreground">
              <p>
                <strong className="text-foreground">Reference:</strong> Lovable gofullpage desktop
                design (see workspace{' '}
                <code className="rounded bg-muted px-1">docs/design-references/</code>).
              </p>
              <p className="mt-3">
                This page is not linked from the public site. URL:{' '}
                <code className="rounded bg-muted px-1">/internal/styleguide</code>
              </p>
            </div>
          </StyleguideSection>

          <StyleguideSection
            id="color"
            title="Color"
            description="Brand palette aligned to the Lovable design.">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {Object.entries(brandColors).map(([name, value]) => (
                <div key={name} className="overflow-hidden rounded-lg border border-border">
                  <div className="h-16" style={{ background: value }} />
                  <div className="p-3 text-sm">
                    <p className="font-medium capitalize">{name.replace(/([A-Z])/g, ' $1')}</p>
                    <p className="text-muted-foreground">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </StyleguideSection>

          <StyleguideSection
            id="typography"
            title="Typography"
            description="Inter type scale for marketing pages.">
            <div className="space-y-6">
              <p className={designTypography.hero}>Hero heading sample</p>
              <p className={designTypography.h2}>Section heading (H2)</p>
              <p className={designTypography.h3}>Card title (H3)</p>
              <p className={designTypography.bodyLg}>
                Body large — supporting hero and section copy.
              </p>
              <p className={designTypography.body}>
                Body default — card descriptions and footer text.
              </p>
              <p className={designTypography.caption}>Overline caption</p>
            </div>
          </StyleguideSection>

          <StyleguideSection
            id="spacing"
            title="Spacing & layout"
            description="Container and elevation tokens.">
            <dl className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg border border-border p-4">
                <dt className="text-sm font-medium">Container</dt>
                <dd className="text-muted-foreground">{designLayout.container}</dd>
              </div>
              <div className="rounded-lg border border-border p-4">
                <dt className="text-sm font-medium">Container wide</dt>
                <dd className="text-muted-foreground">{designLayout.containerWide}</dd>
              </div>
              <div className="rounded-lg border border-border p-4">
                <dt className="text-sm font-medium">Card radius</dt>
                <dd className="text-muted-foreground">{designRadii.card}</dd>
              </div>
              <div className="rounded-lg border border-border p-4">
                <dt className="text-sm font-medium">Card shadow</dt>
                <dd className="text-muted-foreground">{designShadows.card}</dd>
              </div>
            </dl>
          </StyleguideSection>

          <StyleguideSection id="buttons" title="Buttons">
            <div className="space-y-6">
              {buttonVariantsList.map(variant => (
                <StyleguidePreviewBox key={variant} label={variant}>
                  <div className="flex flex-wrap gap-3">
                    <Button variant={variant} size="default">
                      Default
                    </Button>
                    <Button variant={variant} size="lg">
                      Large
                    </Button>
                    <Button variant={variant} size="xl">
                      Extra large
                    </Button>
                  </div>
                </StyleguidePreviewBox>
              ))}
            </div>
          </StyleguideSection>

          <StyleguideSection
            id="forms"
            title="Forms"
            description="Search bar with labeled selects.">
            <SearchBar options={styleguideSearchOptions} action="/estates" />
          </StyleguideSection>

          <StyleguideSection id="badges" title="Badges">
            <div className="flex flex-wrap gap-3">
              <OverlineBadge>Quality Housing Solutions</OverlineBadge>
              <Badge variant="status">For Sale</Badge>
              <Badge variant="secondary">New</Badge>
              <Badge variant="muted">Featured</Badge>
            </div>
          </StyleguideSection>

          <StyleguideSection id="cards" title="Cards">
            <div className="space-y-8">
              <StyleguidePreviewBox label="Estate card">
                <div className="grid gap-6 md:grid-cols-3">
                  {styleguideEstates.map(estate => (
                    <EstateCard key={estate.href} {...estate} />
                  ))}
                </div>
              </StyleguidePreviewBox>
              <StyleguidePreviewBox label="Service cards">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {styleguideServices.map(service => (
                    <ServiceCard key={service.title} {...service} />
                  ))}
                </div>
              </StyleguidePreviewBox>
              <StyleguidePreviewBox label="Process steps">
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                  {styleguideProcessSteps.map(step => (
                    <ProcessStep key={step.step} {...step} />
                  ))}
                </div>
              </StyleguidePreviewBox>
              <StyleguidePreviewBox label="Property type cards">
                <div className="grid gap-4 sm:grid-cols-2">
                  {styleguidePropertyTypes.map(type => (
                    <PropertyTypeCard key={type.title} {...type} />
                  ))}
                </div>
              </StyleguidePreviewBox>
            </div>
          </StyleguideSection>

          <StyleguideSection id="navigation" title="Navigation">
            <div className="space-y-8">
              <StyleguidePreviewBox label="Site header">
                <SiteHeader navigation={primaryNavigation} />
              </StyleguidePreviewBox>
              <StyleguidePreviewBox label="Site footer">
                <SiteFooter />
              </StyleguidePreviewBox>
            </div>
          </StyleguideSection>

          <StyleguideSection id="sections" title="Section patterns">
            <div className="space-y-8">
              <StyleguidePreviewBox label="Section header">
                <SectionHeader
                  title="NAFHCC Estates"
                  action={{ label: 'View all estates', href: '/estates' }}
                />
              </StyleguidePreviewBox>
              <StyleguidePreviewBox label="Stats bar">
                <StatsBar stats={styleguideStats} />
              </StyleguidePreviewBox>
              <StyleguidePreviewBox label="Hero + stats overlap" className="overflow-hidden p-0">
                <HeroSection
                  overline="Experience Quality Living"
                  title="Quality Housing Estates Across Nigeria"
                  description="Trusted residential estates, plots, and homes for the Nigerian Air Force community."
                  primaryAction={{ label: 'Explore Estates', href: '/estates' }}
                  secondaryAction={{ label: 'Contact Us', href: '/contact' }}
                  imageUrl="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1600&q=80"
                  imageAlt="Modern residential estate at dusk"
                  statsSlot={<StatsBar stats={styleguideStats} />}
                />
              </StyleguidePreviewBox>
              <StyleguidePreviewBox label="CTA band" className="overflow-hidden p-0">
                <CtaBand
                  title="Ready to find your home?"
                  primaryAction={{ label: 'Apply Now', href: '/contact' }}
                  secondaryAction={{ label: 'Contact Us', href: '/contact' }}
                />
              </StyleguidePreviewBox>
            </div>
          </StyleguideSection>

          <StyleguideSection id="accessibility" title="Accessibility">
            <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
              <li>
                All interactive elements use visible focus rings via focus-visible:ring utilities
              </li>
              <li>Search form uses fieldset, legend, and associated labels</li>
              <li>Cards use semantic headings and descriptive link text</li>
              <li>Reduced-motion preferences respected in globals.css</li>
            </ul>
          </StyleguideSection>
        </main>
      </div>
    </div>
  );
}
