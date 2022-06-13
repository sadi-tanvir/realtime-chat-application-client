import {configureStore} from "@reduxjs/toolkit"
import authReducer from "./reducers/authReducer"
import friendsReducer from "./reducers/friendsReducer"

const store = configureStore({
    reducer: {
        authReducer,
        friendsReducer
    }
})


export default store