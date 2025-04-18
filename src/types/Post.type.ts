export type ApiPostType = {
  slug: string;
  title: string;
  description?: string;
  heroImage?: string;
  id: number | string;
  url: string;
  cover_image?: string;
};

export type PostsItemProps = {
  title: string,
  description: string,
  link: string,
  imgSrc: string,
  imgAlt?: string
};

export type ParsedPost = {
  id: string;
  title: string;
  description: string;
  url: string;
  cover_image: string;
};
