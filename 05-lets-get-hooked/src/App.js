import React from "react"
import reactDOM from "react-dom/client"
import Header, { Logo } from "./components/Header"
import Home from "./components/Home"

/**
 * File Structure:-
 *
 * AppLayout
 * |--Header
 * |  |-- Logo
 * |  |-- Nav
 * |--Home
 * |  |--Restaurant
 * |     |-- Search
 * |     |--RestaurantCard
 * |--Footer
 */

const AppLayout = () => {
  return (
    <>
      <Header />
      <Home />
    </>
  )
}

const root = reactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout />)
