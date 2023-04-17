import React from "react"
import { Link } from "react-router-dom"

const VideoCard = props => {
  const { id, snippet, statistics } = props
  const { title, channelTitle, thumbnails, publishedAt } = snippet
  const { viewCount } = statistics
  const avatar = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlR3hMw_3daUL3Uhr5Y3uJh_kMaYzyqQhhPA&usqp=CAU"
  // console.log(snippet)
  return (
    <Link to={"watch?v=" + id}>
      <div className="w-72 flex flex-wrap gap-2">
        <img className="" src={thumbnails?.medium?.url} alt="" />
        <div className="flex items-start gap-2">
          <img className="w-10" src={avatar} alt="" />
          <div className="">
            <h2 className="">{title}</h2>
            <h3 className="text-gray-600">{channelTitle}</h3>
            <span className="flex gap-2 text-gray-600">
              <p>{viewCount} views</p>
              <p>. {publishedAt} ago</p>
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default VideoCard
