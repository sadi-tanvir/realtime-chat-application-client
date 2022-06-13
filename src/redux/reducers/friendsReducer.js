import { createReducer } from "@reduxjs/toolkit"
import axios from "axios"
import { apiBaseUrl } from "../../utils/apiBaseUrl"




const initialState = {
    friends: []
}


const friendsReducer = createReducer(initialState, {
    getFriends: (state, action) => {
        state.friends = action.payload
    }
})

export default friendsReducer