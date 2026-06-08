import { getSiteImages } from '@/lib/seo/site-images';

export type HomepageStat = {
  value: string;
  label: string;
};

export type HomepageEstate = {
  title: string;
  location: string;
  href: string;
  imageUrl: string;
  imageAlt: string;
  badge?: string;
};

export type HomepageService = {
  title: string;
  description: string;
  icon: 'building' | 'home' | 'key' | 'shield';
};

export type HomepageProcessStep = {
  step: number;
  title: string;
  description: string;
};

export type HomepagePropertyType = {
  title: string;
  subtitle: string;
  imageUrl: string;
  imageAlt: string;
};

export type HomepageAction = {
  label: string;
  href: string;
  showArrow?: boolean;
};

export type HomepageSection = {
  overline?: string;
  title: string;
  description?: string;
};

export type HomepageAboutHighlight = {
  icon: 'shield' | 'award' | 'users';
  label: string;
};

export type HomepageContent = {
  hero: {
    overline: string;
    title: string;
    description: string;
    primaryAction: HomepageAction;
    secondaryAction: HomepageAction;
    imageUrl: string;
    imageAlt: string;
  };
  stats: HomepageStat[];
  search: {
    locations: string[];
    types: string[];
    prices: string[];
  };
  about: HomepageSection & {
    paragraphs: [string, string];
    imageUrl: string;
    imageAlt: string;
    highlights: HomepageAboutHighlight[];
    primaryAction: HomepageAction;
    secondaryAction: HomepageAction;
  };
  estates: HomepageSection & {
    action: HomepageAction;
    items: HomepageEstate[];
  };
  services: HomepageSection & {
    items: HomepageService[];
  };
  process: HomepageSection & {
    items: HomepageProcessStep[];
    cta: HomepageAction;
  };
  propertyTypes: HomepageSection & {
    items: HomepagePropertyType[];
  };
  cta: HomepageSection & {
    description: string;
    primaryAction: HomepageAction;
    secondaryAction: HomepageAction;
  };
};

