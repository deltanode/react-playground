// Example: Calling `Github API` & checking the order of execution as per `React Life Cycle`

import React from "react"

class ProfileClassComponent7 extends React.Component {
  constructor(props) {
    super(props)

    console.log("Child: Constructor()")
  }

  async componentDidMount() {
    console.log("Child: ComponentDidMount() - START")
    const user = "deltanode"
    const data = await fetch("https://api.github.com/users/" + user)
    const json = await data.json()
    console.log(json)
    console.log("Child: ComponentDidMount() - END")
  }

  render() {
    console.log("Child: Render()")
    return (
      <div>
        <h3>Profile: Class Component</h3>
        <p>Count: 1001</p>
      </div>
    )
  }
}

export default ProfileClassComponent7
