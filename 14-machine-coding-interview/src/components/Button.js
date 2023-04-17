import React from "react"

const Button = ({ name }) => {
  return (
    <>
      <button className="bg-gray-100 mx-1 py-1 px-2 rounded-md capitalize">{name}</button>
    </>
  )
}

export default Button
