import React from 'react'
import PostItem from './PostItem'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
const PostList = function ({ posts, title, remove }) {
  if (!posts.length) {
    return (
      <div>
        <h1 style={{ textAlign: 'center' }}>Post List is empty</h1>
      </div>
    )
  } else {
    return (
      <div>
        <h1 style={{ textAlign: 'center' }}>{title}</h1>
        <TransitionGroup>
          {posts.map((post, index) => (
            <CSSTransition key={post.id} timeout={500} classNames="post">
              <PostItem number={index + 1} remove={remove} post={post} />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
    )
  }
}
export default PostList
