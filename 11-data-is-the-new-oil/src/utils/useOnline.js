import { useState, useEffect } from "react"

// Funtion returning boolean during online & offline
const useOnline = () => {
  const [isOnline, setIsOnline] = useState(true)

  function handleOnline() {
    // console.log("online")
    setIsOnline(true)
  }

  function handleOffline() {
    // console.log("offline")
    setIsOnline(false)
  }

  useEffect(() => {
    window.addEventListener("online", handleOnline)
    window.addEventListener("offline", handleOffline)

    return () => {
      window.removeEventListener("online", handleOnline)
      window.removeEventListener("offline", handleOffline)
    }
  }, [])

  return isOnline
}

export default useOnline
