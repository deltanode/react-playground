import { Link } from "react-router-dom"

const NavElement = props => {
  return (
    <li className={"pl-4 text-gray-800 hover:text-orange-400 " + props.style}>
      <Link to={props.href} className="">
        {props.children}
      </Link>
    </li>
  )
}

export default NavElement
