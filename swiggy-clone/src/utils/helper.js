// funtion to filter restaurants
export function filterRestaurants(restaurants, searchCuisines) {
  // console.log("restaurants: ", restaurants)
  // console.log("restaurants: ", restaurants[0]?.data?.cuisines?.toString())
  // console.log("searchCuisines: ", searchCuisines[0])
  if (searchCuisines.length === 0) {
    return restaurants
  }
  const filteredRestaurants = restaurants.filter(restaurant => {
    return restaurant?.data?.cuisines?.toString().toLowerCase().includes(searchCuisines[0]?.toLowerCase())
  })
  return filteredRestaurants
}

// funtion to sort restaurants
export function sortRestaurants(restaurants, criteria) {
  const handleSort = {
    "Delivery Time": (firstItem, secondItem) => firstItem.data.minDeliveryTime - secondItem.data.minDeliveryTime,
    Rating: (firstItem, secondItem) => secondItem.data.avgRating - firstItem.data.avgRating,
    "Cost: Low to High": (firstItem, secondItem) => firstItem.data.costForTwo - secondItem.data.costForTwo,
    "Cost: High to Low": (firstItem, secondItem) => secondItem.data.costForTwo - firstItem.data.costForTwo,
    Relevance: (firstItem, secondItem) => {
      let first = firstItem.data.name.toUpperCase()
      let second = secondItem.data.name.toUpperCase()
      return first == second ? 0 : first < second ? -1 : 1
    }
  }
  return restaurants.slice().sort(handleSort[criteria])
}
