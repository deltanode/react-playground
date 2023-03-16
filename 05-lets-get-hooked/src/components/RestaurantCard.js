import { CLOUDINARY_CDN_LINK } from "../constants"

const RestaurantCard = ({ cloudinaryImageId, name, cuisines, deliveryTime }) => {
  return (
    <div className="restaurant__card">
      <img className="restaurant__img" src={CLOUDINARY_CDN_LINK + cloudinaryImageId}></img>
      <h2 className="restaurant__name">{name}</h2>
      <h3 className="restaurant__cuisines">{cuisines}</h3>
      <h4 className="restaurant__delivery">{deliveryTime} minutes</h4>
    </div>
  )
}

export default RestaurantCard
