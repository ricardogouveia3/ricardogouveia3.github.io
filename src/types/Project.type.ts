export type Project = {
  id: number | string;
  title: string;
  descriptionEn?: string;
  descriptionBr?: string;
  link: string;
  imgSrc: string;
  tags: string[];
  expanded?: boolean;
  soon?: boolean;
  order?: number;
};
