import React from "react"
import { Link } from "react-router-dom"

class ProfileClass extends React.Component {
  render() {
    return (
      <div className="warning">
        <h1>Profile</h1>
        <p>
          This is a example of <b>Nested Routes</b>
          <br />
          <br />
          <b>URL:</b> localhost:1234/about/profile-class
        </p>
      </div>
    )
  }
}

export default ProfileClass
