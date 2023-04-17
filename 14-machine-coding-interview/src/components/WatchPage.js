import React, { useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import { useDispatch } from "react-redux"
import { closeSidebar } from "../utils/appSlice"

const WatchPage = () => {
  const [searchParam] = useSearchParams()
  // console.log(searchParam.get("v"))
  const videoId = searchParam.get("v")

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(closeSidebar())
  }, [])

  return (
    <div className="m-2 p-2">
      <iframe width="800" height="500" src={"https://www.youtube.com/embed/" + videoId} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      <h2 className="m-2">Video Title</h2>
    </div>
  )
}

export default WatchPage
