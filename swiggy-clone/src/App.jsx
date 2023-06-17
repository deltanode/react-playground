import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import { RestaurantContextProvider } from "./contexts/RestaurantContext"
import style from "./style"

function App() {
  return (
    <div className={`w-full ${style.flexCenter} flex-col`}>
      {/* hearder */}
      <div className={`w-full ${style.flexStart} shadow-md`}>
        <div className={`${style.boxWidth} ${style.paddingX}`}>
          <Header />
        </div>
      </div>

      {/* pages */}
      <div className={`w-full ${style.flexStart} `}>
        <RestaurantContextProvider>
          <Outlet />
        </RestaurantContextProvider>
      </div>
    </div>
  )
}

export default App
