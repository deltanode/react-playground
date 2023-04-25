import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { closeSideBar } from "../utils/appSlice"
import { useSearchParams } from "react-router-dom"
import CommentContainer from "./CommentContainer"
import LiveChat from "./LiveChat"

const WatchPage = () => {
  const [searchParam] = useSearchParams()
  const videoId = searchParam.get("v")

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(closeSideBar())
  }, [])
  return (
    <>
      <div className="col-span-5 p-2">
        <iframe className="w-[100%]" height="450" src={"https://www.youtube.com/embed/" + videoId} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </div>

      <div className="col-span-2 mt-2 border bg-slate-50 rounded-md">
        <LiveChat />
      </div>

      <div className="col-span-5 p-2">
        <CommentContainer />
      </div>
    </>
  )
}

export default WatchPage
