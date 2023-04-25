import { createSlice } from "@reduxjs/toolkit"
import { LIVE_CHAT_COUNT } from "./constant"

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    message: []
  },
  reducers: {
    addMessage: (state, action) => {
      // state.message.splice(10, 1)
      state.message.splice(LIVE_CHAT_COUNT, 1)

      // state.message.push(action.payload)
      state.message.unshift(action.payload)
    }
  }
})

export const { addMessage } = chatSlice.actions
export default chatSlice.reducer
