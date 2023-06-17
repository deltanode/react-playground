import React from "react"
import style from "../style"
import { useDispatch, useSelector } from "react-redux"
import { clearItems } from "../store/cartSlice"
import { MenuItem } from "../components"

const Cart = () => {
  const cartItems = useSelector(store => store.cart.items)
  const dispatch = useDispatch()

  console.log(cartItems)

  const handleClearCart = () => {
    dispatch(clearItems())
  }

  return (
    <section className={`${style.boxWidth} ${style.paddingX}`}>
      <div className="flex  justify-between items-start gap-2 mt-4 border p-4">
        {/* Food Items */}
        <div className="flex-1 border p-2">
          {/* cart heading */}
          <div className="flex justify-between items-center py-2 border-b">
            <h3>List of added Items: {cartItems.length}</h3>
            <button onClick={handleClearCart} className="border px-4 py-2 text-sm bg-slate-700 text-white hover:opacity-80 uppercase">
              Clear Cart
            </button>
          </div>

          {/* cart items */}
          <div className="p-2">
            {cartItems?.map((cartItem, index) => {
              return <MenuItem key={index} itemDetail={cartItem} fromCart={true} />
            })}
          </div>
        </div>

        {/* Food Items */}
        <div className="border w-[30%] p-4">Cart Total</div>
      </div>
    </section>
  )
}

export default Cart
