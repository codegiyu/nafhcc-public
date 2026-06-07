'use client';

import { InputWrapper } from '@/components/forms/input-wrapper';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

type SelectOption = string | { value: string; label: string };

type RegularSelectProps = {
  id: string;
  label: string;
  value: string;
  onValueChange: (value: string) => void;
  options: readonly SelectOption[];
  errorMessage?: string;
  hint?: string;
  required?: boolean;
  placeholder?: string;
  size?: 'default' | 'lg';
  disabled?: boolean;
  hideLabel?: boolean;
  className?: string;
};

function normalizeOption(option: SelectOption) {
  if (typeof option === 'string') {
    return { value: option, label: option };
  }

  return option;
}

export function RegularSelect({
  id,
  label,
  value,
  onValueChange,
  options,
  errorMessage,
  hint,
  required,
  placeholder,
  size = 'default',
  disabled,
  hideLabel,
  className,
}: RegularSelectProps) {
  return (
    <InputWrapper
      label={label}
      htmlFor={id}
      fieldError={errorMessage}
      helpText={hint}
      required={required}
      hideLabel={hideLabel}
      className={className}>
      <Select value={value} onValueChange={next => next && onValueChange(next)} disabled={disabled}>
        <SelectTrigger id={id} size={size} className="w-full">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map(option => {
            const normalized = normalizeOption(option);

            return (
              <SelectItem key={normalized.value} value={normalized.value}>
                {normalized.label}
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </InputWrapper>
  );
}
