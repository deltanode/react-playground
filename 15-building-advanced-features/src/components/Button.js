import React from "react"

const Button = ({ name, style }) => {
  return <div className={"mx-2 px-4 py-2 capitalize bg-gray-200 text-sm rounded-md hover:bg-gray-300 " + style}>{name}</div>
}

export default Button
