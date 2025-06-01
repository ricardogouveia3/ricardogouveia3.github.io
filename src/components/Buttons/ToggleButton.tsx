import { motion } from "framer-motion";
import {HeaderToggleButtonProps} from "../../types/Button.type.ts";
import {buttonLikeComponentMotionProps} from "../../layout/Animation";

const ToggleButton = ({ onClick, icon: Icon }: Readonly<HeaderToggleButtonProps>) => {
  return (
    <motion.button
      className={`flex items-center justify-center h-full w-full default-background default-border hover-background rounded-lg sm:rounded-full default-text-color font-semibold px-3 py-1 aspect-square`}
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
        Icon && <Icon className="w-4 default-text-color" />
      )}
    </motion.button>

  );
}

export default ToggleButton;
