import {PostsItemProps} from "../types/Post.type.ts";
import {motion} from "framer-motion";
import {cardBorderMotionProps} from "@layout/Animation.tsx";
import {useState} from "react";

export default function PostsItem({ title, description, link, imgSrc, imgAlt = `Auto generated description: ${title}` }: Readonly<PostsItemProps>) {
  const [showBorder, setShowBorder] = useState(false);

  return (
    <article>
      <motion.a
        href={link}
        target="_blank"
        onHoverStart={() => setShowBorder(true)}
        onHoverEnd={() => setShowBorder(false)}
        onFocus={() => setShowBorder(true)}
        onBlur={() => setShowBorder(false)}
        className="relative border-box flex flex-col items-center rounded-lg overflow-hidden md:flex-row w-full default-border hover-background p-[1px]">

        {showBorder && (
          <motion.div
            className="absolute inset-0 pointer-events-none"
            animate="animate"
            {...cardBorderMotionProps}
          />
        )}

        <div className="relative border-box rounded-md flex flex-col md:flex-row sm:min-h-40 md:h-32 z-10 smooth-noisy-background hover-background overflow-hidden">
          <picture className="object-cover w-full h-48 md:w-auto md:max-w-52 md:h-full">
            <source srcSet={imgSrc} type="image/jpg" />
            <img
              src={imgSrc}
              alt={imgAlt}
              decoding="async"
              loading="lazy"
              className={`object-cover w-full h-48 md:w-auto md:max-w-52 md:h-full`}
              width={420}
              height={195}
            />
          </picture>
          <div className="flex flex-col justify-center p-4 leading-normal py-3 gap-2 z-10 above-noise-content-background">
            <h4 className="text-base font-bold default-text-color">{title}</h4>
            <p className="text-sm smooth-text-color">{description}</p>
          </div>
        </div>
      </motion.a>
    </article>
  );
}

