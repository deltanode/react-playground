import React, { useState, useEffect } from "react"
import Shimmer from "./Shimmer"
import { SWIGGY_PUBLIC_API } from "../Config"
import RestaurantCard from "./RestaurantCard"
import { filterRestaurant } from "../utils/helper"

const Home = () => {
  // console.log("---Home---")
  // -----useState -------
  const [searchText, setSearchText] = useState("")
  const [allRestaurant, setAllRestaurant] = useState([])
  const [filteredRestaurant, setFilteredRestaurant] = useState([])
  const [error, setError] = useState("")
  // -----useEffect -------
  useEffect(() => {
    // console.log("I am useEffect (inside <HOME/>)")
    getRestaurantData()
  }, [])

  async function getRestaurantData() {
    const data = await fetch(SWIGGY_PUBLIC_API)
    const json = await data.json()
    const restaurant = json?.data?.cards[2]?.data?.data?.cards
    // console.log(restaurant)
    setAllRestaurant(restaurant)
    setFilteredRestaurant(restaurant)
  }
  return (
    <section className="section">
      <main className="home flex-container">
        {/* ***** Search Restaurants***** */}
        <div className="search">
          <div className="search__box">
            <input className="search__input" value={searchText} onChange={e => setSearchText(e.target.value)} placeholder="Search Restaurant ..." />
            <button
              className="search__btn"
              onClick={e => {
                const data = filterRestaurant(searchText, allRestaurant)
                if (data.length === 0) {
                  setError("No Match Found")
                } else {
                  setError("")
                }
                setFilteredRestaurant(data)
              }}
            >
              Search
            </button>
          </div>
          {/* **** Display Search Result ***** */}
          <div className="search__result warning">{error}</div>
        </div>
        {/* ***** Display Restaurant ***** */}
        <div className="restaurant">
          {!allRestaurant?.length ? (
            <Shimmer />
          ) : (
            filteredRestaurant?.map(restaurant => {
              return <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
            })
          )}
        </div>
      </main>
    </section>
  )
}

export default Home
