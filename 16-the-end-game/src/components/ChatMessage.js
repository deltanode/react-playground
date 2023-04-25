const ChatMessage = ({ username, message }) => {
  return (
    <div className="flex flex-wrap gap-1 items-start py-1 shadow-sm">
      <img className="w-6 cursor-pointer hover:opacity-80" alt="user" src="https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg" />
      <h3 className="font-medium">{username}</h3>
      <p>{message}</p>
    </div>
  )
}

export default ChatMessage
