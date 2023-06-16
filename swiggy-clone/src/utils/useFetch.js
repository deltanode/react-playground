import { useEffect, useState } from "react"

const useFetch = URL => {
  const [isLoading, setIsLoading] = useState(false)
  const [apiData, setApiData] = useState([])
  const [serverError, setServerError] = useState(null)

  useEffect(() => {
    setIsLoading(true)
    const fetchData = async () => {
      try {
        const response = await fetch(URL)
        const json = await response.json()

        setApiData(json)
        setIsLoading(false)
      } catch (err) {
        setServerError(err.message)
        setIsLoading(false)
      }
    }
    fetchData(URL)
  }, [URL])

  return { isLoading, apiData, serverError }
}

export default useFetch
