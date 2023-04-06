import { useState, useEffect } from "react"
import useOnline from "../utils/useOnline"
import RestaurantCard from "./RestaurantCard"
import { SWIGGY_PUBLIC_API } from "../config"
import { filterRestaurant } from "../utils/helper"
import Shimmer from "./Shimmer"
import InternetErrorScreen from "./InternetErrorScreen"

const Home = () => {
  const [restaurants, setRestaurents] = useState([])
  const [filteredRestaurants, setFilteredRestaurents] = useState([])
  const [searchTxt, setSearchText] = useState("")
  const [searchResult, setSearchResult] = useState("")

  useEffect(() => {
    getRestaurants()
  }, [])

  async function getRestaurants() {
    const data = await fetch(SWIGGY_PUBLIC_API)
    const json = await data.json()
    const restaurantData = json?.data?.cards[2]?.data?.data?.cards
    // console.log(restaurantData)
    setRestaurents(restaurantData)
    setFilteredRestaurents(restaurantData)
  }

  const isOnline = useOnline()
  // if (!isOnline) {
  //   return <InternetErrorScreen />
  // }

  // Early Return
  if (restaurants.length === 0) {
    return <Shimmer />
  }

  return (
    <div className="">
      {/* Internet Error Screen */}
      {isOnline ? null : <InternetErrorScreen />}

      <main className="w-[1024px] mx-auto my-4 p-2 bg-slate-0">
        {/* ----Search---- */}
        <div className="flex justify-center my-6">
          <div>
            <input
              className="border-2 w-96 py-1 px-2"
              type="text"
              placeholder="Search Restaurant ..."
              value={searchTxt}
              onChange={e => {
                setSearchText(e.target.value)
              }}
            />
            <button
              className="btn btn-hover"
              onClick={() => {
                // console.log(searchTxt)
                const filteredData = filterRestaurant(searchTxt, restaurants)
                if (filteredData == 0) {
                  setSearchResult("No Match found ")
                } else {
                  setSearchResult("")
                }
                // console.log(filteredData)
                setFilteredRestaurents(filteredData)
              }}
            >
              Search
            </button>
          </div>
        </div>

        {/* ----Restaurants---- */}
        <div className="flex flex-wrap m-2">
          {searchResult !== "" ? (
            <div className="w-[100%] text-center text-red-500 mt-4 mb-8">No Match Found</div>
          ) : (
            filteredRestaurants.map(restaurant => {
              // console.log({ ...restaurant.data })
              return <RestaurantCard key={restaurant?.data?.id} {...restaurant?.data} />
            })
          )}
        </div>
      </main>
    </div>
  )
}

export default Home
