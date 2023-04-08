import NavElement from "./NavElement"
import { Link } from "react-router-dom"
import { useContext } from "react"
import UserContext from "../utils/UserContext"

const NavMenu = () => {
  /* accessing Context using useContext() hook */
  const { user } = useContext(UserContext)
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
      <span className="pl-2 text-green-500">{"Hi, " + user.name}</span>
    </ul>
  )
}

export default NavMenu
