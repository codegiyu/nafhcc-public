const PROPERTY_TYPE_IMAGE_POOLS = {
  Plots: [
    '/images/property-types/plot-1.jpg',
    '/images/property-types/plot-2.jpg',
    '/images/property-types/plot-3.jpg',
  ],
  Houses: [
    '/images/property-types/flat-1.jpg',
    '/images/property-types/flat-2.jpg',
    '/images/property-types/flat-3.jpg',
  ],
  Duplex: [
    '/images/property-types/terrace-1.jpg',
    '/images/property-types/terrace-2.jpg',
    '/images/property-types/terrace-3.jpg',
  ],
  Bungalow: [
    '/images/property-types/bungalow-1.jpg',
    '/images/property-types/bungalow-2.jpg',
    '/images/property-types/bungalow-3.jpg',
  ],
} as const;

export type PropertySearchType = keyof typeof PROPERTY_TYPE_IMAGE_POOLS;

const ALL_PROPERTY_TYPES = Object.keys(PROPERTY_TYPE_IMAGE_POOLS) as PropertySearchType[];

export function getPropertyTypeImagePool(type?: string): string[] {
  if (type && type in PROPERTY_TYPE_IMAGE_POOLS) {
    return [...PROPERTY_TYPE_IMAGE_POOLS[type as PropertySearchType]];
  }

  return ALL_PROPERTY_TYPES.flatMap(propertyType => PROPERTY_TYPE_IMAGE_POOLS[propertyType]);
}

export function resolvePropertyType(type?: string): PropertySearchType {
  if (type && type in PROPERTY_TYPE_IMAGE_POOLS) {
    return type as PropertySearchType;
  }

  return ALL_PROPERTY_TYPES[0];
}

export function getAllPropertyTypes(): PropertySearchType[] {
  return [...ALL_PROPERTY_TYPES];
}
