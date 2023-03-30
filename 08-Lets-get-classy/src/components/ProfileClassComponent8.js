// Example: setTimeOut in `componentDidMount()` (i.e using `componentWillUnmount()`):

import React from "react"

class ProfileClassComponent8 extends React.Component {
  componentDidMount() {
    this.timer = setInterval(count => {
      console.log("Hello")
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timer) // Code Clean Up
  }

  render() {
    return (
      <div>
        <h3>Profile: Class Component</h3>
        <p>Count: 1001</p>
      </div>
    )
  }
}

export default ProfileClassComponent8
