import {configureStore} from "@reduxjs/toolkit"
import authReducer from "./reducers/authReducer"
import chatReducer from "./reducers/chatReducer"
import userUpdateReducer from "./reducers/userUpdateReducer"

const store = configureStore({
    reducer: {
        authReducer,
        chatReducer,
        userUpdateReducer
    }
})


export default store