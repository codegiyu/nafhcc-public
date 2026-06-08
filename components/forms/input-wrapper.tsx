import { cloneElement, isValidElement, ReactNode, useId } from 'react';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';

export type InputWrapperProps = {
  label?: ReactNode;
  htmlFor?: string;
  fieldError?: string;
  helpText?: string;
  required?: boolean;
  hideLabel?: boolean;
  className?: string;
  children: ReactNode;
};

function LabelSpacer() {
  return (
    <span className="block text-sm leading-none font-medium invisible select-none" aria-hidden>
      &#8203;
    </span>
  );
}

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
      {label !== undefined ? (
        <Label
          htmlFor={htmlFor}
          className={cn(
            hideLabel && 'sr-only',
            required && "after:ml-0.5 after:text-destructive after:content-['*']"
          )}>
          {label}
        </Label>
      ) : (
        <LabelSpacer />
      )}
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
