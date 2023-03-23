import Logo from "./Logo"
import NavMenu from "./NavMenu"
import { useState } from "react"

const Header = () => {
  const [isLoggedin, setIsLoggedin] = useState(false)
  return (
    <section className="header">
      <nav className="nav flex-container">
        <Logo />
        <span className="nav__wrapper">
          <NavMenu />

          {/* Rendering Login & Logout button using conditional rendering*/}
          {isLoggedin ? (
            <button className="nav__btn" onClick={() => setIsLoggedin(false)}>
              Logout
            </button>
          ) : (
            <button className="nav__btn" onClick={() => setIsLoggedin(true)}>
              Login
            </button>
          )}
        </span>
      </nav>
    </section>
  )
}

export default Header
