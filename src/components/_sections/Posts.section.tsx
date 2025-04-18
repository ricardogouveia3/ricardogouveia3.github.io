import { useState, useEffect } from "react";
import { blogAPI } from "@apis/posts.ts";
import Card from "../Card/Card.tsx";
import PostsItem from "../PostItem.tsx";
import {ParsedPost} from "../../types/Post.type.ts";
import { useBreakpoint } from "@hooks/useBreakpoint.ts";
import ButtonLink from "../Buttons/ButtonLink.tsx";
import { GridClassNames } from "@constants/layout.ts";
import { useTranslation } from "react-i18next";
import {parsePosts} from "@utils/posts.ts";

export default function PostsSection() {
  const { t, i18n } = useTranslation();
  const [posts, setPosts] = useState<ParsedPost[]>([]);
  const [loading, setLoading] = useState(true);
  const { isAboveLg } = useBreakpoint("lg");
  const maxRendered = isAboveLg ? 4 : 3;
  
  useEffect(() => {
    const lang = i18n.language;
    
    blogAPI.getData(lang)
      .then((data) => {
        const parsed = parsePosts(data, lang);
        setPosts(parsed.slice(0, maxRendered));
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  }, [i18n.language, maxRendered]);
  
  return (
    <Card classNames={`${GridClassNames.posts}`} loading={loading}>
      <header className="flex flex-row justify-between mb-4 items-center">
        <h3 className="text-lg/7 font-medium text-gray-950 dark:text-white mb-0">{t('posts.title')}</h3>
        <ButtonLink round="lg" link={t('posts.link')}>{t('posts.seeAll')}</ButtonLink>
      </header>
      
      {!loading && (
        <div className="flex flex-col gap-4">
          {posts.map((post: ParsedPost) => (
            <PostsItem
              title={post.title}
              key={post.id}
              description={post.description}
              link={post.url}
              imgSrc={post.cover_image}
            />
          ))}
        </div>
      )}
    </Card>
  );
}
