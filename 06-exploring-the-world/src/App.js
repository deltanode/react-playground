import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Home from "./components/Home"
import Footer from "./components/Footer"

const AppLayout = () => {
  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout />)
