import React, { useState } from 'react'
import MyInput from './UI/input/MyInput'
import MyButton from './UI/button/MyButton'

const PostForm = function ({ create }) {
  const [post, setPost] = useState({ title: '', body: '' })

  const addNewPost = (e) => {
    e.preventDefault()
    const newPost = { ...post }
    create(newPost)
    setPost({ title: '', body: '' })
  }

  return (
    <form action="">
      <MyInput
        type="text"
        placeholder="post name"
        value={post.title}
        onChange={(event) => setPost({ ...post, title: event.target.value })}
      />
      <MyInput
        type="text"
        placeholder="discription"
        value={post.body}
        onChange={(event) => setPost({ ...post, body: event.target.value })}
      />
      <MyButton onClick={addNewPost}>Create post</MyButton>
    </form>
  )
}
export default PostForm
