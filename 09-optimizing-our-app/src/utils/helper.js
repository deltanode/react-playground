// Filter the restaurant data according input type
export function filterRestaurant(searchText, allRestaurant) {
  const filteredRestaurants = allRestaurant?.filter(restaurant => {
    const restaurantName = restaurant?.data?.name
    return restaurantName?.toLowerCase()?.includes(searchText?.toLowerCase())
  })
  return filteredRestaurants
}
