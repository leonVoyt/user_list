import React, { useEffect, useState } from 'react'
import '../../styles/App.css'
import { useFetching } from './../hooks/useFetching'
import { usePosts } from './../hooks/usePosts'
import PostService from './../../API/PostSevice'
import { getPagecount } from './../../utils/Pages'
import Mymodal from './../UI/myModal/MyModal'
import MyButton from './../UI/button/MyButton'
import PostForm from './../PostForm'
import PostFilter from './../PostFilter'
import MyLoader from './../UI/loader/MyLoader'
import PostList from './../PostList'
import PostPagination from './../PostPagination/PostPagination'
import MySelect from '../UI/select/MySelect'

function PostPage() {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({ sort: '', query: '' })
  const [modal, setModal] = useState(false)
  const [totalPages, setTotalPages] = useState(0)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
  const [fetchPosts, postLoading, loadError] = useFetching(async () => {
    const response = await PostService.getALL(limit, page)
    setPosts(response.data)
    let totalCount = response.headers['x-total-count']

    setTotalPages(getPagecount(totalCount, limit))
  })

  const deletePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id))
  }
  const createPost = (newPost) => {
    setPosts([...posts, { ...newPost, id: Date.now() }])
    setModal(false)
    //
  }

  useEffect(() => {
    fetchPosts()
  }, [page, limit])

  return (
    <div className="App">
      <MyButton style={{ marginTop: '15px' }} onClick={() => setModal(true)}>
        Create post
      </MyButton>
      <Mymodal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </Mymodal>
      <hr style={{ margin: '15px 0' }} />
      <div className="">
        <PostFilter filter={filter} setFilter={setFilter} />
      </div>
      <MySelect
        value={limit}
        onChange={(val) => setLimit(val)}
        defaultValue="Count element`s"
        options={[
          { value: 5, name: '5' },
          { value: 10, name: '10' },
          { value: 25, name: '25' },
          { value: -1, name: 'All' },
        ]}
      ></MySelect>
      {loadError && <h1>Error : ${loadError}</h1>}
      {postLoading ? (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '50px',
          }}
        >
          <MyLoader />
        </div>
      ) : (
        <PostList
          remove={deletePost}
          posts={sortedAndSearchedPosts}
          title={'1 List'}
        />
      )}

      <PostPagination page={page} setPage={setPage} totalPages={totalPages} />
    </div>
  )
}

export default PostPage
