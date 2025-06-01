import { motion } from "framer-motion";
import {ButtonProps} from "../../types/Button.type.ts";
import { buttonLikeComponentMotionProps } from "@layout/Animation.tsx";

export default function Button({ children, type, disabled }: Readonly<ButtonProps>) {
  const disabledClassnames = disabled ? 'opacity-50 cursor-not-allowed' : '';
  return (
    <motion.button
      type={type}
      disabled={disabled}
      {...(disabled ? {} : buttonLikeComponentMotionProps)}
      className={`py-3 px-5 text-sm font-medium text-center default-text-color rounded-lg w-full ${disabled ? '' : 'hover-background'} default-border ${disabledClassnames}`}>
      {children}
    </motion.button>
  );
}
