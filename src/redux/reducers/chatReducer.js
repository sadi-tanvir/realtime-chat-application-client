import { createReducer } from "@reduxjs/toolkit"





const initialState = {
    friends: [],
    currentChat: {},
    messages:[],
    activeUsers: [],
    isTyping: {}
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
    },
    isTyping: (state, action) => {
        state.isTyping = action.payload
    },
    updateLastMsg: (state, action) => {
        state.friends.map(friend => friend.friendInfo._id === action.payload.senderId || friend.friendInfo._id === action.payload.receiverId)
        
    } 
})

export default chatReducer