import { LOGO_URL } from "../constants"
import Nav from "./Nav"

// Logo Componnent
export const Logo = () => <img className="nav__logo" src={LOGO_URL}></img>

// Header Component
const Header = () => {
  return (
    <header className="header">
      <nav className="nav container">
        <Logo />
        <Nav />
      </nav>
    </header>
  )
}

export default Header
