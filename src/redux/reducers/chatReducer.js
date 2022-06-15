import { createReducer } from "@reduxjs/toolkit"





const initialState = {
    friends: [],
    currentChat: {},
    messages:[]
}


const chatReducer = createReducer(initialState, {
    getFriends: (state, action) => {
        state.friends = action.payload
    },
    currentChat: (state, action) => {
        state.currentChat = action.payload
    },
    getMessages: (state, action) => {
        state.messages = action.payload
    }
})

export default chatReducer