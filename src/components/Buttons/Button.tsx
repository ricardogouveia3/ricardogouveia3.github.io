import { motion } from 'framer-motion';
import { ButtonProps } from '../../types/Button.type.ts';
import { buttonLikeComponentMotionProps } from '@layout/Animation.tsx';

export default function Button({ children, type, disabled }: Readonly<ButtonProps>) {
  const disabledClassnames = disabled ? 'opacity-50 cursor-not-allowed' : '';
  return (
    <motion.button
      type={type}
      disabled={disabled}
      {...(disabled ? {} : buttonLikeComponentMotionProps)}
      className={`default-text-color w-full rounded-lg px-5 py-3 text-center text-sm font-medium ${disabled ? '' : 'hover-background'} default-border ${disabledClassnames}`}
    >
      {children}
    </motion.button>
  );
}
