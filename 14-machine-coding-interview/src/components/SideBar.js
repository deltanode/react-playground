import React from "react"
import Link from "./Link"

const SideBar = () => {
  const list1 = ["Shorts", "Subscriptions", "Originals"]
  const list2 = ["Library", "History", "Your Videos", "Your Courses", "Watch Later", "Downloads", "Show More"]
  return (
    <aside className="p-2 w-48">
      <Link name="Home" img="O" active="bg-gray-200 text-black" />
      {list1.map((name, index) => {
        return <Link key={index} name={name} img="O" />
      })}
      <hr className="my-2" />
      {list2.map((name, index) => {
        return <Link key={index} name={name} img="O" />
      })}
      <hr className="my-2" />
    </aside>
  )
}

export default SideBar
