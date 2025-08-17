import { TextAreaProps } from '../../types/Contact.type.ts';

const inputDefaultStyles =
  'appearance-none block w-full text-sm smooth-text-color rounded-lg p-2.5 placeholder-quartz-750 bg-transparent border default-border focus:border-none focus:ring-0';

const labelDefaultStyles = 'block mb-2 text-sm font-medium default-text-color';

const TextArea = ({
  id,
  label,
  value,
  name,
  onChange,
  rows = 5,
  required = false,
  inputStyles = inputDefaultStyles,
  labelStyles = labelDefaultStyles,
}: TextAreaProps) => (
  <div className={`flex h-full flex-col`}>
    <label htmlFor={id} className={labelStyles}>
      {label}
    </label>
    <textarea
      id={id}
      rows={rows}
      className={`h-full max-h-full ${inputStyles}`}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
    ></textarea>
  </div>
);

export default TextArea;
