import { configureStore } from "@reduxjs/toolkit"
import appSlice from "./appSlice"
import searchCacheSlice from "./searchCacheSlice"
import chatSlice from "./chatSlice"

const store = configureStore({
  reducer: {
    app: appSlice,
    search: searchCacheSlice,
    chat: chatSlice
  }
})

export default store
