'use client';

import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search } from 'lucide-react';
import { InputWrapper } from '@/components/forms/input-wrapper';
import { RegularSelect } from '@/components/forms/regular-select';
import { Button } from '@/components/ui/button';
import { buildSearchQuery } from '@/lib/search/search-params';
import { cn } from '@/lib/utils';

export type SearchBarOptions = {
  locations: string[];
  types: string[];
  prices: string[];
};

export type SearchBarDefaultValues = {
  location?: string;
  type?: string;
  price?: string;
};

type SearchBarProps = {
  options: SearchBarOptions;
  action?: string;
  defaultValues?: SearchBarDefaultValues;
  className?: string;
};

export const SEARCH_SUBMIT_DELAY_MS = 1500;

function resolveSelectValue(options: string[], value: string | undefined): string {
  if (value && options.includes(value)) {
    return value;
  }

  return options[0] ?? '';
}

export function buildSearchBarQuery(values: SearchBarDefaultValues): string {
  return buildSearchQuery({
    location: values.location && !values.location.startsWith('All') ? values.location : undefined,
    type: values.type && !values.type.startsWith('All') ? values.type : undefined,
    price: values.price && values.price !== 'Any Price' ? values.price : undefined,
  });
}

export function SearchBar({
  options,
  action = '/search',
  defaultValues,
  className,
}: SearchBarProps) {
  const router = useRouter();
  const [location, setLocation] = useState(() =>
    resolveSelectValue(options.locations, defaultValues?.location)
  );
  const [type, setType] = useState(() => resolveSelectValue(options.types, defaultValues?.type));
  const [price, setPrice] = useState(() =>
    resolveSelectValue(options.prices, defaultValues?.price)
  );
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    setIsSubmitting(true);

    await new Promise(resolve => {
      window.setTimeout(resolve, SEARCH_SUBMIT_DELAY_MS);
    });

    const query = buildSearchBarQuery({ location, type, price });
    router.push(query ? `${action}?${query}` : action);
    setIsSubmitting(false);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        'flex flex-col gap-4 rounded-xl border border-border bg-card p-4 shadow-card lg:flex-row',
        className
      )}>
      <fieldset className="grid flex-1 gap-4 sm:grid-cols-3" disabled={isSubmitting}>
        <legend className="sr-only">Property search filters</legend>
        <RegularSelect
          id="search-location"
          label="Location"
          value={location}
          onValueChange={setLocation}
          options={options.locations}
          size="lg"
        />
        <RegularSelect
          id="search-type"
          label="Property type"
          value={type}
          onValueChange={setType}
          options={options.types}
          size="lg"
        />
        <RegularSelect
          id="search-price"
          label="Price range"
          value={price}
          onValueChange={setPrice}
          options={options.prices}
          size="lg"
        />
      </fieldset>
      <InputWrapper>
        <Button
          id="search-submit"
          type="submit"
          size="lg"
          className="h-11 w-full lg:w-auto"
          aria-busy={isSubmitting}
          disabled={isSubmitting}>
          <Search aria-hidden />
          {isSubmitting ? 'Searching…' : 'Search Properties'}
        </Button>
      </InputWrapper>
    </form>
  );
}
