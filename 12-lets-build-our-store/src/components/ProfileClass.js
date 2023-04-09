import React from "react"
import UserContext from "../utils/UserContext"

class ProfileClass extends React.Component {
  render() {
    return (
      <div>
        <h2 className="text-red-700 text-large mt-3 mb-2">Profile:</h2>
        <p>This is a Class Component</p>
        <br />
        {/* accessing Context as component in class-based component using <ContextName.Consumer> */}
        <UserContext.Consumer>{({ user }) => <span className="text-green-500">NAME: {user.name} [NOTE: "name" is coming from Context & This is class based component]</span>}</UserContext.Consumer>
      </div>
    )
  }
}

export default ProfileClass
