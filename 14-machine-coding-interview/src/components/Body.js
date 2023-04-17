import React from "react"
import SideBar from "./SideBar"
import { useSelector } from "react-redux"
import { Outlet } from "react-router-dom"

const Body = () => {
  const isMenuOpen = useSelector(store => store.app.isMenuOpen)
  return (
    <section className="">
      <div className="w-[1200px] mx-auto flex">
        {isMenuOpen && <SideBar />}
        <Outlet />
      </div>
    </section>
  )
}

export default Body
