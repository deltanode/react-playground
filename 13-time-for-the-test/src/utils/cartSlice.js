import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: []
  },
  reducers: {
    // "addItem":" is action & "(state action)=>{}" is reducer function
    addItem: (state, action) => {
      state.items.push(action.payload)
      // return                   /* Note: Never return from reducer function */
    },
    removeItem: (state, action) => {
      // removing the last item from the array
      state.items.pop()

      /* Find the element in the array & remove it */

      // console.log(action.payload)
      // const elementToRemove = action.payload
      // const indexToRemove = state.items.indexOf(elementToRemove)
      // console.log("elementToRemove: ", elementToRemove)
      // console.log("indexToRemove: ", indexToRemove)
    },
    clearCart: state => {
      state.items = []
    }
  }
})

export const { addItem, removeItem, clearCart } = cartSlice.actions
export default cartSlice.reducer
