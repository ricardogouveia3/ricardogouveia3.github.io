import React, { useEffect, useMemo, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { Input, TextArea, useToast } from 'barro-ui';

import { useTranslation } from 'react-i18next';
import { ContactFormProps } from '../../types/Contact.type.ts';

const ContactForm = ({
  email,
  subject,
  message,
  handleInputChange,
  isFormValid,
}: ContactFormProps) => {
  const { t } = useTranslation();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [buttonText, setButtonText] = useState(t('contact.button.send'));
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const { toast } = useToast();

  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    setIsDisabled(!isFormValid || isSubmitting || !recaptchaToken);
  }, [isFormValid, isSubmitting, recaptchaToken]);

  useEffect(() => {
    setButtonText(t('contact.button.send'));
  }, [t]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isDisabled) return;

    setIsSubmitting(true);
    setButtonText(t('contact.button.sending'));

    const formData = {
      email,
      subject,
      message,
      'g-recaptcha-response': recaptchaToken,
    };

    try {
      const response = await fetch('https://formspree.io/f/mgveegny', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setButtonText(t('contact.button.send')); // Reset button text immediately or keep generic
        toast({
          type: 'success',
          message: t('contact.button.sendSuccess'),
        });
      } else {
        console.error('Failed to send message');
        toast({
          type: 'error',
          message: t('contact.button.sendError'),
        });
      }
    } catch (error) {
      console.error(error);
      setButtonText(t('contact.button.send'));
      toast({
        type: 'error',
        message: t('contact.button.sendError'),
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const buttonClasses = useMemo(() => {
    const baseClasses = `
      overflow-hidden default-text-color
      flex items-center justify-center
      text-center font-medium rounded-lg
      hover-background default-border border w-full
      px-4 py-2 max-h-12
    `;

    return isDisabled
      ? `${baseClasses} cursor-custom-not-allowed opacity-60`
      : `${baseClasses} cursor-custom-pointer hover:hover-background  `;
  }, [isDisabled]);

  return (
    <form onSubmit={handleSubmit} className="flex h-full flex-col justify-between gap-6">
      <Input
        type="email"
        id="email"
        label={t('contact.email')}
        name="email"
        value={email}
        onChange={handleInputChange}
        required
        className="default-text-color"
      />
      <Input
        type="text"
        id="subject"
        label={t('contact.subject')}
        name="subject"
        value={subject}
        onChange={handleInputChange}
        required
        className="default-text-color"
      />
      <TextArea
        id="message"
        label={t('contact.message')}
        name="message"
        className="default-text-color min-h-[120px] flex-1 resize-none"
        containerClassName="flex-1 flex flex-col"
        value={message}
        onChange={handleInputChange}
        required
      />

      <div className="flex w-full scale-90 justify-center md:scale-100">
        <ReCAPTCHA
          sitekey="6Lfeev0qAAAAAOxvaQ7TikINLNisNWtEudEnR4Ia"
          onChange={token => {
            setRecaptchaToken(token);
          }}
        />
      </div>

      <input type="submit" value={buttonText} disabled={isDisabled} className={buttonClasses} />
    </form>
  );
};

export default ContactForm;
