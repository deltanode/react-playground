// `state inside Functional Component`

import { useState } from "react"

const ProfileFunctionalComponent2 = props => {
  const [count1] = useState(1)
  const [count2, setCount2] = useState(2)
  return (
    <div>
      <hr />
      <h3>Profile: Functional Component</h3>
      <p>NAME: {props.name}</p>
      <p>ADDRESS1111: {props.address}</p>
      <p>Count1: {count1}</p>
      <p>Count2: {count2}</p>
      <button onClick={() => setCount2(count2 + 1)}>Increment</button>
      <button onClick={() => setCount2(count2 - 1)}>Decrement</button>
      <p>Lorem ipsum dolor sit amet.</p>
      <hr />
    </div>
  )
}

export default ProfileFunctionalComponent2
