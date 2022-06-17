import { createReducer } from "@reduxjs/toolkit"





const initialState = {
    friends: [],
    currentChat: {},
    messages:[],
    activeUsers: [],
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
    },
    activeUsers: (state, action) => {
        state.activeUsers = action.payload
    },
    socketMessage: (state, action) => {
        state.messages.push(action.payload)
    }
})

export default chatReducer