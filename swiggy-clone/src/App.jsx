import style from "./style"
import Header from "./components/Header"
import { Home } from "./pages"
import { RestaurantContextProvider } from "./contexts/RestaurantContext"

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
          <Home />
        </RestaurantContextProvider>
      </div>
    </div>
  )
}

export default App
