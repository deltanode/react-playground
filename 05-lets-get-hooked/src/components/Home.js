import { useState } from "react"
import { restaurantList } from "../constants"
// import Restaurants from "./Restaurants"
import RestaurantCard from "./RestaurantCard"
// import Search from "./Search"

function filterRestaurant(searchText, restaurantList) {
  const data = restaurantList.filter(restaurant => restaurant.data.name.includes(searchText))
  return data
}

const Home = () => {
  const [restaurantData, setRestaurantData] = useState(restaurantList)
  const [searchText, setSearchText] = useState("")
  return (
    <main className="main">
      <section className="home container">
        {/* <Search restaurantList={restaurantData} /> */}
        <div className="search">
          <input className="search__input" type="text" placeholder="Search Restaurants ..." value={searchText} onChange={e => setSearchText(e.target.value)}></input>
          <button
            className="search__button"
            onClick={() => {
              const data = filterRestaurant(searchText, restaurantData)
              console.log(data)
              setRestaurantData(data)
            }}
          >
            Search
          </button>
        </div>

        {/* <Restaurants restaurantList={restaurantData} /> */}
        {/* <Restaurants /> */}
        <div className="restaurant">
          {restaurantData.map(restaurant => {
            return <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          })}
        </div>
      </section>
    </main>
  )
}

export default Home
