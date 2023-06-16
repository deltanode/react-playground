import { RestaurantCarousel, ResaturantNavBar, RestaurantCard, ShimmerHomePage } from "../components"
import { useRestaurantContext } from "../contexts/RestaurantContext"
import { filterRestaurants } from "../utils/helper"
import style from "../style"

const Home = () => {
  const { restautants, displayRestautants, setDisplayRestaurants, serverError, filterSearchValue, setFilterSearchValue } = useRestaurantContext()

  if (!displayRestautants) {
    return <ShimmerHomePage />
  }

  const handleFilterDelete = searchValue => {
    setFilterSearchValue(prev => {
      const val = prev.delete(searchValue)
      return prev
    })
    const filteredRestaurants = filterRestaurants(restautants, [...filterSearchValue])
    setDisplayRestaurants(filteredRestaurants)
  }

  return (
    <>
      {serverError ? (
        // Display Server Error
        <div className="flex justify-center text-red-600 py-16">Can't fetch data fom the server. Try again later</div>
      ) : (
        <div className="w-full flex flex-col items-center  ">
          {/* Restaurant Carousel */}
          <div className="w-full flex justify-center bg-slate-900">
            <div className={`${style.boxWidth} ${style.paddingX}`}>
              <RestaurantCarousel />
            </div>
          </div>

          <div className={`flex flex-col ${style.boxWidth} ${style.paddingX}`}>
            {/* Restaurant Navbar Section */}
            <ResaturantNavBar />

            {/* Filter Tag Section */}
            {[...filterSearchValue].length > 0 && (
              <ul className="pt-6 flex">
                {[...filterSearchValue].map((searchValue, index) => {
                  return (
                    <li key={index} className="border px-2 py-1 text-orange-500 ml-2" onClick={() => handleFilterDelete(searchValue)}>
                      {searchValue} x
                    </li>
                  )
                })}
              </ul>
            )}

            {/* "No Restaurant Found" Banner */}
            {displayRestautants.length === 0 && <div className="w-full flex justify-center py-8 text-red-600 text-2xl">No Restaurant Found</div>}

            {/* Restaurant List */}
            <div className="my-8 grid xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-6 lg:gap-4 lg:gap-6">
              {displayRestautants?.map(restautant => {
                return <RestaurantCard key={restautant.data.id} {...restautant.data} />
              })}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Home
