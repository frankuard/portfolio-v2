import { useEffect, useState } from 'react'
import { apiGet } from '../lib/api'

// const { data, loading, error } = useApi('/api/experience')
const useApi = (path) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const controller = new AbortController()
    setLoading(true)
    setError(null)

    apiGet(path, controller.signal)
      .then(setData)
      .catch((err) => {
        if (err.name !== 'AbortError') setError(err)
      })
      .finally(() => {
        if (!controller.signal.aborted) setLoading(false)
      })

    return () => controller.abort()
  }, [path])

  return { data, loading, error }
}

export default useApi