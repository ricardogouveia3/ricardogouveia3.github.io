export const buttonLikeComponentMotionProps = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95, rotate: "2.5deg" },
  transition: {
    duration: 0.125,
    ease: "easeInOut",
  },
};

export const cardMotionProps = {
  layout: true,
  initial: { scale: 0.75 },
  animate: { scale: 1 },
  transition: { ease: "backInOut", duration: 0.25 },
  whileHover: {
    scale: 0.9875,
    transition: { duration: 0.005, ease: "easeInOut" },
  },
};
