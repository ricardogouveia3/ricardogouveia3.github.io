import Spinner from "./Spinner";
import { CardProps } from "../../types/Card.type.ts";
import { motion } from "framer-motion";
import { cardBorderMotionProps } from "../../layout/Animation"

export default function Card({
                               children,
                               classNames = "",
                               contentClassnames = "p-4 lg:p-6",
                               loading = false,
                               animatedBorder = true,
                             }: Readonly<CardProps>) {
  
  return (
    <motion.div
      className={`relative rounded-lg overflow-hidden default-border transition-all duration-300 ease-in-out ${classNames} ${
        animatedBorder ? "hover:p-[1px]" : ""
      }`}
      role="region"
      aria-busy={loading}
      {...(animatedBorder ? { whileHover: "hover" } : {})}
    >
      {animatedBorder && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          {...cardBorderMotionProps}
        />
      )}
      
      <div className="relative z-10 bg-[var(--background-color)] rounded-md overflow-hidden w-full h-full">
        <div className="smooth-noisy-background w-full h-full flex flex-col">
          <div className={`${contentClassnames} above-noise-content-background w-full h-full`}>
            {children}
          </div>
        </div>
        <Spinner isLoading={loading} />
      </div>
    </motion.div>
  );
}



