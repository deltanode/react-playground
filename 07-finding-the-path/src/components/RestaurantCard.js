import { CLOUDINARY_CDN_LINK } from "../Config"
import { Link } from "react-router-dom"

const RestaurantCard = ({ id, name, cuisines, maxDeliveryTime, cloudinaryImageId, area }) => {
  return (
    <div className="restaurant__card">
      <img className="restaurant__img" src={CLOUDINARY_CDN_LINK + cloudinaryImageId} />
      <h2 className="restaurant__heading">
        <Link to={"/restaurant/" + id}>{name?.slice(0, 15)}</Link>
      </h2>
      <h3 className="restaurant__cuisines"> {cuisines?.join(", ").slice(0, 5)}</h3>
      <h4 className="restaurant__delivery">
        {maxDeliveryTime} minutes | {area}
      </h4>
    </div>
  )
}

export default RestaurantCard
