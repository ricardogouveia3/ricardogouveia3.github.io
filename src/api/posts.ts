const DEVTO_API_MY_POSTS = "https://dev.to/api/articles?username=rcrd";
const BLOG_API_MY_POSTS_PT = "https://blog.rcrd.dev/api/posts.json";

export const blogAPI = {
  getData: async (lang: string = 'en') => {
    let apiUrl = '';
    
    if (lang === 'pt-br') {
      apiUrl = BLOG_API_MY_POSTS_PT;
    } else if (lang === 'en') {
      apiUrl = DEVTO_API_MY_POSTS;
    } else {
      console.error(`Language not supported: ${lang}`);
    }
    
    try {
      const response = await fetch(apiUrl);
      if (response.ok) {
        return await response.json();
      } else {
        console.error(`API falhou para o idioma ${lang}`);
      }
    } catch (error) {
      console.error(error);
    }
  },
};
