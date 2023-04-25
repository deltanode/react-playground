const LinkTag = ({ name, style }) => {
  return (
    <div className={"flex gap-2 p-2 text-sm rounded-md text-gray-900 hover:bg-gray-200 " + style}>
      <span>O</span>
      <span className="capitalize">{name}</span>
    </div>
  )
}

export default LinkTag
