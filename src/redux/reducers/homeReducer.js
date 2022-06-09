

const initialState = {
    isChange: false
}
const homeReducer = (state = initialState, action) => {
    if (action.type === 'CHANGE') {
        return {
            ...state,
            isChange: true
        }
    }

    return state
}

export default homeReducer