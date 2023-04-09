import { CLOUDINARY_CDN_LINK } from "../config"
import { useDispatch } from "react-redux"
import { addItem } from "../utils/cartSlice"

const RestaurantMenu = props => {
  // console.log(props)
  // console.log(props.info)
  // console.log(props.info.name)

  const dispatch = useDispatch()

  const handleAddItem = foodItem => {
    // dispatch(addItem("grapes"))
    dispatch(addItem(foodItem))
  }

  return (
    <div className="border-b my-4 px-3 pt-3 pb-5 flex justify-between items-center">
      <div>
        <h2 className="text-orange-500 text-md">{props?.info?.name}</h2>
        <h3 className="text-gray-800">{props?.info?.category}</h3>
        <h4 className="text-gray-900 text-sm">{"Rs " + props?.info?.price / 100 + "/-"}</h4>
      </div>
      <div className="relative">
        <img className="w-28 rounded-md" src={CLOUDINARY_CDN_LINK + props?.info?.imageId} alt={props?.info?.name} />
        <button onClick={() => handleAddItem(props)} className="px-4 py-1 rounded-md bg-white border hover:bg-orange-100 absolute z-10 bottom-[-5] left-[25%] shadow-md">
          {" "}
          Add{" "}
        </button>
      </div>
    </div>
  )
}

export default RestaurantMenu
