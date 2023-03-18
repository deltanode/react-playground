import Logo from "./Logo"
import NavMenu from "./NavMenu"
import Login from "./Login"

const Header = () => {
  return (
    <section className="header">
      <nav className="nav container">
        <Logo />
        <span className="nav__wrapper">
          <NavMenu />
          <Login />
        </span>
      </nav>
    </section>
  )
}

export default Header
