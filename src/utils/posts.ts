import {ApiPostType, ParsedPost} from "../types/Post.type";

export const parsePosts = (data: unknown, lang: string): ParsedPost[] => {
  if (!Array.isArray(data)) return [];
  
  if (lang === "pt-br") {
    return (data as ApiPostType[])
      .map((post) => ({
        id: post.slug,
        title: post.title,
        description: post.description ?? "",
        url: `https://blog.rcrd.dev/blog/${post.slug}`,
        cover_image: post.heroImage ?? "",
      }));
  }
  
  if (lang === "en") {
    return (data as ApiPostType[])
      .map((post) => ({
        id: String(post.id),
        title: post.title,
        description: post.description ?? "",
        url: post.url,
        cover_image: post.cover_image ?? "",
      }));
  }
  
  console.error(`Unsupported language in parsePosts: ${lang}`);
  return [];
};
