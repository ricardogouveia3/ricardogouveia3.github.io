import { ReactNode } from 'react';
import { IconName } from './Icon.type.ts';

export type MarqueeItemProps = {
  children: ReactNode;
  iconName: IconName;
  hoverColor?: string;
  isHoveredOrFocused?: boolean;
};

export type MarqueeItemData = {
  iconName: IconName;
  label: string;
  hoverColor?: string;
};

export type MarqueeContentProps = {
  isHoveredOrFocused?: boolean;
  stack: TechItem[];
  loading: boolean;
};

export type TechItem = {
  iconName: IconName;
  label: string;
  hoverColor: string;
};
