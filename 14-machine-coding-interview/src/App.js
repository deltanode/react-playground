import "./App.css"
import { Provider } from "react-redux"
import store from "./utils/store"
import Body from "./components/Body"
import Header from "./components/Header"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import MainContainer from "./components/MainContainer"
import WatchPage from "./components/WatchPage"

const appConfig = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />
      },
      {
        path: "watch",
        element: <WatchPage />
      }
    ]
  }
])

function App() {
  return (
    <div>
      <Provider store={store}>
        <Header />
        <RouterProvider router={appConfig} />
      </Provider>
    </div>
  )
}

export default App
