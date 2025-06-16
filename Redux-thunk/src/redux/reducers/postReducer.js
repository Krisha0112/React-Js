let initialState = {
    post : []
}
const postReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'getpost' :
            return {
                ...state
                posts = action.payload
            }

        default: 
            return state
    }
}

export default postReducer