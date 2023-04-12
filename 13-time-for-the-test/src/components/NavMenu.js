import NavElement from "./NavElement"
import { useContext, useState } from "react"
import UserContext from "../utils/UserContext"
import { useSelector } from "react-redux"
import useOnline from "../utils/useOnline"

const NavMenu = () => {
  const [isLoggedin, setIsLoggedin] = useState(false)

  const isOnline = useOnline()

  /* accessing Context using useContext() hook */
  const { user } = useContext(UserContext)

  // Redux-Toolkit: Subscrbing to the component
  const cartItems = useSelector(store => store.cart.items)
  console.log("NavMenu: ", cartItems)
  return (
    <ul className="flex items-center">
      <NavElement href="/">Home</NavElement>
      <NavElement href="/about">About</NavElement>
      <NavElement href="/contact">Contact</NavElement>
      <NavElement href="/shimmer">Shimmer</NavElement>

      <NavElement href="/cart" style="text-red-600">
        Cart <span className="p-1 bg-red-500 text-white rounded-md">{cartItems.length}</span>
      </NavElement>

      <NavElement href="/login-form" style="text-red-700 hover:text-red-300">
        Login-Form
      </NavElement>

      {/* <li className=" nav-link nav-link-hover">
        <Link to="/login-form" className="">
        Login-Form
        </Link>
      </li> */}

      <NavElement href="/instamart" style="text-purple-700 hover:text-red-300">
        InstaMart
      </NavElement>

      {/* Rendering Login & Logout button using conditional rendering*/}
      {isLoggedin ? (
        <button className="btn btn-hover" onClick={() => setIsLoggedin(false)}>
          Logout
        </button>
      ) : (
        <button className="btn btn-hover" onClick={() => setIsLoggedin(true)}>
          Login
        </button>
      )}

      {/* Rendering statue of internet network connection using conditional rendering*/}
      {isOnline ? <span className="pl-2 text-grey-500"> Internet: &#9989; | </span> : <span className="pl-2 text-grey-500"> Internet: &#10060; | </span>}

      <span className="pl-2 text-green-500">{"Hi, " + user.name}</span>
    </ul>
  )
}

export default NavMenu
