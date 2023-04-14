import { useParams } from "react-router-dom"
import RestaurantMenu from "./RestaurantMenu"
import Shimmer from "./Shimmer"
import useRestaurantMenu from "../utils/useRestaurantMenu"

const RestaurantDetail = () => {
  const { id: restaurantId } = useParams()
  const [restaurantInfo, restaurantMenu] = useRestaurantMenu(restaurantId)

  if (restaurantInfo.length === 0) {
    return <Shimmer />
  }

  return (
    <div className="w-[1024px] mx-auto mt-6">
      <div className="bg-gray-50 p-6  shadow-md">
        <h2 className="text-orange-600 text-2xl font-medium">{restaurantInfo?.name}</h2>
        <h3 className="pb-2">{restaurantInfo?.locality + ", " + restaurantInfo?.city}</h3>
        <h4 className="text-sm">{restaurantInfo?.cuisines?.join(", ")}</h4>
        <p className="text-gray-700 text-sm">{restaurantInfo?.costForTwoMessage}</p>
      </div>

      <div data-testid="menu" className="my-4 p-4">
        <h2 className="text-gray-700 text-lg font-semibold">Restaurant Menu</h2>
        {restaurantMenu?.map(e => {
          // console.log(e?.card?.card?.title)
          return e?.card?.card?.itemCards?.map(ele => {
            // console.log(ele?.card?.info?.name)
            return <RestaurantMenu info={ele?.card?.info} key={ele?.card?.info?.id} />
          })
        })}
      </div>
    </div>
  )
}

export default RestaurantDetail
