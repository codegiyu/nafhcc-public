import { cloneElement, isValidElement, ReactNode, useId } from 'react';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';

export type InputWrapperProps = {
  label: ReactNode;
  htmlFor: string;
  fieldError?: string;
  helpText?: string;
  required?: boolean;
  hideLabel?: boolean;
  className?: string;
  children: ReactNode;
};

export function InputWrapper({
  label,
  htmlFor,
  fieldError,
  helpText,
  required,
  hideLabel,
  className,
  children,
}: InputWrapperProps) {
  const hintId = useId();
  const errorId = useId();
  const describedBy = fieldError ? errorId : helpText ? hintId : undefined;

  const control = isValidElement<{ 'aria-describedby'?: string; 'aria-invalid'?: boolean }>(
    children
  )
    ? cloneElement(children, {
        'aria-invalid': fieldError ? true : undefined,
        'aria-describedby': describedBy,
      })
    : children;

  return (
    <div className={cn('space-y-2', className)}>
      <Label
        htmlFor={htmlFor}
        className={cn(
          hideLabel && 'sr-only',
          required && "after:ml-0.5 after:text-destructive after:content-['*']"
        )}>
        {label}
      </Label>
      {control}
      {fieldError ? (
        <p id={errorId} role="alert" className="text-sm text-destructive">
          {fieldError}
        </p>
      ) : helpText ? (
        <p id={hintId} className="text-sm text-muted-foreground">
          {helpText}
        </p>
      ) : null}
    </div>
  );
}
