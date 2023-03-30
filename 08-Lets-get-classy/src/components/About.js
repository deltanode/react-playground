import React from "react"
// import ProfileFunctionalComponent from "./ProfileFunctionComponent1"
// import ProfileClassComponent from "./ProfileClassComponent1"
// import ProfileFunctionalComponent from "./ProfileFunctionComponent2"
// import ProfileClassComponent from "./ProfileClassComponent2"
// import ProfileFunctionalComponent from "./ProfileFunctionComponent3"
// import ProfileClassComponent from "./ProfileClassComponent3"

import ProfileFunctionalComponent from "./ProfileFunctionComponent4"
import { Outlet } from "react-router-dom"

const About = () => {
  return (
    <div className="flex-container">
      <h2 className="warning">About</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, adipisci?</p>
      <Outlet />
      {/* <ProfileFunctionalComponent name="Ram111" address="India" /> */}
      {/* <ProfileClassComponent name="Ram" address="India" /> */}

      <ProfileFunctionalComponent />
    </div>
  )
}

export default About
