import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { PageNotFound } from "./pages"

const appConfig = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <PageNotFound />
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <RouterProvider router={appConfig} />
  // </React.StrictMode>,
)
