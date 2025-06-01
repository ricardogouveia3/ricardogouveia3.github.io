export type AvatarAnimatedBorderProps = {
  src: string;
  alt: string;
  size?: number;
  className?: string;
  isHoveredOrFocused?: boolean;
  onHoverStart?: () => void;
  onHoverEnd?: () => void;
};
