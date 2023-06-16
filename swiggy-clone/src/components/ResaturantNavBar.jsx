import React, { useEffect, useState } from "react"
import { useRestaurantContext } from "../contexts/RestaurantContext"
import { sortRestaurants } from "../utils/helper"
import RestaurantFilter from "./RestaurantFilter"

const ResaturantNavBar = () => {
  const { restautants, setDisplayRestaurants, totalOpenRestautants, sortOptions } = useRestaurantContext()
  const [isSortOpen, setIsSortOpen] = useState(false)
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  return (
    <div className="border-b flex justify-between items-center py-4 md:pd-6">
      <h3 className="font-bold  sm:text-xl md:text-2xl">{totalOpenRestautants} Restaurants</h3>

      {/* web version */}
      <div className="hidden lg:block">
        <ul className="list-none flex items-center gap-6">
          {sortOptions?.map(sortOption => {
            return (
              <li
                onClick={e => {
                  let text = e?.target?.innerText
                  let sortedRestaurants = sortRestaurants(restautants, text)
                  // console.log("sortededRestaurants: ", sortedRestaurants)
                  setDisplayRestaurants(sortedRestaurants)
                }}
                key={sortOption.key}
                className="hover:text-orange-700"
              >
                {sortOption.title}
              </li>
            )
          })}
          <li className="hover:text-orange-700 border-4 py-0.5 px-2 rounded" onClick={e => setIsFilterOpen(prev => !prev)}>
            Filters
          </li>
          <li>{isFilterOpen && <RestaurantFilter closeFilter={() => setIsFilterOpen(false)} />}</li>
          {/* <li className="hover:text-orange-700"> {data}</li> */}
        </ul>
      </div>

      {/* Mobile Version */}
      <div className="lg:hidden flex gap-2 md:gap-4">
        <div className="relative">
          <button onClick={() => setIsSortOpen(prev => !prev)} className="p-1.5 md:p-2 bg-slate-800 text-white">
            Sort
          </button>
          <ul className={`${isSortOpen ? "block" : "hidden"} list-none absolute top-[130%] right-0 flex flex-col gap-2 shadow-lg p-2 bg-slate-600 text-white p-4`}>
            <li key="11" className="whitespace-nowrap">
              Relevance{" "}
            </li>
            <li key="12" className="whitespace-nowrap">
              Delivery Time{" "}
            </li>
            <li key="13" className="whitespace-nowrap">
              Rating{" "}
            </li>
            <li key="14" className="whitespace-nowrap">
              Cost: Low To High{" "}
            </li>
            <li key="15" className="whitespace-nowrap">
              Cost: High To Low{" "}
            </li>
          </ul>
        </div>
        <div>
          <button className="p-1.5 md:p-2 bg-slate-800 text-white">Filter</button>
        </div>
      </div>
    </div>
  )
}

export default ResaturantNavBar
