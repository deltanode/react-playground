import React from "react"
import LinkTag from "./LinkTag"

const SideBar = () => {
  const sideBarData = {
    l1: ["shorts", "subscriptions", "originals"],
    l2: ["Watch Later", "Downloads", "Library", "History"],
    l3: ["Your Videos", "Your Courses", "Show More"]
  }
  return (
    <div className="col-span-1 p-2">
      <div className="border-b pb-2">
        <LinkTag name="home" href="/" style="bg-gray-300 text-black " />
        <LinkTag name="useMemo/useRef" href="/demo" />
      </div>

      {Object.keys(sideBarData).map(key => {
        return (
          <div key={key} className="border-b py-2">
            {sideBarData[key].map(linkName => {
              return <LinkTag key={linkName} name={linkName} href="/" />
            })}
          </div>
        )
      })}
    </div>
  )
}

export default SideBar
