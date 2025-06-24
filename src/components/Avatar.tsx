import { motion } from 'framer-motion';
import { avatarBorderMotionProps } from '../layout/Animation';
import { AvatarAnimatedBorderProps } from '../types/Avatar.type';

export default function Avatar({
  src,
  alt,
  size = 130,
  className = '',
  isHoveredOrFocused = false,
  onHoverStart,
  onHoverEnd,
}: Readonly<AvatarAnimatedBorderProps>) {
  return (
    <div
      className={`relative inline-block rounded-full p-[2px] ${className}`}
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
    >
      {isHoveredOrFocused && (
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-full"
          variants={avatarBorderMotionProps.variants}
          initial="initial"
          animate={'hover'}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          style={{ zIndex: 0 }}
        />
      )}

      {/* Avatar */}
      <img
        src={src}
        alt={alt}
        decoding="async"
        loading="lazy"
        width={size}
        height={size}
        className={`relative rounded-full border-4 border-black transition-all dark:border-white ${
          isHoveredOrFocused ? 'scale-110 rotate-6 border-none p-2' : 'p-2'
        }`}
        style={{ position: 'relative', zIndex: 10 }}
      />
    </div>
  );
}
