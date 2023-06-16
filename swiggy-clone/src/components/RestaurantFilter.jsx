import { useState } from "react"
import { filterRestaurants } from "../utils/helper"
import { useRestaurantContext } from "../contexts/RestaurantContext"
import FilterOptions from "./FilterOptions"

const RestaurantFilter = ({ closeFilter }) => {
  // let [filterSearchValue, setFilterSearchValue] = useState([])
  const { filterSearchValue, setFilterSearchValue, filterOptions, restautants, setDisplayRestaurants } = useRestaurantContext()

  // console.log("filterSearchValue: ", filterSearchValue)

  function handleSubmit(e) {
    e.preventDefault()
    let filteredRestaurants = filterRestaurants(restautants, filterSearchValue)
    // console.log("filterRestaurants: ", filteredRestaurants)
    setDisplayRestaurants(filteredRestaurants)
    closeFilter()
  }

  return (
    <div className="fixed z-10 w-screen h-screen top-0 left-0 bg-black/30 flex justify-end ">
      <div className="w-[35%] h-screen flex justify-between  flex-col bg-white gap-4 text-black">
        {/* filter header */}
        <div className="px-4 py-4 flex items-center gap-2 font-semibold shadow-md">
          <button className="p-2" onClick={() => closeFilter()}>
            X
          </button>
          <h3>Filter</h3>
        </div>
        {/* filter form */}
        <form onSubmit={handleSubmit} className="grow px-4 overflow-y-scroll flex flex-col gap-6 shadow-lg">
          {filterOptions?.map(filterOption => {
            return <FilterOptions key={filterOption.key} setFilterSearchValue={setFilterSearchValue} title={filterOption.title} options={filterOption.options} />
          })}
        </form>
        {/* filter footer */}
        <div className="px-4 pb-4 flex items-center gap-4 shadow-sm">
          <button className="px-6 py-3 border border-slate-500" onClick={() => setFilterSearchValue([])}>
            Clear
          </button>
          <button className="px-8 py-3 border bg-orange-400 text-white" onClick={handleSubmit}>
            Show Restaurants
          </button>
        </div>
      </div>
    </div>
  )
}

export default RestaurantFilter
