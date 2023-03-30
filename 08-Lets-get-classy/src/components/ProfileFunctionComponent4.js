// Exapmel: setTimeOut in `useEffect()` (i.e using `return` in useEffect()):

import { useState, useEffect } from "react"

const ProfileFunctionalComponent4 = props => {
  const [count] = useState(0)

  useEffect(() => {
    // API Call

    const timer = setInterval(() => {
      console.log("Hi")
    }, 1000)

    return () => {
      clearInterval(timer)
      console.log("useEffect Return")
    }
  }, [])

  return (
    <div>
      <hr />
      <h3>Profile: Functional Component</h3>
      <p>Count: {count}</p>
      <hr />
    </div>
  )
}

export default ProfileFunctionalComponent4
