import React from "react"
// import ProfileClassComponent from "./ProfileClassComponent4"
// import ProfileClassComponent1 from "./ProfileClassComponent5"
// import ProfileClassComponent2 from "./ProfileClassComponent6"
// import ProfileClassComponent from "./ProfileClassComponent7"
import ProfileClassComponent from "./ProfileClassComponent8"

class AboutClassComponent extends React.Component {
  constructor() {
    super()
    // console.log("Parent: constructor()")
  }

  componentDidMount() {
    // console.log("Parent: componentDidMount()")
  }

  render() {
    // console.log("Parent: render()")
    return (
      <div className="flex-container">
        <h2 className="warning">About</h2>

        <ProfileClassComponent />

        {/* <ProfileClassComponent1 /> */}
        {/* <ProfileClassComponent2 /> */}
      </div>
    )
  }
}

export default AboutClassComponent
