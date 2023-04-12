import { useEffect, useState } from "react"
import { SWIGGY_RESTAURANT_DETAILS_API } from "../config"

const useRestaurantMenu = restaurantId => {
  const [restaurantInfo, setRestaurantInfo] = useState([])
  const [restaurantMenu, setRestaurantMenu] = useState([])

  useEffect(() => {
    getRestaurantMenu()
  }, [])

  async function getRestaurantMenu() {
    const data = await fetch(SWIGGY_RESTAURANT_DETAILS_API + restaurantId)
    const json = await data.json()
    // console.log("Restaurant Info: ", json?.data?.cards[0]?.card?.card?.info)
    setRestaurantInfo(json?.data?.cards[0]?.card?.card?.info)

    // console.log(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
    const menu = json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(e => {
      if (e?.card?.card?.title) {
        return true
      }
    })
    // console.log("Restaurant Menu: ", menu)
    setRestaurantMenu(menu)
  }

  return [restaurantInfo, restaurantMenu]
}

export default useRestaurantMenu
