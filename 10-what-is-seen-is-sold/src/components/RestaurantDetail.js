import { useParams } from "react-router-dom"
import RestaurantMenu from "./RestaurantMenu"

const RestaurantDetail = () => {
  const { id: restaurantId } = useParams()
  console.log(restaurantId)
  return (
    <div className="w-[1024px] mx-auto mt-4">
      <div className="bg-gray-50 p-4  shadow-md">
        <h2 className="text-orange-600 text-xl font-medium">{"Restaurant Name"}</h2>
        <h3 className="">{"Location"}</h3>
        {restaurantId}
      </div>
      <div className="my-4 p-4">
        <h2 className="text-gray-700 text-lg font-semibold">Restaurant Menu</h2>
        <RestaurantMenu />
        <RestaurantMenu />
        <RestaurantMenu />
        <RestaurantMenu />
      </div>
    </div>
  )
}

export default RestaurantDetail
