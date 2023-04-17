import React from "react"

const Link = ({ name, img, active }) => {
  return (
    <div className={"flex gap-4 text-gray-900 text-sm  mt-2 p-1.5  rounded-md " + active}>
      {/* <img src="" alt="" /> */}
      <span>{img}</span>
      <span>{name}</span>
    </div>
  )
}

export default Link
