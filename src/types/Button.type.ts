import React, {CSSProperties, MouseEventHandler, ReactNode} from "react";
import {IconName} from "./Icon.type.ts";

export type ButtonProps = {
  children: ReactNode;
  type: "submit" | "reset" | "button" | undefined;
  disabled: boolean;
}

export type ButtonLinkProps = {
  children: ReactNode;
  link: string;
  round?: 'sm' | 'md' | 'lg' | 'full';
  hoverColor?: string;
  className?: string;
  style?: CSSProperties;
  onMouseEnter?: MouseEventHandler<HTMLAnchorElement>;
  onMouseLeave?: MouseEventHandler<HTMLAnchorElement>;
};

export type SocialLinkProps = {
  children: ReactNode;
  iconName?: IconName;
  link: string;
  hoverColor?: string;
  darkMode?: boolean;
};

export type HeaderToggleButtonProps = {
  onClick: () => void;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>> | string;
};
