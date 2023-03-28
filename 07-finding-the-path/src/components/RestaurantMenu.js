import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { SWIGGY_RESTAURANT_DETAILS_API } from "../Config"
import Shimmer from "./Shimmer"

const RestaurantMenu = () => {
  const param = useParams()
  const { id } = param
  // ---useState ---
  const [restaurant, setRestaurant] = useState([])
  const [menu, setMenu] = useState([])

  // ---useEffect---
  useEffect(() => {
    console.log("I am useEffect() inside <RestaurantMenu />")
    getRestaurantMenu()
  }, [])

  async function getRestaurantMenu() {
    const data = await fetch(SWIGGY_RESTAURANT_DETAILS_API + id)
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
  return (
    <div className="menu flex-container">
      <div className="menu__restaurant">
        <hr />
        <h2>{restaurant.name + ", " + restaurant.city}</h2>
        <hr />
      </div>
      <div className="menu__card">
        <h3>Restaurant Menu</h3>
        {menu?.length === 0 ? (
          <Shimmer />
        ) : (
          <ul>
            {menu?.map((menuItem, index) => {
              return <li key={index}>{menuItem?.card?.info?.name}</li>
            })}
          </ul>
        )}
      </div>
    </div>
  )
}

export default RestaurantMenu
