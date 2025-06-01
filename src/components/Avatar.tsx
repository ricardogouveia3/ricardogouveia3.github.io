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
}: AvatarAnimatedBorderProps) {
  return (
    <div
      className={`relative rounded-full p-[2px] inline-block ${className}`}
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
    >
      {isHoveredOrFocused && (
        <motion.div
          className="absolute inset-0 rounded-full pointer-events-none"
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
        className={`relative rounded-full border-4 border-black dark:border-white transition-all ${
          isHoveredOrFocused ? 'scale-110 p-2 border-none rotate-6' : 'p-2'
        }`}
        style={{ position: 'relative', zIndex: 10 }}
      />
    </div>
  );
}
