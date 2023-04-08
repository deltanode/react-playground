import { useContext } from "react"
import UserContext from "../utils/UserContext"

const Footer = () => {
  /* accessing Context using useContext() hook */
  const { user } = useContext(UserContext)
  return (
    <div className="shadow-inner mt-4 py-6 text-center text-gray-500">
      {/* Copyright */}
      <p className="">
        @2023 | All Right Reserved | <span className="text-green-500">{user.name}</span>
      </p>
    </div>
  )
}

export default Footer
