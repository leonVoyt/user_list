import { useState } from 'react'

export const useFetching = (callBack) => {
  const [postLoading, setPostLoading] = useState(false)
  const [error, setError] = useState(false)

  const fetching = async (...args) => {
    try {
      setPostLoading(true)
      await callBack(...args)
    } catch (e) {
      setError(e.message)
    } finally {
      setPostLoading(false)
    }
  }
  return [fetching, postLoading, error]
}
