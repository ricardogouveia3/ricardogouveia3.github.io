import Spinner from "./Spinner";
import { CardProps } from "../../types/Card.type.ts";
import { motion } from "framer-motion";
import { cardMotionProps } from "../../layout/Animation"

export default function Card({
                               children,
                               classNames = "",
                               contentClassnames = "p-4 lg:p-6",
                               loading = false,
                             }: Readonly<CardProps>) {
  return (
    <motion.div
      className={`relative default-border default-background flex flex-col overflow-hidden cursor-default transition-all ease-in-out rounded-lg ${classNames}`}
      role="region"
      aria-busy={loading}
      {...cardMotionProps}
    >
      <div className="smooth-noisy-background">
        <div className={`${contentClassnames} above-noise-content-background`}>
          {children}
        </div>
      </div>
      <Spinner isLoading={loading} />
    </motion.div>
  );
}



