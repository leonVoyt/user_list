import { useMemo } from 'react'

export const useSortedPosts = (posts, sort) => {
  const sortedPosts = useMemo(() => {
    // console.log('work')
    // console.log(`posts is ${posts}`)

    if (sort) {
      return [...posts].sort((a, b) =>
        Number.isInteger(a[sort])
          ? a[sort] - b[sort]
          : a[sort].localeCompare(b[sort])
      )
    }
    return posts
  }, [sort, posts])
  return sortedPosts
}

export const usePosts = (posts, sort, query) => {
  const sortedPosts = useSortedPosts(posts, sort)
  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(query.toLowerCase())
    )
  }, [query, sortedPosts])
  return sortedAndSearchedPosts
}
