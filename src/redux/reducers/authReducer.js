const { IS_LOADING, IS_AUTHENTICATE, USER_INFO, ACCESS_TOKEN } = "../actions/types.js"
const initialState = {
    isLoading: false,
    isAuthenticate: false,
    userInfo: {},
    accessToken: ""
}



const authReducer = (state = initialState, action) => {
    const { type, payload } = action
    if (type === IS_LOADING) {
        return {
            ...state,
            isLoading: payload
        }
    } else if (type === IS_AUTHENTICATE) {
        return {
            ...state,
            isAuthenticate: payload
        }
    } else if (type === USER_INFO) {
        return {
            ...state,
            userInfo: payload
        }
    } else if (type === ACCESS_TOKEN) {
        return {
            ...state,
            accessToken: payload
        }
    }

    else {
        return state
    }

}

export default authReducer