import { useEffect } from 'react'
import { useState } from 'react'

export default function useHover(ref) {
  const [isHover, setIsHover] = useState(false)

  const on = () => setIsHover(true)
  const off = () => setIsHover(false)
  useEffect(() => {
    const node = ref.current
    if (!node) {
      return
    }
    node.addEventListener('mouseenter', on)
    node.addEventListener('mousemove', on)
    node.addEventListener('mouseleave', off)

    return function () {
      node.removeEventListener('mouseenter', on)
      node.removeEventListener('mousemove', on)
      node.removeEventListener('mouseleave', off)
    }
  }, [])
  return isHover
}
