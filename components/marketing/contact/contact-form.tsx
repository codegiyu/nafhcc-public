'use client';

import { FormEvent, useState } from 'react';
import { Send } from 'lucide-react';
import { toast } from 'sonner';
import { RegularInput } from '@/components/forms/regular-input';
import { RegularSelect } from '@/components/forms/regular-select';
import { RegularTextarea } from '@/components/forms/regular-textarea';
import { Button } from '@/components/ui/button';
import { sanitizePhoneInput } from '@/lib/contact/phone';
import {
  CONTACT_SUBJECTS,
  getContactFieldError,
  isContactFormValid,
  type ContactFormInput,
} from '@/lib/contact/schema';
import { cn } from '@/lib/utils';

type ContactFormProps = {
  subjectOptions: readonly string[];
  className?: string;
};

type FormState = ContactFormInput;

const initialState = (subjectOptions: readonly string[]): FormState => ({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  subject: (subjectOptions[0] ?? CONTACT_SUBJECTS[3]) as ContactFormInput['subject'],
  message: '',
});

export function ContactForm({ subjectOptions, className }: ContactFormProps) {
  const [values, setValues] = useState<FormState>(() => initialState(subjectOptions));
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [formError, setFormError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const canSubmit = isContactFormValid(values);

  function setFieldError(field: keyof ContactFormInput, message?: string) {
    setFieldErrors(current => {
      const next = { ...current };

      if (message) {
        next[field] = message;
      } else {
        delete next[field];
      }

      return next;
    });
  }

  function validateFieldOnBlur(field: keyof ContactFormInput, nextValues: FormState = values) {
    const message = getContactFieldError(field, nextValues);
    setFieldError(field, message);
  }

  function updateField<K extends keyof FormState>(field: K, value: FormState[K]) {
    setValues(current => {
      const nextValues = { ...current, [field]: value };

      if (fieldErrors[field]) {
        const message = getContactFieldError(field, nextValues);
        setFieldError(field, message);
      }

      return nextValues;
    });
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormError(null);
    setFieldErrors({});
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      const json = await response.json();

      if (!response.ok) {
        if (json.error?.code === 'VALIDATION_ERROR' && json.error.details) {
          setFieldErrors(json.error.details);
          setFormError(json.error.message);
          return;
        }

        setFormError(json.error?.message ?? 'We could not send your message. Please try again.');
        return;
      }

      toast.success('Message sent. We will respond within one business day.');
      setValues(initialState(subjectOptions));
    } catch {
      setFormError('We could not send your message. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn('space-y-6', className)}
      noValidate
      aria-label="Contact form">
      <fieldset className="space-y-6" disabled={isSubmitting}>
        <legend className="sr-only">Contact details</legend>

        <div className="grid gap-6 sm:grid-cols-2">
          <RegularInput
            id="contact-first-name"
            label="First name"
            name="firstName"
            autoComplete="given-name"
            placeholder="John"
            required
            size="lg"
            value={values.firstName}
            onChange={event => updateField('firstName', event.target.value)}
            onBlur={() => validateFieldOnBlur('firstName')}
            errorMessage={fieldErrors.firstName}
          />
          <RegularInput
            id="contact-last-name"
            label="Last name"
            name="lastName"
            autoComplete="family-name"
            placeholder="Doe"
            required
            size="lg"
            value={values.lastName}
            onChange={event => updateField('lastName', event.target.value)}
            onBlur={() => validateFieldOnBlur('lastName')}
            errorMessage={fieldErrors.lastName}
          />
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <RegularInput
            id="contact-email"
            label="Email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            required
            size="lg"
            value={values.email}
            onChange={event => updateField('email', event.target.value)}
            onBlur={() => validateFieldOnBlur('email')}
            errorMessage={fieldErrors.email}
          />
          <RegularInput
            id="contact-phone"
            label="Phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="0800 000 0000"
            required
            size="lg"
            value={values.phone}
            onChange={event => updateField('phone', sanitizePhoneInput(event.target.value))}
            onBlur={() => validateFieldOnBlur('phone')}
            errorMessage={fieldErrors.phone}
          />
        </div>

        <RegularSelect
          id="contact-subject"
          label="Subject"
          value={values.subject}
          onValueChange={subject => {
            const nextValues = {
              ...values,
              subject: subject as ContactFormInput['subject'],
            };

            setValues(nextValues);

            if (fieldErrors.subject) {
              validateFieldOnBlur('subject', nextValues);
            }
          }}
          onBlur={() => validateFieldOnBlur('subject')}
          options={subjectOptions}
          required
          size="lg"
          errorMessage={fieldErrors.subject}
        />

        <RegularTextarea
          id="contact-message"
          label="Message"
          name="message"
          placeholder="Tell us how we can help..."
          rows={6}
          required
          value={values.message}
          onChange={event => updateField('message', event.target.value)}
          onBlur={() => validateFieldOnBlur('message')}
          errorMessage={fieldErrors.message}
        />

        {formError ? (
          <p role="alert" className="text-sm text-destructive">
            {formError}
          </p>
        ) : null}

        <Button type="submit" size="lg" disabled={isSubmitting || !canSubmit}>
          <Send aria-hidden />
          {isSubmitting ? 'Sending…' : 'Send Message'}
        </Button>
      </fieldset>
    </form>
  );
}
