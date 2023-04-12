// function to filter restaurants
export function filterRestaurant(searchTxt, allRestaurants) {
  //   console.log(allRestaurants)
  return allRestaurants?.filter(restaurant => {
    return restaurant?.data?.name?.toLowerCase()?.includes(searchTxt?.toLowerCase())
  })
}
