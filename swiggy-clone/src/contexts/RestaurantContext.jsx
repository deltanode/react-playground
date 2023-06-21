import { createContext, useContext, useEffect, useState } from "react"
import { SWIGGY_API } from "../utils/request"
import { RESTAURANT_JSON_DATA } from "../mocks/data"

// create context
const RestaurantContext = createContext()
RestaurantContext.displayName = "RestaurantContext"

// context provider
export function RestaurantContextProvider({ children }) {
  const [isLoading, setIsLoading] = useState()
  const [serverError, setServerError] = useState()
  const [restautants, setRestaurants] = useState([])
  const [displayRestautants, setDisplayRestaurants] = useState(null)
  const [totalOpenRestautants, setTotalOpenRestaurants] = useState(null)
  const [sortOptions, setSortOptions] = useState([])
  const [filterOptions, setFilterOptions] = useState([])
  const [configOptions, setConfigOptions] = useState([])
  const [configOptions2, setConfigOptions2] = useState([])
  const [filterSearchValue, setFilterSearchValue] = useState(new Set())

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const response = await fetch(SWIGGY_API)
        const apiData = await response.json()
        // const apiData = RESTAURANT_JSON_DATA
        setRestaurants(apiData?.data?.cards[2]?.data?.data?.cards)
        setDisplayRestaurants(apiData?.data?.cards[2]?.data?.data?.cards)
        setTotalOpenRestaurants(apiData?.data?.cards[2]?.data?.data?.totalOpenRestaurants)
        setSortOptions(apiData?.data?.sorts)
        setFilterOptions(apiData?.data?.filters)
        setConfigOptions(apiData?.data?.cards[0]?.data?.data?.cards)
        setConfigOptions2(apiData?.data?.cards[1]?.data?.data?.cards)
        setIsLoading(false)
      } catch (err) {
        setServerError(err.message)
        setIsLoading(false)
      }
    }
    fetchData()
  }, [])

  // console.log("RestaurantContext is running")

  return <RestaurantContext.Provider value={{ filterSearchValue, setFilterSearchValue, restautants, displayRestautants, setDisplayRestaurants, totalOpenRestautants, sortOptions, filterOptions, configOptions, configOptions2, serverError, isLoading }}>{children}</RestaurantContext.Provider>
}

// use context
export function useRestaurantContext() {
  return useContext(RestaurantContext)
}
