import React from "react"
import Link from "./LinkTag"

const SideBar = () => {
  const sideBarData = {
    l1: ["shorts", "subscriptions", "originals"],
    l2: ["Watch Later", "Downloads", "Library", "History"],
    l3: ["Your Videos", "Your Courses", "Show More"]
  }
  return (
    <div className="col-span-1 p-2">
      <Link name="home" style="bg-gray-300 text-black " />
      {Object.keys(sideBarData).map(key => {
        return (
          <div key={key} className="border-b py-2">
            {sideBarData[key].map(linkName => {
              return <Link key={linkName} name={linkName} />
            })}
          </div>
        )
      })}
    </div>
  )
}

export default SideBar
