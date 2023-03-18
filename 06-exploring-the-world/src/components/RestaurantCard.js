import { CLOUDINARY_CDN_LINK } from "../Config"

const RestaurantCard = () => {
  return (
    <div className="restaurant__card">
      <img className="restaurant__img" src={CLOUDINARY_CDN_LINK} />
      <h2 className="restaurant__heading"> KFC</h2>
      <h3 className="restaurant__cuisines"> Burger, Pizza</h3>
      <h4 className="restaurant__delivery"> 30 minutes</h4>
    </div>
  )
}

export default RestaurantCard
