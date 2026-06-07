export type StyleguideStat = {
  value: string;
  label: string;
};

export type StyleguideEstate = {
  title: string;
  location: string;
  href: string;
  imageUrl: string;
  imageAlt: string;
  badge?: string;
};

export type StyleguideService = {
  title: string;
  description: string;
  icon: 'building' | 'home' | 'key' | 'shield';
};

export type StyleguideProcessStep = {
  step: number;
  title: string;
  description: string;
};

export type StyleguidePropertyType = {
  title: string;
  subtitle: string;
  icon: 'home' | 'building' | 'layers';
};

export const styleguideStats: StyleguideStat[] = [
  { value: '10+', label: 'Years of Experience' },
  { value: '5,000+', label: 'Houses Delivered' },
  { value: '15+', label: 'Estates Nationwide' },
  { value: '100%', label: 'NAF Community Focus' },
];

export const styleguideEstates: StyleguideEstate[] = [
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
    href: '/estates/naf-harmony-estate',
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
];

export const styleguideServices: StyleguideService[] = [
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
];

export const styleguideProcessSteps: StyleguideProcessStep[] = [
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
];

export const styleguidePropertyTypes: StyleguidePropertyType[] = [
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
];

export const styleguideContact = {
  phone: '09087069086',
  email: 'info@nafhcc.com',
  address: '156 Aminu Kano Crescent Wuse II, Abuja',
};

export const styleguideSearchOptions = {
  locations: ['All Locations', 'Abuja', 'Enugu', 'Port Harcourt', 'Kaduna'],
  types: ['All Types', 'Plots', 'Houses', 'Duplex', 'Bungalow'],
  prices: ['Any Price', 'Under ₦10M', '₦10M – ₦30M', '₦30M+'],
};
