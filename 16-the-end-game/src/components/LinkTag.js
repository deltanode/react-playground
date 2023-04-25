import { Link } from "react-router-dom"

const LinkTag = ({ name, style, href }) => {
  return (
    <Link to={href} className={"flex gap-2 p-2 text-sm rounded-md text-gray-900 hover:bg-gray-200 " + style}>
      <span>O</span>
      <span className="capitalize">{name}</span>
    </Link>
  )
}

export default LinkTag
