import React from 'react'
import clases from './MyButton.module.css'
const MyButton = function ({ children, ...props }) {
  return (
    <button {...props} className={clases.myBtn}>
      {children}
    </button>
  )
}
export default MyButton
