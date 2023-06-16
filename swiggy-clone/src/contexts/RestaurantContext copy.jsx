import { createContext, useContext, useState } from "react"
import { SWIGGY_API } from "../utils/request"
import useFetch from "../utils/useFetch"

// create context
const RestaurantContext = createContext()
RestaurantContext.displayName = "RestaurantContext"

// context provider
export function RestaurantContextProvider({ children }) {
  const [isLoading, setIsLoading] = useState()
  const [serverError, setServerError] = useState()
  const [restautants, setRestaurants] = useState([])
  const [displayRestautants, setDisplayRestaurants] = useState([])
  const [totalOpenRestautants, setTotalOpenRestaurants] = useState([])
  const [sortOptions, setSortOptions] = useState([])
  const [filterOptions, setFilterOptions] = useState([])
  const [configOptions, setConfigOptions] = useState([])

  async function loadData() {
    const { isLoading, apiData, serverError } = await useFetch(SWIGGY_API)
    setIsLoading(isLoading)
    setServerError(serverError)
    setRestaurants(apiData?.data?.cards[2]?.data?.data?.cards)
    setDisplayRestaurants(apiData?.data?.cards[2]?.data?.data?.cards)
    setTotalOpenRestaurants(apiData?.data?.cards[2]?.data?.data?.totalOpenRestaurants)
    setSortOptions(apiData?.data?.sorts)
    setFilterOptions(apiData?.data?.filters)
    setConfigOptions(apiData?.data?.configs)
  }
  loadData()

  return <RestaurantContext.Provider value={{ restautants, displayRestautants, setDisplayRestaurants, totalOpenRestautants, sortOptions, filterOptions, configOptions, serverError, isLoading }}>{children}</RestaurantContext.Provider>
}

// use context
export function useRestaurantContext() {
  return useContext(RestaurantContext)
}
