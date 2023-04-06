import { CLOUDINARY_CDN_LINK } from "../config"
import { Link } from "react-router-dom"

const RestaurantCard = ({ id, name, area, cuisines, cloudinaryImageId, maxDeliveryTime }) => {
  return (
    <div className="shadow-lg m-2 p-2 rounded-md hover:shadow-2xl">
      <img className="w-48 rounded-md" src={CLOUDINARY_CDN_LINK + cloudinaryImageId} alt={name} />
      <Link to={"/restaurant/" + id}>
        <h2 className="text-lg  text-orange-700 hover:text-orange-400">{name.slice(0, 20)}</h2>
      </Link>
      <h3 className="py-1">{cuisines.join(", ").slice(0, 22)}</h3>
      <h4 className="pb-2 text-gray-600">{maxDeliveryTime + " minutes"}</h4>
    </div>
  )
}

export default RestaurantCard
