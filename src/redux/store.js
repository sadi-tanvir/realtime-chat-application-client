import {configureStore} from "@reduxjs/toolkit"
import authReducer from "./reducers/authReducer"
import friendsReducer from "./reducers/friendsReducer"
import chatReducer from "./reducers/chatReducer"

const store = configureStore({
    reducer: {
        authReducer,
        friendsReducer,
        chatReducer
    }
})


export default store