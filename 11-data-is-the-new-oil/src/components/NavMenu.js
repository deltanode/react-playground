import NavElement from "./NavElement"
import { Link } from "react-router-dom"

const NavMenu = () => {
  return (
    <ul className="flex items-center">
      <NavElement href="/">Home</NavElement>
      <NavElement href="/about">About</NavElement>
      <NavElement href="/contact">Contact</NavElement>
      <NavElement href="/shimmer">Shimmer</NavElement>
      <NavElement href="/login-form" style="text-red-700 hover:text-red-300">
        Login-Form
      </NavElement>
      <NavElement href="/instamart" style="text-purple-700 hover:text-red-300">
        InstaMart
      </NavElement>
      {/* <li className=" nav-link nav-link-hover">
        <Link to="/login-form" className="">
          Login-Form
        </Link>
      </li> */}
      <button className="btn btn-hover">Login</button>
    </ul>
  )
}

export default NavMenu
