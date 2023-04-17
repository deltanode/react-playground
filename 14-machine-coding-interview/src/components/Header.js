import React from "react"
import { useDispatch } from "react-redux"
import { toggleSidebar } from "../utils/appSlice"
// import { Link } from "react-router-dom"

const Header = () => {
  const dispatch = useDispatch()
  function handleToggle() {
    dispatch(toggleSidebar())
  }

  return (
    <div className="shadow-md">
      <header className="w-[1200px] mx-auto flex p-2 justify-between items-center">
        <div className="flex items-center">
          <button className="cursor-pointer">
            <img onClick={() => handleToggle()} className="w-6 " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgz8qMxRmaHif6zYN0OyOJ2zi8gBulBwLPnw&usqp=CAU" alt="menu" />
          </button>
          <a href="/">
            <img className="w-24  pl-3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMzqLGj4nnVHSqs3ydU8FFlP7JjOq50ccCWg&usqp=CAU" alt="logo" />
          </a>
        </div>

        <div className="">
          <input className="border-2 border-gray-300 p-1 rounded-l-full w-96" type="text" />
          <button className="bg-gray-300 py-1 px-3 border-2 border-gray-300 text-white rounded-r-full">search</button>
        </div>

        <div className="">
          <img className="w-8" src="https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg" alt="user" />
        </div>
      </header>
    </div>
  )
}

export default Header
