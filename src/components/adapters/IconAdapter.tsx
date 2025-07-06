import { logos } from '@assets/images.ts';
import { IconAdapterProps } from '../../types/Adapters.type.ts';

export const IconAdapter = ({ name, className }: IconAdapterProps) => {
  const IconComponent = logos[name as keyof typeof logos];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`);
    return <div className={className} />;
  }

  return <IconComponent className={className} />;
};
