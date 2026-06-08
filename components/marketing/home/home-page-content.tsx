import { ButtonLinkWithArrow } from '@/components/ui/button-link-with-arrow';
import { CtaBand } from '@/components/marketing/cta-band';
import { EstateCard } from '@/components/marketing/cards/estate-card';
import { ProcessStep } from '@/components/marketing/cards/process-step';
import { PropertyTypeCard } from '@/components/marketing/cards/property-type-card';
import { ServiceCard } from '@/components/marketing/cards/service-card';
import { AboutSection } from '@/components/marketing/home/about-section';
import { HeroSection } from '@/components/marketing/hero-section';
import { SectionHeader } from '@/components/marketing/overline-badge';
import { SearchBar } from '@/components/marketing/search-bar';
import { StatsBar } from '@/components/marketing/stats-bar';
import { SiteSection } from '@/components/layout/site-section';
import { getHomepageContent } from '@/lib/content/homepage';

export function HomePageContent() {
  const content = getHomepageContent();

  return (
    <>
      <HeroSection
        overline={content.hero.overline}
        title={content.hero.title}
        description={content.hero.description}
        primaryAction={content.hero.primaryAction}
        secondaryAction={content.hero.secondaryAction}
        imageUrl={content.hero.imageUrl}
        imageAlt={content.hero.imageAlt}
        statsSlot={<StatsBar stats={content.stats} />}
      />

      <SiteSection className="bg-background pb-16 pt-4">
        <div className="mx-auto max-w-container-wide px-6">
          <SearchBar options={content.search} action="/search" />
        </div>
      </SiteSection>

      <AboutSection content={content.about} stats={content.stats} />

      <SiteSection id="estates" className="bg-background py-20 md:py-24">
        <div className="mx-auto max-w-container-wide space-y-10 px-6">
          <SectionHeader
            overline={content.estates.overline}
            title={content.estates.title}
            action={content.estates.action}
          />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {content.estates.items.map(estate => (
              <EstateCard key={estate.href} {...estate} />
            ))}
          </div>
        </div>
      </SiteSection>

      <SiteSection id="services" className="bg-section-muted py-20 md:py-24">
        <div className="mx-auto max-w-container-wide space-y-10 px-6">
          <SectionHeader
            overline={content.services.overline}
            title={content.services.title}
            description={content.services.description}
            align="center"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {content.services.items.map(service => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </SiteSection>

      <SiteSection id="process" className="bg-background py-20 md:py-24">
        <div className="mx-auto max-w-container-wide space-y-10 px-6">
          <SectionHeader
            overline={content.process.overline}
            title={content.process.title}
            description={content.process.description}
            align="center"
          />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {content.process.items.map(step => (
              <ProcessStep key={step.step} {...step} />
            ))}
          </div>
          <div className="flex justify-center pt-4">
            <ButtonLinkWithArrow
              href={content.process.cta.href}
              size="lg"
              showArrow={content.process.cta.showArrow ?? true}>
              {content.process.cta.label}
            </ButtonLinkWithArrow>
          </div>
        </div>
      </SiteSection>

      <SiteSection className="bg-section-muted py-20 md:py-24">
        <div className="mx-auto max-w-container-wide space-y-10 px-6">
          <SectionHeader
            overline={content.propertyTypes.overline}
            title={content.propertyTypes.title}
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {content.propertyTypes.items.map(type => (
              <PropertyTypeCard key={type.title} {...type} />
            ))}
          </div>
        </div>
      </SiteSection>

      <CtaBand
        title={content.cta.title}
        description={content.cta.description}
        primaryAction={content.cta.primaryAction}
        secondaryAction={content.cta.secondaryAction}
      />
    </>
  );
}
