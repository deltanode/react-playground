import Button from "./Button"

const ButtonList = () => {
  const btnList = ["music", "arts", "jazz", "hip-hop", "dance", "history", "news", "watched", "New to you", "Recently uploaded"]
  return (
    <div className="flex my-2 items-start">
      <Button name="All" style=" bg-black text-white" />

      {btnList.map(btnName => (
        <Button name={btnName} key={btnName} />
      ))}
    </div>
  )
}

export default ButtonList
