import React, { useEffect, useMemo, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import InputField from './Input';
import TextArea from './TextArea';
import { useBreakpoint } from '@hooks/useBreakpoint.ts';
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
  const { isAboveLg } = useBreakpoint('lg');
  const [textAreaLines] = useState(isAboveLg ? 10 : 5);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [buttonText, setButtonText] = useState(t('contact.button.send'));
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);

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
        setButtonText(t('contact.button.sendSuccess'));
        setTimeout(() => setButtonText(t('contact.button.send')), 3000);
      } else {
        console.error('Failed to send message');
      }
    } catch (error) {
      console.error(error);
      setButtonText(t('contact.button.sendError'));
      setTimeout(() => setButtonText(t('contact.button.send')), 3000);
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
    <form onSubmit={handleSubmit} className="flex h-full flex-col justify-between gap-4">
      <InputField
        type="email"
        id="email"
        label={t('contact.email')}
        name="email"
        value={email}
        onChange={handleInputChange}
        required
      />
      <InputField
        type="text"
        id="subject"
        label={t('contact.subject')}
        name="subject"
        value={subject}
        onChange={handleInputChange}
        required
      />
      <TextArea
        id="message"
        label={t('contact.message')}
        name="message"
        rows={textAreaLines}
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
