import React from "react"
import ReactDOM from "react-dom/client"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import App from "./App.jsx"
import { Home, PageNotFound, Menu, Cart } from "./pages"
import "./index.css"
import { Provider } from "react-redux"
import store from "./store/store"

const appConfig = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <PageNotFound />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "restaurant/:id",
        element: <Menu />
      },
      {
        path: "cart",
        element: <Cart />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <Provider store={store}>
    <RouterProvider router={appConfig} />
  </Provider>
  // </React.StrictMode>,
)
