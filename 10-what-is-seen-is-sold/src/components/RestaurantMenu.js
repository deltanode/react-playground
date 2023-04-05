import { CLOUDINARY_CDN_LINK } from "../config"

const RestaurantMenu = () => {
  return (
    <div className="border-b my-4 px-3 pt-3 pb-5 flex justify-between items-center">
      <div>
        <h2>{"Restaurant Name"}</h2>
        <h3>{"Location"}</h3>
      </div>
      <div className="relative">
        <img className="w-28 rounded-md" src={CLOUDINARY_CDN_LINK + "ach30rz8ebyckifblioq"} alt={"Restaurant Name"} />
        <button className="px-4 py-1 rounded-md bg-white border hover:bg-orange-100 absolute z-10 bottom-[-5] left-[25%] shadow-md"> Add </button>
      </div>
    </div>
  )
}

export default RestaurantMenu
