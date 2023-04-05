import Logo from "./Logo"
import NavMenu from "./NavMenu"

const Header = () => {
  return (
    <div className="shadow-md ">
      <nav className="w-[1024px] mx-auto px-2 py-3 flex justify-between items-center">
        <Logo />
        <NavMenu />
      </nav>
    </div>
  )
}

export default Header
