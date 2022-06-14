import { createReducer } from "@reduxjs/toolkit"





const initialState = {
    currentChat: {}
}


const chatReducer = createReducer(initialState, {
    currentChat: (state, action) => {
        state.currentChat = action.payload
    }
})

export default chatReducer