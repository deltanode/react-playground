import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: []
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload)
    },
    deleteItem: (state, action) => {
      state.items.pop()
      // TODO find & delete an item from the array
    },
    clearItems: (state, action) => {
      state.items = []
    }
  }
})

export const { addItem, deleteItem, clearItems } = cartSlice.actions
export default cartSlice.reducer
