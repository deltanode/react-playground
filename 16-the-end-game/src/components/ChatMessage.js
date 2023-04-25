const ChatMessage = ({ username, message }) => {
  return (
    <div className="flex flex-wrap gap-1 items-start py-1 shadow-sm">
      <img className="w-6 cursor-pointer hover:opacity-80" alt="user" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" />
      <h3 className="font-medium">{username}</h3>
      <p>{message}</p>
    </div>
  )
}

export default ChatMessage
