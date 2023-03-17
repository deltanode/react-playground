import React from "react"
import { restaurantList } from "../constants"

function filterRestaurant(searchText, restaurantList) {
  return restaurantList.filter(restaurant => restaurant.data.name.includes(searchText))
  //   console.log(searchText)
  //   console.log(restaurantList)
  //   console.log(setRestaurantList)
}

const Search = props => {
  //   let searchTxt = "search value"                    // Local Variable
  const [searchText, setSearchText] = React.useState("") // Local State Variable

  //   console.log(props)
  return (
    <div className="search">
      <input className="search__input" type="text" placeholder="Search Restaurants ..." value={searchText} onChange={e => setSearchText(e.target.value)}></input>
      <button className="search__button" onClick={console.log(filterRestaurant(searchText, props.restaurantList))}>
        Search
      </button>
      <span>{searchText}</span>
    </div>
  )
}

export default Search
