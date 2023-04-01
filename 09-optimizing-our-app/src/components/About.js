import React from "react"
import { Link, Outlet } from "react-router-dom"

const About = () => {
  return (
    <div className="about flex-container">
      <h1>This is About Us page</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos debitis ipsa, atque itaque molestias nulla iusto sapiente quam vero laboriosam dolore dolores ratione. Omnis molestiae, maiores ex itaque debitis sapiente.</p>
      <p>
        View: <Link to="profile"> Profile [create using Functional Component]</Link>
      </p>
      <p>
        View: <Link to="profile-class"> Profile [create using Class Component]</Link>
      </p>
      <Outlet />
    </div>
  )
}

export default About
