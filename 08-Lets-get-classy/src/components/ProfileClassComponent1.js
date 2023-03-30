// pasing props from parent to child
import React from "react"

class ProfileClassComponent1 extends React.Component {
  render() {
    console.log("Inside Profile Class Component")
    return (
      <div>
        <h3>Profile: Class Component</h3>
        <p>NAME: {this.props.name}</p>
        <p>ADDRESS: {this.props.address}</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
    )
  }
}

export default ProfileClassComponent1
