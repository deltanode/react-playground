import { Link } from "react-router-dom"

const NavMenu = () => {
  return (
    <div className="nav__menu">
      <ul className="nav__list">
        <li className="nav__item">
          <Link to="/" className="nav__link">
            Home
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/about" className="nav__link">
            About
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/contact" className="nav__link">
            Contact
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/login" className="nav__link warning">
            LOGIN-PAGE
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/instamart" className="nav__link green">
            InstaMart
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default NavMenu
