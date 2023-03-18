import RestaurantCard from "./RestaurantCard"

const Restaurant = props => {
  console.log(props)
  return (
    <div className="restaurant">
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
    </div>
  )
}

export default Restaurant
