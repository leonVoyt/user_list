import React from 'react'
import clases from './MyButton.module.css'
import { useRef } from 'react'
import useHover from '../../hooks/useHover'
const MyButton = function ({ children, ...props }) {
  const ref = useRef()
  const isHover = useHover(ref)
  return (
    <button
      ref={ref}
      {...props}
      className={isHover ? clases.myBtn_hover : clases.myBtn}
    >
      {children}
    </button>
  )
}
export default MyButton
