import { Mail, MapPin, Phone } from 'lucide-react';
import { ContactForm } from '@/components/marketing/contact/contact-form';
import { ContactInfoCard } from '@/components/marketing/contact/contact-info-card';
import { CtaBand } from '@/components/marketing/cta-band';
import { HeroSection } from '@/components/marketing/hero-section';
import { SectionHeader } from '@/components/marketing/overline-badge';
import { SiteSection } from '@/components/layout/site-section';
import { getContactPageContent } from '@/lib/content/contact';
import { cn } from '@/lib/utils';

const quickContactIconMap = {
  phone: Phone,
  mail: Mail,
  'map-pin': MapPin,
} as const;

export function ContactPageContent() {
  const content = getContactPageContent();

  return (
    <>
      <HeroSection
        overline={content.hero.overline}
        title={content.hero.title}
        description={content.hero.description}
        imageUrl={content.hero.imageUrl}
        imageAlt={content.hero.imageAlt}
        size="compact"
        align="center"
      />

      <SiteSection className="bg-section-muted py-16 md:py-20">
        <div className="mx-auto max-w-container-wide px-6">
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {content.infoCards.map(card => (
              <ContactInfoCard key={card.title} {...card} />
            ))}
          </div>
        </div>
      </SiteSection>

      <SiteSection className="bg-background py-16 md:py-24">
        <div className="mx-auto grid max-w-container-wide gap-12 px-6 lg:grid-cols-[2fr_3fr] lg:gap-16">
          <div className="space-y-8">
            <SectionHeader
              overline={content.formSection.overline}
              title={content.formSection.title}
              description={content.formSection.description}
            />
            <ul className="space-y-4">
              {content.formSection.quickContacts.map(contact => {
                const Icon = quickContactIconMap[contact.icon];
                const contentNode = (
                  <>
                    <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="size-4" aria-hidden />
                    </span>
                    <span className="text-sm leading-relaxed text-foreground">{contact.label}</span>
                  </>
                );

                return (
                  <li key={contact.label}>
                    {contact.href ? (
                      <a href={contact.href} className="flex items-start gap-3 hover:text-primary">
                        {contentNode}
                      </a>
                    ) : (
                      <div className="flex items-start gap-3">{contentNode}</div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          <div className={cn('rounded-xl border border-border bg-card p-6 shadow-card md:p-8')}>
            <ContactForm subjectOptions={content.subjectOptions} />
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
