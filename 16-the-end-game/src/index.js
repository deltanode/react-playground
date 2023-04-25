import React from "react"
import ReactDOM from "react-dom/client"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import App from "./App"

import Body from "./components/Body"
import WatchPage from "./components/WatchPage"
import MainContainer from "./components/MainContainer"

const appConfig = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
        children: [
          {
            path: "/",
            element: <MainContainer />
          },
          {
            path: "/watch",
            element: <WatchPage />
          }
        ]
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(<App />)
root.render(<RouterProvider router={appConfig} />)
