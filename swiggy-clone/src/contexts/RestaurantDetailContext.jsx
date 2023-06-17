import { createContext, useContext } from "react"

const RestaurantDetailContext = createContext()
RestaurantDetailContext.displayName = RestaurantDetailContext

export function RestaurantDetailContextProvider({ children }) {
  return <RestaurantDetailContext.Provider value={{}}>{children}</RestaurantDetailContext.Provider>
}

export function useRestaurantDetailContext() {
  return useContext(RestaurantDetailContext)
}
