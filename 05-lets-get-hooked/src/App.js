import React from "react"
import reactDOM from "react-dom/client"
import Header, { Logo } from "./components/Header"

const AppLayout = () => {
  return (
    <>
      <Header></Header>
    </>
  )
}

const root = reactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout />)
