const Comment = data => {
  const { name, text } = data
  return (
    <div className=" my-2 border-r flex items-start">
      <img className="w-12 p-2" alt="user" src="https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg" />
      <div className="p-2">
        <h3 className="font-semibold">{name}</h3>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Comment
