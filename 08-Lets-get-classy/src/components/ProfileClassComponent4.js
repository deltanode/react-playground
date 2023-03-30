// `React Life Cycle`:  Tell the order in which console will be printed? [Parent -> Child]

import React from "react"

class ProfileClassComponent4 extends React.Component {
  constructor(props) {
    super(props)

    console.log("Child: Constructor()")
  }

  componentDidMount() {
    console.log("Child: ComponentDidMount()")
  }

  render() {
    console.log("Child: Render()")
    return (
      <div>
        <h3>Profile: Class Component</h3>
        <p>Count: 0</p>
      </div>
    )
  }
}

export default ProfileClassComponent4
