import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { closeSideBar } from "../utils/appSlice"
import { useSearchParams } from "react-router-dom"
import CommentContainer from "./CommentContainer"

const WatchPage = () => {
  const [searchParam] = useSearchParams()
  const videoId = searchParam.get("v")

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(closeSideBar())
  }, [])
  return (
    <div className="col-span-4 p-2">
      <iframe className="w-[100%]" height="450" src={"https://www.youtube.com/embed/" + videoId} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      <CommentContainer />
      <div className="w-[100%]"></div>
    </div>
  )
}

export default WatchPage
