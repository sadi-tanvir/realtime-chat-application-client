import { createReducer } from "@reduxjs/toolkit"
import axios from "axios"
import { apiBaseUrl } from "../../utils/apiBaseUrl"



const initialState = {
    isLoading: false,
    isAuthenticate: false,
    userInfo: {},
    accessToken: ""
}



const authReducer = createReducer(initialState, {
    loginUser: (state, action) => {
        state.isAuthenticate = true
    },
    logOutUser: (state, action) => {
        state.isAuthenticate = false
        state.isLoading = false
        state.userInfo = {}
        state.accessToken = ""
    },
    userInfo: (state, action) => {
        state.userInfo = action.payload
    },
    accessToken: (state, action) => {
        state.accessToken = action.payload
    },
    homeChange: (state, action) => {
        state.isLoading = !state.isLoading
    }
})

export default authReducer





// const authReducer2 = (state, action) => {

//     if (action.type === 'LOGIN_USER') {
//         return {
//             ...state,
//             isAuthenticate: true
//         }
//     } if (action.type === 'LOGOUT_USER') {
//         return {
//             ...state,
//             isAuthenticate: false,
//             isLoading: false,
//             userInfo: {},
//             accessToken: ""
//         }
//     } if (action.type === 'IS_LOADING') {
//         return {
//             ...state,
//             isLoading: action.payload
//         }
//     } if (action.type === "USER_INFO") {
//         return {
//             ...state,
//             userInfo: action.payload
//         }
//     } if (action.type === 'ACCESS_TOKEN') {
//         return {
//             ...state,
//             accessToken: action.payload
//         }
//     }
//     else {

//         return state

//     }
// }

// export { authReducer2 }