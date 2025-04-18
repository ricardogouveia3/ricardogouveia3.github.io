import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description?: string;
  image?: string;
  url?: string;
}

export default function SEO({ title, description, image, url }: SEOProps) {
  const siteUrl = "https://rcrd.dev";
  const fullUrl = url ? `${siteUrl}${url}` : siteUrl;
  const defaultImage = `${siteUrl}/default-image.png`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description || "Front-end Developer & UI Designer"} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description || "Front-end Developer & UI Designer"} />
      <meta property="og:image" content={image || defaultImage} />
      <meta property="og:url" content={fullUrl} />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  );
}
