import { useSelector, useDispatch } from "react-redux"
import { clearCart } from "../utils/cartSlice"
import FoodItems from "./FoodItems"

const Cart = () => {
  // const cartItems = useSelector(store => store)
  // const cartItems = useSelector(store => store.cart)

  // Redux-Toolkit: Subscribing the component to the store
  const cartItems = useSelector(store => store.cart.items)
  console.log("Cart: ", cartItems)

  // Redux-Toolkit: Dispatch an Action on button click
  const dispatch = useDispatch()

  function handleClearCart() {
    dispatch(clearCart())
  }
  return (
    <div className="w-[1024px] mx-auto px-2 py-3">
      <span className="flex justify-between items-center">
        <h2 className="text-xl font-medium text-orange-600 my-4">Cart [Total Items: {cartItems.length}]</h2>
        <button onClick={() => handleClearCart()} className="bg-amber-600  text-white py-1 px-2  rounded-lg hover:bg-amber-400">
          Clear Cart
        </button>
      </span>
      {cartItems?.map(item => {
        return <FoodItems key={item?.info?.id} {...item?.info} />
      })}
    </div>
  )
}

export default Cart
