// `React Life Cycle`:  Tell the order in which console will be printed? [Parent -> Child1 & Child2]

import React from "react"

class ProfileClassComponent6 extends React.Component {
  constructor(props) {
    super(props)

    console.log("Child-2: Constructor()")
  }

  componentDidMount() {
    console.log("Child-2: ComponentDidMount()")
  }

  render() {
    console.log("Child-2: Render()")
    return (
      <div>
        <h3>Profile: Class Component [Child 2]</h3>
        <p>Count: 0</p>
      </div>
    )
  }
}

export default ProfileClassComponent6
