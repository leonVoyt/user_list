import React, { useRef } from 'react'
import classes from './PostPagination.module.css'
import { usePagination } from '../hooks/usePagination'
const PostPagination = function ({ page, setPage, totalPages }) {
  const pagesCount = usePagination(totalPages)

  const changePage = (page) => {
    setPage(page)
  }
  return (
    <div className={classes.page__wrapper}>
      {pagesCount.map((p) => (
        <span
          onClick={() => changePage(p)}
          key={p}
          className={page === p ? classes.page__current : classes.page__but}
        >
          {p}
        </span>
      ))}
    </div>
  )
}

export default PostPagination
