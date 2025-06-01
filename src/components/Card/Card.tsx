import { useState } from "react";
import Spinner from "./Spinner";
import { CardProps } from "../../types/Card.type.ts";
import { motion } from "framer-motion";
import { cardBorderMotionProps } from "@layout/Animation.tsx";

export default function Card({
                               children,
                               classNames = "",
                               contentClassnames = "p-4 lg:p-6",
                               loading = false,
                               animatedBorder = true,
                             }: Readonly<CardProps>) {
  const [showBorder, setShowBorder] = useState(false);

  return (
    <motion.div
      className={`relative rounded-lg overflow-hidden transition-all default-border duration-300 ease-in-out p-[1px] ${classNames}`}
      role="region"
      aria-busy={loading}
      onHoverStart={() => setShowBorder(true)}
      onHoverEnd={() => setShowBorder(false)}
      onFocus={() => setShowBorder(true)}
      onBlur={() => setShowBorder(false)}
    >
      {animatedBorder && showBorder && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate="animate"
          {...cardBorderMotionProps}
        />
      )}

      <div className="relative z-10 bg-[var(--background-color)] rounded-md overflow-hidden w-full h-full">
        <div className="smooth-noisy-background w-full h-full flex flex-col">
          <div
            className={`${contentClassnames} above-noise-content-background w-full h-full`}
          >
            {children}
          </div>
        </div>
        <Spinner isLoading={loading} />
      </div>
    </motion.div>
  );
}
