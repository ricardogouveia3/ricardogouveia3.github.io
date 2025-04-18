import React from "react";

export type ContactFormProps = {
  email: string;
  subject: string;
  message: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  isFormValid: boolean;
};

export type InputProps = {
  type: string,
  id: string,
  label: string,
  value: string,
  name?: string,
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
  required?: boolean,
  inputStyles?: string,
  labelStyles?: string,
};

export type TextAreaProps = {
  id: string;
  label: string;
  value: string;
  name?: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  rows?: number;
  required?: boolean;
  inputStyles?: string;
  labelStyles?: string;
};
