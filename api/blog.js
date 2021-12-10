const DEVTO_API_MY_POSTS =
  'https://dev.to/api/articles?username=ricardogouveia3'

export const Blog = {
  getData: async () => {
    return await fetch(DEVTO_API_MY_POSTS)
      .then((res) => res.json())
      .catch(() => {
        // eslint-disable-next-line no-console
        console.error('Unable to fetch posts data from Dev.to')
        return []
      })
  },
}

export default Blog
