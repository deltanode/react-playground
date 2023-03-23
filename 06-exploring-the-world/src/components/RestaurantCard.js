import { CLOUDINARY_CDN_LINK } from "../Config"

const RestaurantCard = ({ name, cuisines, maxDeliveryTime, cloudinaryImageId }) => {
  return (
    <div className="restaurant__card">
      <img className="restaurant__img" src={CLOUDINARY_CDN_LINK + cloudinaryImageId} />
      <h2 className="restaurant__heading"> {name.slice(0, 15)}</h2>
      <h3 className="restaurant__cuisines"> {cuisines.join(", ").slice(0, 5)}</h3>
      <h4 className="restaurant__delivery"> {maxDeliveryTime} minutes</h4>
    </div>
  )
}

export default RestaurantCard
