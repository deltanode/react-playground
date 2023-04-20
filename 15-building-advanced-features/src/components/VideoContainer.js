import { useEffect, useState } from "react"
import VideoCard from "./VideoCard"
import { YOUTUBE_VIDEO_API } from "../utils/constant"

const VideoContainer = () => {
  const [videos, setVideos] = useState([])

  useEffect(() => {
    getVideos()
  }, [])

  async function getVideos() {
    const data = await fetch(YOUTUBE_VIDEO_API)
    const json = await data.json()
    // console.log("json: ", json)
    setVideos(json.items)
  }
  return (
    <div className="mx-2 my-4 flex flex-wrap gap-3">
      {videos?.map(videoInfo => (
        <VideoCard key={videoInfo.id} {...videoInfo} />
      ))}
    </div>
  )
}

export default VideoContainer
