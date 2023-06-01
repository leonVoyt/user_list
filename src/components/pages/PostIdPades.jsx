import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useFetching } from '../hooks/useFetching'
import PostService from '../../API/PostSevice'
import MyLoader from '../UI/loader/MyLoader'

function PostIdPages() {
  const params = useParams()
  const [post, setPost] = useState({})
  const [coments, setComents] = useState([])
  const [fetchPostsById, isloading, error] = useFetching(async (id) => {
    // console.log(params.id)
    const response = await PostService.getById(id)
    setPost(response.data)
  })
  const [fetchComents] = useFetching(async (id) => {
    // console.log(params.id)
    const response = await PostService.getComentById(id)
    setComents(response.data)
  })

  useEffect(() => {
    fetchPostsById(params.id)
    fetchComents(params.id)
  }, [])
  return (
    <div>
      {isloading ? (
        <MyLoader />
      ) : (
        <div>
          <div>
            <h1>Post page {post.id}</h1>
            {post.id}. {post.title}
            <h1>Post Coments </h1>
            {coments.map((comm) => (
              <div key={comm.id} style={{ marginTop: 15 }}>
                <h5>{comm.email}</h5>
                <div>{comm.body}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default PostIdPages
