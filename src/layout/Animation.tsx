export const buttonLikeComponentMotionProps = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95, rotate: "2.5deg" },
  transition: {
    duration: 0.125,
    ease: "easeInOut",
  },
};

export const cardBorderMotionProps = {
  variants: {
    initial: {
      backgroundImage: `conic-gradient(
        from 0deg,
        #00ff00,
        #00ff80,
        #00ffff,
        #40ffff,
        #ff0000,
        #ff4040,
        #ffa500,
        #ffb040,
        #ff00ff,
        #ff40ff,
        #00ff00,
        #00ff80,
        #00ffff,
        #40ffff,
        #ff0000,
        #ff4040,
        #ffa500,
        #ffb040
      )`,
      backgroundSize: "300% 300%",
      scale: 1.5,
      rotate: 0,
    },
    hover: {
      rotate: 360,
      transition: {
        repeat: Infinity,
        duration: 60,
        ease: "linear",
      },
    },
  },
  initial: "initial",
};
