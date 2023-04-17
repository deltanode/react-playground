import React from "react"
import Button from "./Button"

const ButtonList = () => {
  const btnList = ["music", "arts", "jazz", "hip-hop", "dance", "history", "news", "hip-hop", "dance", "history", "news"]
  return (
    <div className="flex mb-2">
      {btnList.map((name, index) => (
        <Button name={name} key={index} />
      ))}
    </div>
  )
}

export default ButtonList
