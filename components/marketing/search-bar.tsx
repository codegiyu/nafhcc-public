'use client';

import { FormEvent, useState } from 'react';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
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
        <div className="space-y-2">
          <Label htmlFor="search-location">Location</Label>
          <Select value={location} onValueChange={value => value && setLocation(value)}>
            <SelectTrigger id="search-location" size="lg" className="w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {options.locations.map(item => (
                <SelectItem key={item} value={item}>
                  {item}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="search-type">Property type</Label>
          <Select value={type} onValueChange={value => value && setType(value)}>
            <SelectTrigger id="search-type" size="lg" className="w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {options.types.map(item => (
                <SelectItem key={item} value={item}>
                  {item}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="search-price">Price range</Label>
          <Select value={price} onValueChange={value => value && setPrice(value)}>
            <SelectTrigger id="search-price" size="lg" className="w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {options.prices.map(item => (
                <SelectItem key={item} value={item}>
                  {item}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </fieldset>
      <Button type="submit" size="lg" className="w-full lg:w-auto">
        <Search aria-hidden />
        Search Properties
      </Button>
    </form>
  );
}
