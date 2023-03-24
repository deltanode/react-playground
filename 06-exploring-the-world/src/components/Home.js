import { useEffect, useState } from "react"
import { SWIGGY_PUBLIC_API } from "../Config" // This is named export
import ShimmerUI from "./Shimmer" // This is default export
import RestaurantCard from "./RestaurantCard"

// Filter the restaurant data according input type
function searchRestaurant(searchText, restaurantData) {
  const filterData = restaurantData.filter(restaurant => {
    return restaurant?.data?.name?.toLowerCase().includes(searchText.toLowerCase())
  })
  return filterData
}

const Home = () => {
  console.log("---Home---")
  // using State: To create a state variable: searchText, allRestaurants and filteredRestaurants is local state variable
  const [searchText, setSearchText] = useState("")
  const [allRestaurants, setAllRestaurants] = useState([])
  const [filteredRestaurants, setFilteredRestaurants] = useState([])
  const [searchResult, setSearchResult] = useState("")

  // using Effect: Now the function will be called one time only as dependency array is empty
  useEffect(() => {
    fetchRestaurantData()
  }, [])

  // async function fetchRestaurantData to fetch Swiggy API data
  async function fetchRestaurantData() {
    const data = await fetch(SWIGGY_PUBLIC_API)
    const jsonData = await data.json()
    // updated state variable restaurants with Swiggy API data
    setAllRestaurants(jsonData?.data?.cards[2]?.data?.data?.cards)
    // setAllRestaurants([])
    setFilteredRestaurants(jsonData?.data?.cards[2]?.data?.data?.cards)
  }
  // if allRestaurants is empty don't render restaurants cards. (It is known as Early Return)
  if (!allRestaurants) {
    console.log("I returned early")
    return null
  }

  return (
    <section className="section">
      <main className="home flex-container">
        {/************  Search ************/}
        <div className="search">
          <div className="search__box">
            {/* // In INPUT, we will be using "onChange" Event to update the state variable "searchText", when we are typing in input box */}
            <input className="search__input" value={searchText} onChange={e => setSearchText(e.target.value)} placeholder="Search Restaurant ..." />
            <button
              className="search__btn"
              onClick={() => {
                const data = searchRestaurant(searchText, allRestaurants)
                if (data.length === 0) {
                  setSearchResult("No Match Found !!!")
                } else {
                  // setSearchResult(`${data.length} matches found`)
                  setSearchResult("")
                }
                setFilteredRestaurants(data)
              }}
            >
              Search
            </button>
          </div>
          <div className="search__result">{searchResult}</div>
        </div>

        {/************  Resta
         * urantList ************/}
        <div className="restaurant">
          {allRestaurants?.length == 0 ? (
            <ShimmerUI />
          ) : (
            filteredRestaurants?.map(restaurant => {
              return <RestaurantCard key={restaurant?.data?.id} {...restaurant?.data} />
            })
          )}
        </div>
      </main>
    </section>
  )
}

export default Home
