// Best place for API calls: useEffect()

import { useState, useEffect } from "react"

const ProfileFunctionalComponent3 = props => {
  const [count] = useState(0)

  useEffect(() => {
    console.log("API CALL inside Functional Component")
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

export default ProfileFunctionalComponent3
