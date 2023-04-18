import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { openSideBar } from "../utils/appSlice"
import ButtonList from "./ButtonList"
import VideoContainer from "./VideoContainer"

const MainContainer = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(openSideBar())
  }, [])

  return (
    <div className="col-span-6">
      <ButtonList />
      <VideoContainer />
    </div>
  )
}

export default MainContainer
