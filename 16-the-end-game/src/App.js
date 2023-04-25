import { Outlet } from "react-router-dom"
import Header from "./components/Header"
// import Body from "./components/Body"
import { Provider } from "react-redux"
import store from "./utils/store"

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      {/* <Body /> */}
      <Outlet />
    </Provider>
  )
}

export default App
