import { IconName } from './Icon.type.ts';

export type SocialItem = {
  iconName: IconName;
  order: number;
  label: string;
  hoverColor?: string;
  link?: string;
};
