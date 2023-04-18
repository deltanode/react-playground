import { Link } from "react-router-dom"

const VideoCard = videoInfo => {
  const { id, snippet, statistics } = videoInfo
  const { title, channelTitle, thumbnails } = snippet
  const { viewCount } = statistics
  // console.log(videoInfo)
  return (
    <Link to={"watch?v=" + id}>
      <div className="w-[16rem] rounded-lg">
        <img className="rounded-lg" alt="thumbnail" src={thumbnails.medium.url} />
        <div className="mt-2 flex items-start gap-2">
          <img className="w-8" alt="user" src="https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg" />
          <div className="">
            <h2 className="">{title}</h2>
            <h3 className="text-gray-500 text-sm">{channelTitle}</h3>
            <h4 className="text-gray-500 text-sm">{viewCount} views </h4>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default VideoCard
