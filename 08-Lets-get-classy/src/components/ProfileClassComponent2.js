// "state" inside Class Component

import React from "react"

class ProfileClassComponent2 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count1: 11,
      count2: 22
    }
  }
  render() {
    console.log("Inside Profile Class Component")
    return (
      <div className="warning">
        <h3>Profile: Class Component</h3>
        <p>NAME: {this.props.name}</p>
        <p>ADDRESS: {this.props.address}</p>
        <p>Count1: {this.state.count1}</p>
        <p>Count2: {this.state.count2}</p>
        <button onClick={() => this.setState({ count2: this.state.count2 + 1 })}>Increase</button>
        <button onClick={() => this.setState({ count2: this.state.count2 - 1 })}>Decrease</button>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
    )
  }
}

export default ProfileClassComponent2
