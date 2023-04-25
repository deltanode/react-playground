import { useEffect, useState } from "react"
import VideoCard, { AdVideoCard } from "./VideoCard"
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
      {/* Create a ADVideoCard using higher order component */}
      {videos[8] && <AdVideoCard {...videos[8]} />}
      {videos?.map(videoInfo => (
        <VideoCard key={videoInfo.id} {...videoInfo} />
      ))}
    </div>
  )
}

export default VideoContainer
