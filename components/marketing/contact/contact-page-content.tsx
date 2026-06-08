import { Mail, MapPin, Phone, type LucideIcon } from 'lucide-react';
import { FadeInUp } from '@/components/motion/fade-in-up';
import { StaggerInView, StaggerItem } from '@/components/motion/stagger-in-view';
import { ContactForm } from '@/components/marketing/contact/contact-form';
import { ContactInfoCard } from '@/components/marketing/contact/contact-info-card';
import { HeroSection } from '@/components/marketing/hero-section';
import { SectionHeader } from '@/components/marketing/overline-badge';
import { SiteSection } from '@/components/layout/site-section';
import { getContactPageContent, type ContactPageContent } from '@/lib/content/contact';
import { cn } from '@/lib/utils';

type QuickContact = ContactPageContent['formSection']['quickContacts'][number];

const quickContactIconMap: Record<QuickContact['icon'], LucideIcon> = {
  phone: Phone,
  mail: Mail,
  'map-pin': MapPin,
};

function QuickContactItem({ contact }: { contact: QuickContact }) {
  const Icon = quickContactIconMap[contact.icon];

  const content = (
    <>
      <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
        <Icon className="size-4" aria-hidden />
      </span>
      <span className="text-sm leading-relaxed text-foreground">{contact.label}</span>
    </>
  );

  return (
    <li>
      {contact.href ? (
        <a href={contact.href} className="flex items-center gap-3 hover:text-primary">
          {content}
        </a>
      ) : (
        <div className="flex items-center gap-3">{content}</div>
      )}
    </li>
  );
}

function QuickContactList({ contacts }: { contacts: QuickContact[] }) {
  return (
    <ul className="space-y-4">
      {contacts.map(contact => (
        <QuickContactItem key={contact.label} contact={contact} />
      ))}
    </ul>
  );
}

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
          <StaggerInView className="grid items-stretch gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {content.infoCards.map(card => (
              <StaggerItem key={card.title} className="h-full">
                <ContactInfoCard {...card} />
              </StaggerItem>
            ))}
          </StaggerInView>
        </div>
      </SiteSection>

      <SiteSection className="bg-background py-16 md:py-24">
        <div className="mx-auto grid max-w-container-wide gap-12 px-6 lg:grid-cols-[2fr_3fr] lg:gap-16">
          <FadeInUp className="space-y-8">
            <SectionHeader
              overline={content.formSection.overline}
              title={content.formSection.title}
              description={content.formSection.description}
            />
            <QuickContactList contacts={content.formSection.quickContacts} />
          </FadeInUp>

          <FadeInUp
            className={cn('rounded-xl border border-border bg-card p-6 shadow-card md:p-8')}>
            <ContactForm subjectOptions={content.subjectOptions} />
          </FadeInUp>
        </div>
      </SiteSection>
    </>
  );
}
