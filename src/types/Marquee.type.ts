import {ReactNode} from "react";
import {IconName} from "./Icon.type.ts";

export type MarqueeSectionProps = {
  darkMode?: boolean;
};

export type MarqueeItemProps = {
  children: ReactNode;
  iconName: IconName;
  hoverColor?: string;
  isHoveredOrFocused?: boolean;
  darkMode?: boolean;
};

export type MarqueeItemData = {
  iconName: IconName;
  label: string;
  hoverColor?: string;
};

export type MarqueeContentProps = {
  darkMode?: boolean;
  isHoveredOrFocused?: boolean;
  stack: TechItem[];
  loading: boolean;
};

export type TechItem = {
  iconName: IconName;
  label: string;
  hoverColor: string;
};
