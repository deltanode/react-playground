import React, { useEffect, useState } from "react"
import VideoCard from "./VideoCard"
import { YOUTUBE_API_URL } from "../constant"

const VideoContainer = () => {
  const [videos, setVideos] = useState([])

  useEffect(() => {
    getVideos()
  }, [])

  async function getVideos() {
    const data = await fetch(YOUTUBE_API_URL)
    const json = await data.json()
    // console.log("json: ", json.items)
    setVideos(json.items)
  }

  return (
    <div className="mt-2 p-2 flex flex-wrap gap-4">
      {videos?.map(card => {
        return <VideoCard key={card?.id} {...card} />
      })}
    </div>
  )
}

export default VideoContainer