const homepageContent: HomepageContent = {
  hero: {
    overline: 'Experience Quality Living',
    title: 'Quality Housing Estates Across Nigeria',
    description:
      'NAFHCC delivers trusted residential estates, plots, and homes for the Nigerian Air Force community across Abuja and Nigeria.',
    primaryAction: { label: 'Explore Estates', href: '/estates', showArrow: true },
    secondaryAction: { label: 'Contact Us', href: '/contact', showArrow: false },
    imageUrl: getSiteImages().hero.url,
    imageAlt: getSiteImages().hero.alt,
  },
  stats: [
    { value: '10+', label: 'Years of Experience' },
    { value: '5,000+', label: 'Houses Delivered' },
    { value: '15+', label: 'Estates Nationwide' },
    { value: '100%', label: 'NAF Community Focus' },
  ],
  search: {
    locations: ['All Locations', 'Abuja', 'Enugu', 'Port Harcourt', 'Kaduna'],
    types: ['All Types', 'Plots', 'Houses', 'Duplex', 'Bungalow'],
    prices: ['Any Price', 'Under ₦10M', '₦10M – ₦30M', '₦30M+'],
  },
  about: {
    overline: 'ABOUT NAFHCC',
    title: 'Building homes and communities for the Air Force family',
    paragraphs: [
      'Nigerian Air Force Housing and Construction Company Ltd (NAFHCC) was established to provide affordable, quality housing for officers, airmen and civilian staff of the Nigerian Air Force, and their families. We plan, develop and deliver complete residential estates — from land acquisition and master planning, to construction, allocation and handover.',
      'Our estates across Abuja and beyond are designed with secure access, reliable infrastructure and a true sense of community in mind.',
    ],
    imageUrl: '/images/estate-valley.jpg',
    imageAlt: 'Aerial view of NAFHCC residential estate development',
    highlights: [
      { icon: 'shield', label: 'Trusted by NAF community' },
      { icon: 'award', label: 'Quality-led delivery' },
      { icon: 'users', label: 'Thousands of families housed' },
    ],
    primaryAction: { label: 'Explore our estates', href: '/#estates', showArrow: true },
    secondaryAction: { label: 'Get in touch', href: '/contact', showArrow: false },
  },
  estates: {
    overline: 'FEATURED ESTATES',
    title: 'NAFHCC Estates',
    action: { label: 'View all estates', href: '/estates', showArrow: true },
    items: [
      {
        title: 'NAF Valley Estate, Asokoro',
        location: 'Asokoro, Abuja',
        href: '/estates/naf-valley-estate-asokoro',
        imageUrl: '/images/estate-valley.jpg',
        imageAlt: 'NAF Valley Estate Asokoro residential development',
        badge: 'For Sale',
      },
      {
        title: 'NAF Harmony Estate',
        location: 'Port Harcourt, Rivers',
        href: '/estates/naf-harmony-estate-portharcourt',
        imageUrl: '/images/estate-diamond.jpg',
        imageAlt: 'NAF Harmony Estate housing development',
        badge: 'New',
      },
      {
        title: 'NAF Unity Estate, Kuje',
        location: 'Kuje, Abuja',
        href: '/estates/naf-unity-estate-kuje',
        imageUrl: '/images/estate-unity.jpg',
        imageAlt: 'NAF Unity Estate Kuje residential area',
        badge: 'For Sale',
      },
    ],
  },
  services: {
    overline: 'WHAT WE DO',
    title: 'Our Services',
    description:
      'End-to-end housing solutions for the Nigerian Air Force community — from estate development to home ownership.',
    items: [
      {
        title: 'Estate Development',
        description: 'Master-planned residential communities with modern infrastructure.',
        icon: 'building',
      },
      {
        title: 'Property Sales',
        description: 'Plots and completed homes for Nigerian Air Force personnel and affiliates.',
        icon: 'home',
      },
      {
        title: 'Home Ownership',
        description: 'Flexible payment plans designed for accessible home ownership.',
        icon: 'key',
      },
      {
        title: 'Quality Assurance',
        description: 'Construction standards backed by decades of trusted delivery.',
        icon: 'shield',
      },
    ],
  },
  process: {
    overline: 'OUR PROCESS',
    title: 'Your Path to Home Ownership',
    description: 'A simple four-step journey from browsing estates to receiving your keys.',
    items: [
      {
        step: 1,
        title: 'Browse Estates',
        description: 'Explore available estates and property types across Nigeria.',
      },
      {
        step: 2,
        title: 'Submit Application',
        description: 'Apply for your preferred plot or home through our streamlined process.',
      },
      {
        step: 3,
        title: 'Get Approved',
        description: 'Our team reviews your application and guides you through allocation.',
      },
      {
        step: 4,
        title: 'Move In',
        description: 'Complete payment and receive keys to your new home.',
      },
    ],
    cta: { label: 'Get Started Now', href: '/contact', showArrow: true },
  },
  propertyTypes: {
    overline: 'AVAILABLE PROPERTY TYPES',
    title: 'A home for every family',
    items: [
      {
        title: '3 Bedroom Terrace Duplex',
        subtitle: 'Complete units available',
        imageUrl: '/images/estate-valley.jpg',
        imageAlt: '3 bedroom terrace duplex at NAFHCC estate',
      },
      {
        title: '2 Bedroom Semi-Detached Bungalow',
        subtitle: 'Family-friendly layouts',
        imageUrl: '/images/estate-unity.jpg',
        imageAlt: '2 bedroom semi-detached bungalow',
      },
      {
        title: '4 Bedroom Terrace Duplex',
        subtitle: 'Premium finishes',
        imageUrl: '/images/estate-eagle.jpg',
        imageAlt: '4 bedroom terrace duplex',
      },
      {
        title: 'Residential Plots',
        subtitle: 'Build your dream home',
        imageUrl: '/images/estate-diamond.jpg',
        imageAlt: 'Residential plots for custom home building',
      },
    ],
  },
  cta: {
    title: 'Ready to find your home?',
    description: 'Contact NAFHCC or apply for housing in any of our estates across Nigeria.',
    primaryAction: { label: 'Apply Now', href: '/contact', showArrow: true },
    secondaryAction: { label: 'Contact Us', href: '/contact', showArrow: false },
  },
};

export function getHomepageContent(): HomepageContent {
  return homepageContent;
}

export function validateHomepageContent(content: HomepageContent): string[] {
  const errors: string[] = [];

  if (!content.hero.title.trim()) {
    errors.push('hero.title is required');
  }

  if (content.stats.length < 1) {
    errors.push('stats must include at least one item');
  }

  if (!content.about.title.trim()) {
    errors.push('about.title is required');
  }

  if (!content.about.imageUrl.trim()) {
    errors.push('about.imageUrl is required');
  }

  if (content.about.paragraphs.length !== 2) {
    errors.push('about.paragraphs must include exactly two entries');
  }

  if (content.about.highlights.length < 1) {
    errors.push('about.highlights must include at least one item');
  }

  if (content.estates.items.length < 1) {
    errors.push('estates.items must include at least one estate');
  }

  if (content.services.items.length < 1) {
    errors.push('services.items must include at least one service');
  }

  if (content.process.items.length < 1) {
    errors.push('process.items must include at least one step');
  }

  for (const estate of content.estates.items) {
    if (!estate.href.startsWith('/estates/')) {
      errors.push(`estate href must start with /estates/: ${estate.title}`);
    }
  }

  return errors;
}
