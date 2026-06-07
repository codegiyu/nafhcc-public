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
  icon: 'home' | 'building' | 'layers';
};

export type HomepageContent = {
  hero: {
    overline: string;
    title: string;
    description: string;
    primaryAction: { label: string; href: string };
    secondaryAction: { label: string; href: string };
    imageUrl: string;
    imageAlt: string;
  };
  stats: HomepageStat[];
  search: {
    locations: string[];
    types: string[];
    prices: string[];
  };
  estates: {
    title: string;
    action: { label: string; href: string };
    items: HomepageEstate[];
  };
  services: {
    title: string;
    description: string;
    items: HomepageService[];
  };
  process: {
    title: string;
    description: string;
    items: HomepageProcessStep[];
    cta: { label: string; href: string };
  };
  propertyTypes: {
    title: string;
    items: HomepagePropertyType[];
  };
  cta: {
    title: string;
    primaryAction: { label: string; href: string };
    secondaryAction: { label: string; href: string };
  };
};

const homepageContent: HomepageContent = {
  hero: {
    overline: 'Experience Quality Living',
    title: 'Quality Housing Estates Across Nigeria',
    description:
      'NAFHCC delivers trusted residential estates, plots, and homes for the Nigerian Air Force community across Abuja and Nigeria.',
    primaryAction: { label: 'Explore Estates', href: '/estates' },
    secondaryAction: { label: 'Contact Us', href: '/contact' },
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
  estates: {
    title: 'NAFHCC Estates',
    action: { label: 'View all estates', href: '/estates' },
    items: [
      {
        title: 'NAF Valley Estate, Asokoro',
        location: 'Asokoro, Abuja',
        href: '/estates/naf-valley-estate-asokoro',
        imageUrl: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80',
        imageAlt: 'NAF Valley Estate Asokoro residential development',
        badge: 'For Sale',
      },
      {
        title: 'NAF Harmony Estate',
        location: 'Port Harcourt, Rivers',
        href: '/estates/naf-harmony-estate-portharcourt',
        imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
        imageAlt: 'NAF Harmony Estate housing development',
        badge: 'New',
      },
      {
        title: 'NAF Unity Estate, Kuje',
        location: 'Kuje, Abuja',
        href: '/estates/naf-unity-estate-kuje',
        imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
        imageAlt: 'NAF Unity Estate Kuje residential area',
        badge: 'For Sale',
      },
    ],
  },
  services: {
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
    cta: { label: 'Get Started Now', href: '/contact' },
  },
  propertyTypes: {
    title: 'A home for every family',
    items: [
      {
        title: '3 Bedroom Terrace Duplex',
        subtitle: 'Complete units available',
        icon: 'home',
      },
      {
        title: '2 Bedroom Semi-Detached Bungalow',
        subtitle: 'Family-friendly layouts',
        icon: 'building',
      },
      {
        title: '4 Bedroom Terrace Duplex',
        subtitle: 'Premium finishes',
        icon: 'layers',
      },
      {
        title: 'Residential Plots',
        subtitle: 'Build your dream home',
        icon: 'home',
      },
    ],
  },
  cta: {
    title: 'Ready to find your home?',
    primaryAction: { label: 'Apply Now', href: '/contact' },
    secondaryAction: { label: 'Contact Us', href: '/contact' },
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
