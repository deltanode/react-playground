import style from "./style"
import Header from "./components/Header"
import Home from "./pages/Home"
import { RestaurantContextProvider } from "./contexts/RestaurantContext"

function App() {
  return (
    <div className={`w-full ${style.flexStart} flex-col`}>
      <div className="w-full shadow-md">
        <div className={`${style.boxWidth} ${style.paddingX}`}>
          <Header />
        </div>
      </div>

      <div className={`${style.boxWidth} ${style.paddingX}`}>
        <RestaurantContextProvider>
          <Home />
        </RestaurantContextProvider>
      </div>
    </div>
  )
}

export default App
