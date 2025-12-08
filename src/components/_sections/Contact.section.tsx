import React, { useState } from 'react';
import ContactForm from '../Form/ContactForm.tsx';
import { GridClassNames } from '@constants/layout.ts';
import { useTranslation } from 'react-i18next';
import { Card } from 'barro-ui';

export default function Contact() {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    if (id === 'email') setEmail(value);
    if (id === 'subject') setSubject(value);
    if (id === 'message') setMessage(value);
  };

  const isFormValid = !!(email && subject && message);

  return (
    <Card
      className={GridClassNames.contact}
      contentClassName="flex flex-col p-4 lg:p-6 h-full justify-between"
      animatedBorder={false}
    >
      <h3 className="default-text-color mb-6 text-lg/7 font-medium">{t('contact.title')}</h3>
      <ContactForm
        email={email}
        subject={subject}
        message={message}
        handleInputChange={handleInputChange}
        isFormValid={isFormValid}
      />
    </Card>
  );
}
