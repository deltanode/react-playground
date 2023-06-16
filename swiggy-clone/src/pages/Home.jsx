import { useRestaurantContext } from "../contexts/RestaurantContext"
import { ResaturantNavBar, RestaurantCard } from "../components"
import ShimmerHomePage from "../components/ShimmerHomePage"

const Home = () => {
  const { restautants, displayRestautants, setDisplayRestaurants, serverError, filterSearchValue, setFilterSearchValue } = useRestaurantContext()

  // console.log("Home is running")

  if (!displayRestautants) {
    return <ShimmerHomePage />
  }

  return (
    <>
      {serverError ? (
        <div className="flex justify-center text-red-600 py-16">Can't fetch data fom the server. Try again later</div>
      ) : (
        <div className="flex flex-col">
          <ResaturantNavBar />

          {filterSearchValue.length > 0 && (
            <ul className="pt-6 flex">
              {filterSearchValue.map(searchValue => {
                return (
                  <li
                    className="border px-2 py-1"
                    onClick={() => {
                      setFilterSearchValue([])
                      setDisplayRestaurants(restautants)
                    }}
                  >
                    {searchValue} x
                  </li>
                )
              })}
            </ul>
          )}

          {displayRestautants.length === 0 && <div className="w-full flex justify-center py-8 text-red-600 text-2xl">No Restaurant Found</div>}
          <div className="my-8 grid xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-6 lg:gap-4 lg:gap-6">
            {displayRestautants?.map(restautant => {
              return <RestaurantCard key={restautant.data.id} {...restautant.data} />
            })}
          </div>
        </div>
      )}
    </>
  )
}

export default Home
