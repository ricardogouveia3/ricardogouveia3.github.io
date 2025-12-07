import { IconName } from './Icon.type.ts';

export type HexColor = `#${string}`;

export type SocialItem = {
  iconName: IconName;
  order: number;
  label: string;
  hoverColor?: HexColor;
  link?: string;
};
