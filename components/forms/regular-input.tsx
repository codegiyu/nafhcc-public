import { InputWrapper } from '@/components/forms/input-wrapper';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

type RegularInputProps = Omit<React.ComponentProps<'input'>, 'id' | 'size'> & {
  id: string;
  label: string;
  errorMessage?: string;
  hint?: string;
  required?: boolean;
  size?: 'default' | 'lg';
};

export function RegularInput({
  id,
  label,
  errorMessage,
  hint,
  required,
  size = 'default',
  className,
  ...props
}: RegularInputProps) {
  return (
    <InputWrapper
      label={label}
      htmlFor={id}
      fieldError={errorMessage}
      helpText={hint}
      required={required}>
      <Input id={id} className={cn(size === 'lg' && 'h-11', className)} {...props} />
    </InputWrapper>
  );
}
