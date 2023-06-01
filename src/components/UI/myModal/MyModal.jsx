import React from 'react'
import clases from './MyModal.module.css'
const MyButton = function ({ children, visible, setVisible }) {
  const rootClasses = [clases.myModal]
  if (visible) {
    rootClasses.push(clases.active)
  }
  return (
    <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
      <div
        className={clases.myModalContent}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  )
}
export default MyButton
