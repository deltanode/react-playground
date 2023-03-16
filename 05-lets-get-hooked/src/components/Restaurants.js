import RestaurantCard from "./RestaurantCard"
import { restaurantList } from "../constants"

const Restaurants = () => {
  return (
    <div className="restaurant">
      {restaurantList.map(restaurant => {
        return <RestaurantCard {...restaurant.data} />
      })}
    </div>
  )
}

export default Restaurants
