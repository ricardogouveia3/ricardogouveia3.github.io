import {PostsItemProps} from "../types/Post.type.ts";

export default function PostsItem({ title, description, link, imgSrc, imgAlt = `Auto generated description: ${title}` }: Readonly<PostsItemProps>) {
  return (
    <article>
      <a href={link} target="_blank" className="flex flex-col items-center rounded-lg overflow-hidden md:flex-row w-full md:h-32 default-border hover-background">
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
        <div className="flex flex-col justify-center p-4 leading-normal py-3 gap-2">
          <h4 className="text-base font-bold default-text-color">{title}</h4>
          <p className="text-sm smooth-text-color">{description}</p>
        </div>
      </a>
    </article>
  );
}

