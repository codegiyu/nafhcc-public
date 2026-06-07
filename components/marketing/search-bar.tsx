'use client';

import { FormEvent, useState } from 'react';
import { Search } from 'lucide-react';
import { InputWrapper } from '@/components/forms/input-wrapper';
import { RegularSelect } from '@/components/forms/regular-select';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export type SearchBarOptions = {
  locations: string[];
  types: string[];
  prices: string[];
};

type SearchBarProps = {
  options: SearchBarOptions;
  action?: string;
  className?: string;
};

export function SearchBar({ options, action = '/estates', className }: SearchBarProps) {
  const [location, setLocation] = useState(options.locations[0] ?? '');
  const [type, setType] = useState(options.types[0] ?? '');
  const [price, setPrice] = useState(options.prices[0] ?? '');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const params = new URLSearchParams();

    if (location && !location.startsWith('All')) {
      params.set('location', location);
    }

    if (type && !type.startsWith('All')) {
      params.set('type', type);
    }

    if (price && price !== 'Any Price') {
      params.set('price', price);
    }

    const query = params.toString();
    window.location.href = query ? `${action}?${query}` : action;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        'flex flex-col gap-4 rounded-xl border border-border bg-card p-4 shadow-card lg:flex-row lg:items-end',
        className
      )}>
      <fieldset className="grid flex-1 gap-4 sm:grid-cols-3">
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
      <InputWrapper label="Search" htmlFor="search-submit" hideLabel>
        <Button id="search-submit" type="submit" size="lg" className="h-11 w-full lg:w-auto">
          <Search aria-hidden />
          Search Properties
        </Button>
      </InputWrapper>
    </form>
  );
}
