import { motion } from 'framer-motion';
import { ButtonLinkProps } from '../../types/Button.type.ts';
import Icon from '../Icon.tsx';
import { buttonLikeComponentMotionProps } from '@layout/Animation.tsx';

export default function ButtonLink({
  children,
  link,
  round,
  className,
  style,
  onMouseEnter,
  onMouseLeave,
  icon,
  iconPosition = 'right',
  iconClassnames = '',
}: Readonly<ButtonLinkProps>) {
  let roundClassName = '';

  switch (round) {
    case 'lg':
      roundClassName = 'rounded-lg';
      break;
    case 'md':
      roundClassName = 'rounded-md';
      break;
    case 'sm':
      roundClassName = 'rounded';
      break;
    case 'full':
      roundClassName = 'rounded-full';
      break;
    default:
      break;
  }

  return (
    <motion.a
      href={link}
      target="_blank"
      className={`flex justify-center items-center py-2 px-4 text-sm font-medium text-center default-text-color ${roundClassName} w-fit hover-background border default-border ${className}`}
      style={style}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      {...buttonLikeComponentMotionProps}
    >
      {icon && iconPosition === 'left' && (
        <Icon name={icon} className={`mr-0.5 ${iconClassnames}`} />
      )}
      {children}
      {icon && iconPosition === 'right' && (
        <Icon name={icon} className={`ml-0.5 ${iconClassnames}`} />
      )}
    </motion.a>
  );
}
