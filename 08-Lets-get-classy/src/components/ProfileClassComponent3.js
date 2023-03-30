// Best place for API calls: componentDidMount()

import React from "react"

class ProfileClassComponent3 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  componentDidMount() {
    console.log("API CALL inside Class Component")
  }

  render() {
    console.log("Inside Profile Class Component")
    return (
      <div className="warning">
        <h3>Profile: Class Component</h3>
        <p>Count: {this.state.count}</p>
      </div>
    )
  }
}

export default ProfileClassComponent3
