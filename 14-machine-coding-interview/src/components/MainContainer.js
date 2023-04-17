import React from "react"
import ButtonList from "./ButtonList"
import VideoContainer from "./VideoContainer"

const MainContainer = () => {
  return (
    <main className="border m-2 p-2 grow ">
      <ButtonList />
      <VideoContainer />
    </main>
  )
}

export default MainContainer
