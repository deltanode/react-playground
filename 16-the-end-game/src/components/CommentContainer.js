import Comment from "./Comment"
import { commentData } from "../utils/constant"

const CommentList = ({ comments }) => {
  const color = ["red", "green", "yellow", "blue"]
  return (
    <div className="border-l">
      {comments.map((commentData, index) => {
        return (
          <div key={index}>
            <Comment {...commentData} />
            <div className="ml-4 ">
              <CommentList comments={commentData.replies} />
            </div>
          </div>
        )
      })}
    </div>
  )
}

const CommentContainer = () => {
  return (
    <div className="w-[100%]">
      <h2 className="mt-4 text-lg font-bold">Comments: </h2>
      <CommentList comments={commentData} />
    </div>
  )
}

export default CommentContainer
