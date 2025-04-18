import { flags, icons, logos } from "@assets/images";

export type LogoKey = keyof typeof logos;
export type IconKey = keyof typeof icons;
export type FlagKey = keyof typeof flags;

export type IconName = LogoKey | IconKey | FlagKey;

export type IconProps = {
  name: IconName;
  className?: string;
  color?: string;
};
