import { useState, useEffect } from "react"
import useOnline from "../utils/useOnline"
import RestaurantCard from "./RestaurantCard"
import { SWIGGY_PUBLIC_API } from "../config"
import { filterRestaurant } from "../utils/helper"
import Shimmer from "./Shimmer"
import InternetErrorScreen from "./InternetErrorScreen"
// import { useOutletContext } from "react-router-dom"
import { useContext } from "react"
import UserContext from "../utils/UserContext"

const Home = props => {
  /* Note: props will not work as Home.js is rendered using <Outlet/> */
  // console.log("home(props): ", props)

  /* Using useOutletContext hook */
  // const user = useOutletContext()
  // console.log("home(useOutletContext): ", user)

  /* Example of using Context */
  // const { user } = useContext(UserContext)
  const { user, setUser } = useContext(UserContext)

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

  // if (!restaurants) return null

  const isOnline = useOnline()
  // if (!isOnline) {
  //   return <InternetErrorScreen />
  // }

  // Early Return
  if (restaurants?.length === 0) {
    return <Shimmer />
  }

  return (
    <div>
      {/* Internet Error Screen */}
      {!isOnline && <InternetErrorScreen />}

      <main className="w-[1024px] mx-auto my-4 p-2 bg-slate-0">
        {/* ----Search---- */}
        <div className="flex justify-center my-6">
          <div>
            <input
              data-testid="search-input"
              className="border-2 w-96 py-1 px-2"
              type="text"
              placeholder="Search Restaurant ..."
              value={searchTxt}
              onChange={e => {
                setSearchText(e.target.value)
              }}
            />
            <button
              data-testid="search-btn"
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

        {/* Practicing  & playing with Context: We will be updating UserContext from input */}
        <div className="flex justify-center items-center my-6">
          <label className="pr-2 text-blue-500">Modify/Override the "UserContext" : </label>
          <input className="border-2 w-48 py-1 px-2" type="text" value={user.name} onChange={e => setUser({ ...user, name: e.target.value })} />
          <input className="border-2 w-48 py-1 px-2" type="text" value={user.email} onChange={e => setUser({ ...user, email: e.target.value })} />
        </div>

        {/* ----Restaurants---- */}
        <div data-testid="res-list" className="flex flex-wrap m-2">
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
