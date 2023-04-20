import { createSlice } from "@reduxjs/toolkit"

const searchCacheSlice = createSlice({
  name: "search",
  initialState: {
    searchCache: {
      zzzz: ["hi", "bye"]
    }
  },
  reducers: {
    setSearchCache: (state, action) => {
      //   state.searchCache = Object.assign(state.searchCache, action.payload)
      state.searchCache = { ...state.searchCache, ...action.payload }
    }
  }
})

export const { setSearchCache } = searchCacheSlice.actions
export default searchCacheSlice.reducer
