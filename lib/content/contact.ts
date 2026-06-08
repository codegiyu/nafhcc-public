import { getSiteImages } from '@/lib/seo/site-images';

export const siteContact = {
  phone: '09087069086',
  email: 'info@nafhcc.com',
  address: '156 Aminu Kano Crescent Wuse II, Abuja',
} as const;

export type ContactInfoCardIcon = 'map-pin' | 'phone' | 'mail' | 'clock';

export type ContactInfoCard = {
  icon: ContactInfoCardIcon;
  title: string;
  lines: string[];
};

export type ContactPageContent = {
  hero: {
    overline: string;
    title: string;
    description: string;
    imageUrl: string;
    imageAlt: string;
  };
  infoCards: ContactInfoCard[];
  formSection: {
    overline: string;
    title: string;
    description: string;
    quickContacts: { icon: 'phone' | 'mail' | 'map-pin'; label: string; href?: string }[];
  };
  subjectOptions: string[];
  cta: {
    title: string;
    description: string;
    primaryAction: { label: string; href: string; showArrow?: boolean };
    secondaryAction: { label: string; href: string; showArrow?: boolean };
  };
};

const contactPageContent: ContactPageContent = {
  hero: {
    overline: 'CONTACT US',
    title: 'Get in touch with NAFHCC',
    description:
      'Reach our team for housing applications, estate information, partnerships, and general enquiries.',
    imageUrl: getSiteImages().hero.url,
    imageAlt: getSiteImages().hero.alt,
  },
  infoCards: [
    {
      icon: 'map-pin',
      title: 'Visit Our Office',
      lines: [siteContact.address, 'Nigeria'],
    },
    {
      icon: 'phone',
      title: 'Call Us',
      lines: [siteContact.phone, 'Mon – Fri, 8:00 AM – 5:00 PM'],
    },
    {
      icon: 'mail',
      title: 'Email Us',
      lines: [siteContact.email],
    },
    {
      icon: 'clock',
      title: 'Office Hours',
      lines: ['Monday – Friday: 8AM – 5PM', 'Saturday – Sunday: Closed'],
    },
  ],
  formSection: {
    overline: 'SEND A MESSAGE',
    title: "Let's start a conversation",
    description:
      "Whether you're applying for housing, requesting estate information, or partnering with NAFHCC, our team is ready to assist. Fill out the form and we'll respond within one business day.",
    quickContacts: [
      { icon: 'phone', label: siteContact.phone, href: `tel:${siteContact.phone}` },
      { icon: 'mail', label: siteContact.email, href: `mailto:${siteContact.email}` },
      { icon: 'map-pin', label: siteContact.address },
    ],
  },
  subjectOptions: [
    'Housing Application Inquiry',
    'Estate Information Request',
    'Partnership Inquiry',
    'General Inquiry',
  ],
  cta: {
    title: 'Ready to find your home?',
    description: 'Contact NAFHCC or apply for housing in any of our estates across Nigeria.',
    primaryAction: { label: 'Apply Now', href: '/contact', showArrow: true },
    secondaryAction: { label: 'Contact Us', href: '/contact', showArrow: false },
  },
};

export function getContactPageContent(): ContactPageContent {
  return contactPageContent;
}

export function validateContactPageContent(content: ContactPageContent): string[] {
  const errors: string[] = [];

  if (!content.hero.title.trim()) {
    errors.push('hero.title is required');
  }

  if (content.infoCards.length < 4) {
    errors.push('infoCards must include at least 4 cards');
  }

  if (content.subjectOptions.length === 0) {
    errors.push('subjectOptions must not be empty');
  }

  if (!content.formSection.title.trim()) {
    errors.push('formSection.title is required');
  }

  return errors;
}
