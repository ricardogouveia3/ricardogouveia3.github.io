import { motion } from 'framer-motion';
import { HeaderToggleButtonProps } from '../../types/Button.type.ts';
import { buttonLikeComponentMotionProps } from '@layout/Animation.tsx';

const ToggleButton = ({ onClick, icon: Icon }: Readonly<HeaderToggleButtonProps>) => {
  return (
    <motion.button
      className={`default-background default-border hover-background default-text-color flex aspect-square h-full w-full items-center justify-center rounded-lg px-3 py-1 font-semibold sm:rounded-full`}
      onClick={onClick}
      aria-label="Toggle button"
      {...{
        ...buttonLikeComponentMotionProps,
        whileTap: { scale: 0.95 },
      }}
    >
      {typeof Icon === 'string' ? (
        <img src={Icon} alt="Toggle icon" className="w-5 sm:w-4" />
      ) : (
        Icon && <Icon className="default-text-color w-4" />
      )}
    </motion.button>
  );
};

export default ToggleButton;
