import { useState, useEffect } from "react"
import { SWIGGY_RESTAURANT_DETAILS_API } from "../Config"

const useRestaurant = resId => {
  // ---useState ---
  const [restaurant, setRestaurant] = useState([])
  const [menu, setMenu] = useState([])

  // ---useEffect---
  useEffect(() => {
    // console.log("I am useEffect() inside <RestaurantMenu />")
    getRestaurantMenu()
  }, [])

  async function getRestaurantMenu() {
    const data = await fetch(SWIGGY_RESTAURANT_DETAILS_API + resId)
    const json = await data?.json()

    const restaurantData = json?.data?.cards[0].card.card.info
    // console.log(restaurantData)
    setRestaurant(restaurantData)

    const menuData = json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards
    // console.log(menuData)
    setMenu(menuData)
  }

  // menu.map(menuItem => {
  //   console.log(menuItem.card.info.name)
  // })

  return [restaurant, menu]
}

export default useRestaurant
