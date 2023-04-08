import Logo from "./Logo"
import NavMenu from "./NavMenu"

const Header = props => {
  /* Example of Props Driling */
  // console.log("header: ", props)
  return (
    <div className="shadow-md ">
      <nav className="w-[1024px] mx-auto px-2 py-3 flex justify-between items-center">
        <Logo {...props} />
        <NavMenu />
        {/* <h1>{"Hi," + props.name + " | " + props.name}</h1> */}
      </nav>
    </div>
  )
}

export default Header
