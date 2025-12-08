import { flags, icons, logos } from '@assets/images';
import { Icon } from 'barro-ui';
import { FlagKey, IconKey, IconProps, LogoKey } from '../types/Icon.type.ts';

export default function CustomIcon({
  name,
  className = 'w-4',
  color = 'currentColor',
}: Readonly<IconProps>) {
  const icon = logos[name as LogoKey] || icons[name as IconKey] || flags[name as FlagKey];

  if (!icon) {
    console.warn(`Icon "${name}" not found.`);
    return null;
  }

  const IconComponent = icon;
  return <Icon icon={IconComponent} className={className} color={color} />;
}
