import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Shimmer from "./Shimmer"
import useRestaurantMenu from "../utils/useRestaurantMenu"

const RestaurantMenu = () => {
  const param = useParams()
  const { id } = param

  const [restaurant, menu] = useRestaurantMenu(id)

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
