import { createSlice } from "@reduxjs/toolkit"

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: "true"
  },
  reducers: {
    toggleSidebar: state => {
      state.isMenuOpen = !state.isMenuOpen
    },
    closeSidebar: state => {
      state.isMenuOpen = false
    }
  }
})

export const { toggleSidebar, closeSidebar } = appSlice.actions
export default appSlice.reducer
