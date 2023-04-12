import { configureStore } from "@reduxjs/toolkit"
import cardSlice from "./cartSlice"

const store = configureStore({
  reducer: {
    cart: cardSlice
  }
})

export default store
