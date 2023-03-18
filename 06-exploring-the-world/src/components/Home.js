import Restaurant from "./Restaurant"
import { SWIGGY_PUBLIC_API } from "../Config"
import { useEffect, useState } from "react"

const Home = () => {
  const [restaurantData, setRestaurantData] = useState([])

  useEffect(async () => {
    const data = await fetch(SWIGGY_PUBLIC_API)
    const jsonData = await data.json()
    // console.log(jsonData)
    // console.log(jsonData.data.cards[2].data.data.cards)
    setRestaurantData(jsonData.data.cards[2].data.data.cards)
  }, [restaurantData])

  return (
    <section className="section">
      <main className="home container">
        {/************  Search ************/}
        <div className="search">
          <input className="search__input" placeholder="Search Restaurant ..." />
          <button className="search__btn">Search</button>
        </div>
        {/************  RestaurantList ************/}
        <Restaurant {...restaurantData} />
      </main>
    </section>
  )
}

export default Home
