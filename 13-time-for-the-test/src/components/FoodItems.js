import { CLOUDINARY_CDN_LINK } from "../config"
import { useDispatch } from "react-redux"
import { removeItem } from "../utils/cartSlice"

const FoodItems = props => {
  //   console.log(props)

  // Redux-Toolkit: Dispatch an Action on button click
  const dispatch = useDispatch()

  function handleRemoveItem(foodItem) {
    dispatch(removeItem(foodItem))
  }
  return (
    <div className="mt-3 p-4 border flex">
      <img src={CLOUDINARY_CDN_LINK + props.imageId} className="w-32" alt="food image" />
      <span className="ml-4">
        <h2 className="font-medium text-orange-500">{props.name}</h2>
        <h3 className=" text-md text-gray-700">{props.description}</h3>
        <h4 className="text-gray-700 font-medium">Rs. {props.price / 100}/-</h4>
        <button onClick={() => handleRemoveItem(props)} className="bg-red-400  text-white mt-3 py-1 px-2  rounded-lg hover:bg-red-500">
          Remove
        </button>
      </span>
    </div>
  )
}

export default FoodItems
