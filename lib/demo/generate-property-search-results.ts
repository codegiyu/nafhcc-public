import {
  getAllPropertyTypes,
  getPropertyTypeImagePool,
  resolvePropertyType,
  type PropertySearchType,
} from '@/lib/demo/property-type-images';
import type { SearchFilters } from '@/lib/search/search-params';

export type PropertySearchResult = {
  id: string;
  title: string;
  location: string;
  priceLabel: string;
  priceAmount: number;
  imageUrl: string;
  imageAlt: string;
  propertyType: PropertySearchType;
};

const DEFAULT_LOCATIONS = ['Abuja', 'Enugu', 'Port Harcourt', 'Kaduna'];
const RESULT_COUNT = 18;

const TYPE_LABELS: Record<PropertySearchType, string[]> = {
  Plots: ['Residential Plot', 'Serviced Plot', 'Corner Plot'],
  Houses: ['2 Bedroom Flat', '3 Bedroom Flat', 'Semi-Detached House'],
  Duplex: ['3 Bedroom Terrace Duplex', '4 Bedroom Terrace Duplex', '5 Bedroom Duplex'],
  Bungalow: ['2 Bedroom Bungalow', '3 Bedroom Bungalow', 'Semi-Detached Bungalow'],
};

type PriceRange = {
  min: number;
  max: number;
};

function hashSeed(input: string): number {
  let hash = 2166136261;

  for (let index = 0; index < input.length; index += 1) {
    hash ^= input.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }

  return hash >>> 0;
}

function createRandom(seed: number) {
  let state = seed;

  return () => {
    state = (state + 0x6d2b79f5) >>> 0;
    let value = Math.imul(state ^ (state >>> 15), state | 1);
    value ^= value + Math.imul(value ^ (value >>> 7), value | 61);

    return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
  };
}

function pickRandom<T>(items: T[], random: () => number): T {
  return items[Math.floor(random() * items.length)]!;
}

function resolvePriceRange(price?: string): PriceRange {
  switch (price) {
    case 'Under ₦10M':
      return { min: 4_500_000, max: 9_900_000 };
    case '₦10M – ₦30M':
      return { min: 10_000_000, max: 30_000_000 };
    case '₦30M+':
      return { min: 30_000_000, max: 85_000_000 };
    default:
      return { min: 5_000_000, max: 45_000_000 };
  }
}

export function roundToTenThousand(amount: number): number {
  return Math.round(amount / 10_000) * 10_000;
}

function clampPrice(amount: number, range: PriceRange): number {
  return Math.min(Math.max(amount, range.min), range.max);
}

function generatePriceInRange(range: PriceRange, random: () => number): number {
  const raw = Math.floor(random() * (range.max - range.min + 1)) + range.min;

  return clampPrice(roundToTenThousand(raw), range);
}

function formatNaira(amount: number): string {
  return `₦${amount.toLocaleString('en-NG')}`;
}

function resolveLocation(location?: string, random?: () => number): string {
  if (location) {
    return location;
  }

  return pickRandom(DEFAULT_LOCATIONS, random ?? Math.random);
}

function resolveType(type?: string, random?: () => number): PropertySearchType {
  if (type && getAllPropertyTypes().includes(type as PropertySearchType)) {
    return type as PropertySearchType;
  }

  return pickRandom(getAllPropertyTypes(), random ?? Math.random);
}

export function generatePropertySearchResults(filters: SearchFilters): PropertySearchResult[] {
  const seedKey = [filters.location ?? '', filters.type ?? '', filters.price ?? ''].join('|');
  const random = createRandom(hashSeed(seedKey));
  const priceRange = resolvePriceRange(filters.price);
  const sharedType = filters.type ? resolvePropertyType(filters.type) : undefined;
  const imagePool = getPropertyTypeImagePool(sharedType);

  return Array.from({ length: RESULT_COUNT }, (_, index) => {
    const propertyType = sharedType ?? resolveType(undefined, random);
    const location = resolveLocation(filters.location, random);
    const titleBase = pickRandom(TYPE_LABELS[propertyType], random);
    const priceAmount = generatePriceInRange(priceRange, random);
    const imageUrl = pickRandom(imagePool, random);

    return {
      id: `${seedKey}-${index + 1}`,
      title: `${titleBase} — ${location} (Unit ${index + 1})`,
      location,
      priceLabel: formatNaira(priceAmount),
      priceAmount,
      imageUrl,
      imageAlt: `${titleBase} in ${location}`,
      propertyType,
    };
  });
}
