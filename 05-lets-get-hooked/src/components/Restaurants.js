import RestaurantCard from "./RestaurantCard"
import { restaurantList } from "../constants"

const Restaurants = () => {
  return (
    <div className="restaurant">
      {restaurantList.map(restaurant => {
        return <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
      })}
    </div>
  )
}

// const Restaurants = props => {
//   return (
//     <div className="restaurant">
//       {props.restaurantList.map(restaurant => {
//         return <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
//       })}
//     </div>
//   )
// }

export default Restaurants
