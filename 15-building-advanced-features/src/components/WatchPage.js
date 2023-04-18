import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { closeSideBar } from "../utils/appSlice"
import { useSearchParams } from "react-router-dom"

const WatchPage = () => {
  const [searchParam] = useSearchParams()
  const videoId = searchParam.get("v")

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(closeSideBar())
  }, [])
  return (
    <div className="ml-16  mt-4">
      <iframe width="750" height="450" src={"https://www.youtube.com/embed/" + videoId} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      <h2 className="m-2">Video Title</h2>
    </div>
  )
}

export default WatchPage
