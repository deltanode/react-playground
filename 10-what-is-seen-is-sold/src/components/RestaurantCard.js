import { CLOUDINARY_CDN_LINK } from "../config"
import { Link } from "react-router-dom"

const RestaurantCard = () => {
  return (
    <div className="shadow-lg m-2 p-2 rounded-md hover:shadow-2xl">
      <img className="w-48 rounded-md" src={CLOUDINARY_CDN_LINK + "ach30rz8ebyckifblioq"} alt={"Restaurant Name"} />
      <Link to="/restaurant/44053">
        <h2 className="text-lg  text-orange-700 hover:text-orange-400">{"Restaurant Name"}</h2>
      </Link>
      <h3 className="py-1">{"Cuisines"}</h3>
      <h4 className="pb-2 text-gray-600">{"120 minutes"}</h4>
    </div>
  )
}

export default RestaurantCard
