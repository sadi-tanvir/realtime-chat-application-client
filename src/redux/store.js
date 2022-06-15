import {configureStore} from "@reduxjs/toolkit"
import authReducer from "./reducers/authReducer"
import chatReducer from "./reducers/chatReducer"

const store = configureStore({
    reducer: {
        authReducer,
        chatReducer
    }
})


export default store