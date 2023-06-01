import React from 'react'
import MyButton from './UI/button/MyButton'
import { useNavigate } from 'react-router-dom'
// import { useHistory } from 'react-router-dom'

const PostItem = function (props) {
  const router = useNavigate()

  return (
    <div className="post">
      <div className="post_content">
        <strong>
          {props.number + '.'} {props.post.title}
        </strong>
        <div>{props.post.body}</div>
      </div>
      <div className="post_btns">
        <MyButton onClick={() => router(`/posts/${props.post.id}`)}>
          Open
        </MyButton>
        <MyButton onClick={() => props.remove(props.post)}>Delete</MyButton>
      </div>
    </div>
  )
}
export default PostItem
