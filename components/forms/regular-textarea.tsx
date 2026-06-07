import { InputWrapper } from '@/components/forms/input-wrapper';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';

type RegularTextareaProps = Omit<React.ComponentProps<'textarea'>, 'id'> & {
  id: string;
  label: string;
  errorMessage?: string;
  hint?: string;
  required?: boolean;
};

export function RegularTextarea({
  id,
  label,
  errorMessage,
  hint,
  required,
  className,
  ...props
}: RegularTextareaProps) {
  return (
    <InputWrapper
      label={label}
      htmlFor={id}
      fieldError={errorMessage}
      helpText={hint}
      required={required}>
      <Textarea id={id} className={cn(className)} {...props} />
    </InputWrapper>
  );
}
